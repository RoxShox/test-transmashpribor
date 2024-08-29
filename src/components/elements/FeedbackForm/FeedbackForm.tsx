import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "../Button/Button"
import styled from "./FeedbackForm.module.scss"
import { useMask } from "@react-input/mask"
import { useHookFormMask } from "use-mask-input"
import InputMaskedPhone from "../InputMaskedPhone/InputMaskedPhone"
import { ErrorMessage } from "@hookform/error-message"

interface FormValues {
	name: string
	phone: string
}

interface FeedbackFormProps {
	onSubmit: (data: FormValues) => void
}
const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const submitForm: SubmitHandler<FormValues> = (data) => {
		onSubmit(data)
		reset()
	}

	return (
		<form className={styled.form} onSubmit={handleSubmit(submitForm)}>
			<input
				className={styled.form__input}
				{...register("name", { required: true })}
				placeholder="Имя"
			/>
			<ErrorMessage
				errors={errors}
				name="name"
				render={({ message }) => (
					<span className="input__error">Имя обязательно</span>
				)}
			/>

			<InputMaskedPhone
				name="phone"
				register={register}
				inputMask="+7 999-999-99-99"
				regExp={/^\+7 \d{3}-\d{3}-\d{2}-\d{2}$/}
				placeholder="+7 --- --- -- --"
				className={styled.form__input}
			/>
			<ErrorMessage
				errors={errors}
				name="phone"
				render={({ message }) => (
					<span className="input__error">
						Номер телефона должен быть в формате +7 999-999-99-99
					</span>
				)}
			/>

			<Button className={styled.form__btn}>Перезвонить мне</Button>
		</form>
	)
}

export default FeedbackForm
