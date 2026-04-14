import type { ChangeEvent, FC } from "react";

interface FloatingLabelInputProps {
    label: string;
    type: 'text' | 'date' | 'password';
    name: string;
    value?: string | any;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    newLabelClassName?: string;
    labelClassName?: string;
    newInputClassName?: string;
    inputClassName?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    errors?: string[];
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ label, type, name, value, onChange, newLabelClassName, labelClassName, newInputClassName, inputClassName, required, autoFocus, disabled,
    readonly, errors }) => {
    return (
        <>
            <div className="relative">
                <input type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`${newInputClassName ?
                        newInputClassName : `block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer ${inputClassName}`
                        }`}
                    placeholder=" "

                    autoFocus={autoFocus}
                    disabled={disabled}
                    readOnly={readonly}
                />

                <label htmlFor={name}
                    className={`${newLabelClassName ? newLabelClassName : `absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelClassName}`

                        }`}
                >

                    {label}
                    {required && (
                        <span className="text-red-600">*</span>
                    )}

                </label>
                {errors && errors.length > 0 && (
                    <span className="text-red-600 text-xs">{errors[0]}</span>
                )}
            </div>
        </>
    )
}

export default FloatingLabelInput