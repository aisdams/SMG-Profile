import classNames from 'classnames';
import { useController } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { HiOutlineCalendar, HiXCircle } from 'react-icons/hi';

interface Props {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  showMonthYearPicker?: boolean;
}

export default function InputDate({
  name,
  placeholder,
  disabled,
  className,
  showMonthYearPicker = false,
  ...props
}: Props) {
  const { field, fieldState } = useController({ name });

  const onChange = (date: any) => {
    field.onChange(date);
  };

  return (
    <section className="w-full">
      <div className="relative">
        <DatePicker
          name={field.name}
          onChange={onChange}
          onBlur={field.onBlur}
          ref={(elem: any) => {
            elem && field.ref(elem.input);
          }}
          selected={field.value}
          id={name}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          className={classNames(
            'font-monserrat input input-bordered w-full px-9 p-2 border rounded',
            fieldState.error && 'input-error',
            className
          )}
          disabled={disabled}
          //   portalId="root-portal"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          autoComplete="off"
          showMonthYearPicker={showMonthYearPicker}
          {...props}
        />

        {/* Date Icon */}
        <div
          className={classNames(
            'pointer-events-none absolute inset-y-0 left-0 flex items-center px-3',
            fieldState.error && 'text-error'
          )}
        >
          <HiOutlineCalendar className="text-lg" />
        </div>

        {field.value && !disabled && (
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-lg">
            <HiXCircle
              className="cursor-pointer transition hover:opacity-80"
              onClick={() => field.onChange(null)}
            />
          </div>
        )}
      </div>

      {/* Error Message */}
      {fieldState.error && (
        <p className="mt-1 text-xs text-red-500">{fieldState.error?.message}</p>
      )}
    </section>
  );
}
