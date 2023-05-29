import { useCallback } from 'react';
import Select from 'react-select';
import { useFormContext, useController } from 'react-hook-form';
import { debounce } from 'lodash';

interface Props {
  name: string;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  // typeFirst?: boolean;
  uniqueField?: string;
  query?: any;
  inputValue?: any;
  setInputValue?: any;
  optionLabel?: (option: any) => string;
  func?: (option: any) => void;
}

export default function InputSelectDynamic({
  name,
  isLoading,
  disabled,
  placeholder = 'Silahkan Pilih...',
  // typeFirst = false,
  uniqueField,
  query,
  inputValue,
  setInputValue,
  optionLabel,
  func,
  ...props
}: Props) {
  const { register } = useFormContext();
  const { field, fieldState } = useController({ name });

  //! onChange INPUT
  const onInputChange = useCallback(
    debounce((newInputValue) => {
      setInputValue(newInputValue);
    }, 500),
    []
  );

  //! onChange SELECT
  const onChange = (value: any, action: any) => {
    if (action === 'clear') {
      field.onChange('');
      return;
    }

    if (value) {
      if (func) {
        func(value);
      }
      if (typeof uniqueField !== 'undefined') {
        field.onChange(value[uniqueField]);
      }
      return;
    }

    field.onChange('');
  };

  return (
    <section className="w-full">
      <Select
        {...register(name)}
        onChange={onChange}
        id={name}
        instanceId={name}
        options={inputValue?.length < 1 ? [] : query?.data || []}
        isLoading={isLoading}
        onInputChange={onInputChange}
        value={
          field.value && query?.data?.length > 0
            ? query?.data?.find(
                (option: any) =>
                  option[uniqueField as keyof typeof option] == field.value
              )
            : field.value
        }
        getOptionLabel={optionLabel}
        getOptionValue={(option) =>
          uniqueField ? option[uniqueField] : option.value
        }
        noOptionsMessage={({ inputValue }) =>
          inputValue.length < 1
            ? 'Ketik minimal 1 karakter'
            : `Keyword "${inputValue}" tidak ditemukan`
        }
        isDisabled={disabled}
        placeholder={placeholder}
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 10 }),
          menu: (provided) => ({ ...provided, zIndex: 10 }),
          control: (provided) => {
            let borderColor;
            if (fieldState.error) {
              borderColor = '#E58B8B !important';
            } else if (fieldState.isDirty && !fieldState.error) {
              borderColor = '#28c76f !important';
            }

            return { ...provided, borderColor };
          },
        }}
        isClearable
        classNamePrefix="react-select"
        {...props}
      />

      {/* Error Message */}
      {fieldState.error && (
        <p className="mt-1 text-xs text-red-500">{fieldState.error?.message}</p>
      )}
    </section>
  );
}
