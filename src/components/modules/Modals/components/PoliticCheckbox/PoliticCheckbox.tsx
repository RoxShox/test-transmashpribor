import React from "react"
import styled from "./PoliticCheckbox.module.scss"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

interface InputFieldProps<T extends FieldValues> {
	register: UseFormRegister<T>
	name: Path<T>
	error: FieldValues | undefined
}
const PoliticCheckbox = <T extends FieldValues>({
	register,
	name,
	error,
}: InputFieldProps<T>) => {
	return (
		<div className={styled.checkbox_container}>
			<div className={styled.checkbox__input_wrap}>
				<input type="checkbox" {...register(name, { required: true })} />
				<label className={styled.checkbox_label}>
					Я соглашаюсь на обработку персональных данныхи с политикой
					конфиденциальности
				</label>
			</div>

			<ErrorMessage
				errors={error}
				name={name}
				render={({ message }) => (
					<span className="input__error">
						Необходимо согласие с политикой конфиденциальности
					</span>
				)}
			/>
		</div>
	)
}

export default PoliticCheckbox
