import React from "react"
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form"
import { RepairFormValues } from "../../ModalRepair/ModalRepair"
interface InputFieldProps<T extends FieldValues> {
	register: UseFormRegister<T>
	name: keyof T
	error: FieldError | undefined
	placeholder: string
	inputClasses: string
}
const TextField = ({
	register,
	name,
	error,
	placeholder,
	inputClasses,
}: InputFieldProps<RepairFormValues>) => {
	// const inputClasses = classNames(name, {
	// 	[styled.form__input]: true,
	// 	[styled.form__input_error]: errors[inputName], // Проверяем наличие ошибки для конкретного инпута
	// })
	return (
		<>
			<input
				className={inputClasses}
				{...register("name", { required: true })}
				placeholder={placeholder}
			/>
			{error && <span className="input__error">Имя обязательно</span>}
		</>
	)
}

export default TextField
