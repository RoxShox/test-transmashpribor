import React from "react"
import Modal from "../../../elements/Modal/Modal"
import { SubmitHandler, useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import styled from "../../../../styleModules/Modals.module.scss"
import localStyled from "./ModalService.module.scss"
import Typography from "../../../elements/Typography/Typography"
import Button from "../../../elements/Button/Button"
import classNames from "classnames"
import InputMaskedPhone from "../../../elements/InputMaskedPhone/InputMaskedPhone"
import { ErrorMessage } from "@hookform/error-message"
import CloseIcon from "../../../../assets/icon/default-close-icon.svg"
export interface ServiceFormValues {
	name: string
	phone: string
	service: string
}

interface ModalServiceProps {
	closeModal: () => void
	isModalOpen: boolean
	submitForm: (data: ServiceFormValues) => void
	service: string
}

const ModalService = ({
	closeModal,
	isModalOpen,
	service,
	submitForm,
}: ModalServiceProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ServiceFormValues>()

	const submitFormFromModal: SubmitHandler<ServiceFormValues> = (data) => {
		submitForm(data)

		reset()
	}
	return (
		<Modal onClose={closeModal} open={isModalOpen} closeIcon={CloseIcon}>
			<form onSubmit={handleSubmit(submitFormFromModal)}>
				<div
					className={classNames(
						styled.form__raw_wrap,
						styled.form__raw_wrap_mb
					)}
				>
					<label className={styled.form__label}>ВАШЕ ИМЯ:</label>
					<input
						className={styled.form__input}
						{...register("name", { required: true })}
						placeholder="Имя"
					/>
					<ErrorMessage
						errors={errors}
						name={"name"}
						render={({ message }) => (
							<span className="input__error">Имя обязательно</span>
						)}
					/>
				</div>
				<div
					className={classNames(
						styled.form__raw_wrap,
						styled.form__raw_wrap_mb
					)}
				>
					<label className={styled.form__label}>ВАШ ТЕЛЕФОН:</label>
					<InputMaskedPhone
						name="phone"
						register={register}
						inputMask="+7 (999) 999-99-99"
						regExp={/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/}
						placeholder="+7 (000) 000-00-00"
						className={classNames({
							[styled.form__input]: true,
							[styled.form__input_error]: errors.phone,
						})}
					/>
					<ErrorMessage
						errors={errors}
						name={"phone"}
						render={({ message }) => (
							<span className="input__error">
								Номер телефона должен быть в формате +7 999-999-99-99
							</span>
						)}
					/>
				</div>
				<div
					className={classNames(
						styled.form__raw_wrap,
						styled.form__raw_wrap_mb
					)}
				>
					<label className={styled.form__label}>УСЛУГА:</label>
					<div className={localStyled.form__service_name_wrap}>
						<input
							readOnly
							className={localStyled.form__service_name}
							placeholder={service}
							value={service}
							{...register("service")}
						/>
						<Typography
							variant="text"
							className={localStyled.form__service_brand}
						>
							Apple, смартфон
						</Typography>
					</div>
				</div>
				<Button className={styled.form__btn}>Отправить</Button>
			</form>
		</Modal>
	)
}

export default ModalService
