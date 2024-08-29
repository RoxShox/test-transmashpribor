import React from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"

interface InputMaskedPhoneProps<T extends FieldValues> {
	className?: string
	register: UseFormRegister<T>
	inputMask: string
	name: Path<T>
	regExp: RegExp
	placeholder: string
}

const InputMaskedPhone = <T extends FieldValues>({
	className,
	register,
	inputMask,
	regExp,
	placeholder,
	name,
}: InputMaskedPhoneProps<T>) => {
	const registerWithMask = useHookFormMask(register)

	return (
		<input
			className={className}
			{...registerWithMask(name, inputMask, {
				required: true,
				validate: {
					isComplete: (value) => {
						// Проверка на полное заполнение номера
						const isValid = regExp.test(value)
						return isValid
					},
				},
			})}
			placeholder={placeholder}
		/>
	)
}

export default InputMaskedPhone
