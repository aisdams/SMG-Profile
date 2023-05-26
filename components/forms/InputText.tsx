import classNames from 'classnames';
import { useFormContext, useController } from 'react-hook-form';

interface Props {
  name: string;
  placeholder?: string;
  defaultcase?: boolean;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  auth?: boolean;
  blur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  keyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  nofieldState?: boolean;
}

export default function InputText({
  // control,
  name,
  placeholder,
  defaultcase,
  disabled,
  className,
  containerClassName,
  auth,
  blur,
  keyDown,
  nofieldState,
}: Props) {
  const { register } = useFormContext();
  const { field, fieldState } = useController({ name });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (defaultcase) {
      return field.onChange(e.target.value);
    }

    //! UpperCase Logic
    const { selectionStart, selectionEnd } = e.target;
    const startPos = selectionStart;
    const endPos = selectionEnd;
    e.target.value = e.target.value.toUpperCase();
    e.target.setSelectionRange(startPos, endPos);

    field.onChange(e.target.value);
  };

  return (
    <section className={classNames('w-full', containerClassName)}>
      <div className="relative">
        <input
          {...register(name)}
          onChange={onChange}
          value={field.value}
          id={name}
          placeholder={placeholder}
          className={classNames(
            'input input-bordered w-full mt-5 p-2 border rounded',
            !nofieldState && fieldState.error && 'input-error',
            !nofieldState &&
              !auth &&
              fieldState.isDirty &&
              !fieldState.error &&
              'input-success',
            className
          )}
          disabled={disabled}
          readOnly={disabled}
          onBlur={blur}
          onKeyDown={keyDown}
        />

        {!nofieldState && !auth && fieldState.isDirty && !fieldState.error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <i className="fas fa-check text-success" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {!nofieldState && fieldState.error && (
        <p className="mt-1 text-xs text-red-500">{fieldState.error?.message}</p>
      )}
    </section>
  );
}
