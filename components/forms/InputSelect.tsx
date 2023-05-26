import Select from 'react-select';
import { useFormContext, useController } from 'react-hook-form';

interface Props {
  name: string;
  options: { value: string; label: string }[];
  optionLabel?: (option: any) => string;
  disabled?: boolean;
  valueKey?: string;
  placeholder?: string;
  resetFieldAfterChange?: string[];
  setValueParent?: (name: string, value: any) => void;
  func?: (option: any) => void;
}

export default function InputSelect({
  name,
  options = [],
  optionLabel,
  disabled,
  valueKey,
  placeholder,
  resetFieldAfterChange,
  setValueParent,
  func,
  ...props
}: Props) {
  const { register } = useFormContext();
  const { field, fieldState } = useController({ name });

  const onChange = (option: any, action: any) => {
    if (action === 'clear') {
      field.onChange('');

      if (resetFieldAfterChange) {
        resetFieldAfterChange.forEach((field: string) => {
          if (setValueParent) {
            setValueParent(field, '');
          }
        });
      }

      return;
    }

    if (option) {
      if (valueKey) {
        field.onChange(option[valueKey]);

        if (resetFieldAfterChange) {
          resetFieldAfterChange.forEach((field: string) => {
            if (setValueParent) {
              setValueParent(field, '');
            }
          });
        }

        if (func) {
          func(option);
        }
        return;
      }

      //! else (no valueKey)
      field.onChange(option.value);
      if (func) {
        func(option);
      }

      if (resetFieldAfterChange) {
        resetFieldAfterChange.forEach((field: string) => {
          if (setValueParent) {
            setValueParent(field, '');
          }
        });
      }

      return;
    }

    field.onChange('');

    if (resetFieldAfterChange) {
      resetFieldAfterChange.forEach((field: string) => {
        if (setValueParent) {
          setValueParent(field, '');
        }
      });
    }

    if (func) {
      func('clear');
    }
  };

  return (
    <section className="w-full">
      <Select
        {...register(name)}
        value={
          field.value
            ? options.find((option) => {
                const stringValue = String(
                  valueKey
                    ? option[valueKey as keyof typeof option].toLowerCase()
                    : option.value.toLowerCase()
                );

                return stringValue === String(field.value.toLowerCase());
              })
            : field.value
        }
        getOptionLabel={optionLabel}
        getOptionValue={(option) =>
          valueKey ? option[valueKey] : option.value
        }
        id={name}
        instanceId={name}
        options={options}
        //   label={label}
        isDisabled={disabled}
        onChange={onChange}
        // menuPortalTarget={document.body}
        isClearable={!disabled}
        classNamePrefix="react-select"
        placeholder={placeholder}
        noOptionsMessage={({ inputValue }) =>
          !inputValue
            ? 'Tidak ada opsi'
            : `Keyword "${inputValue}" tidak ditemukan`
        }
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
        {...props}
      />

      {/* Error Message */}
      {fieldState.error && (
        <p className="mt-1 text-xs text-red-500">{fieldState.error?.message}</p>
      )}
    </section>
  );
}
