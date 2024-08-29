import Modal from "../../../elements/Modal/Modal"

import styled from "../../../../styleModules/Modals.module.scss"

import { useForm } from "react-hook-form"

import Button from "../../../elements/Button/Button"
import PoliticCheckbox from "../components/PoliticCheckbox/PoliticCheckbox"
import classNames from "classnames"
import InputMaskedPhone from "../../../elements/InputMaskedPhone/InputMaskedPhone"
import { ErrorMessage } from "@hookform/error-message"
import CloseIcon from "../../../../assets/icon/default-close-icon.svg"
export interface RepairFormValues {
	name: string
	phone: string
	privacyPolicy: boolean
	comment?: string
}

interface ModalRepairProps {
	closeModal: () => void
	isModalOpen: boolean
	submitForm: (data: RepairFormValues) => void
}

const ModalRepair = ({
	closeModal,
	isModalOpen,
	submitForm,
}: ModalRepairProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RepairFormValues>()

	const submitFormFromModal = (data: RepairFormValues) => {
		submitForm(data)
		reset()
	}
	return (
		<Modal onClose={closeModal} open={isModalOpen} closeIcon={CloseIcon}>
			<form onSubmit={handleSubmit(submitFormFromModal)}>
				<div className={styled.form__raw_wrap}>
					<label className={styled.form__label} htmlFor="">
						ВАШЕ ИМЯ:
					</label>

					<input
						className={classNames("name", {
							[styled.form__input]: true,
							[styled.form__input_error]: errors.name,
						})}
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
				<div className={styled.form__raw_wrap}>
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
								{" "}
								Номер телефона должен быть в формате +7 999-999-99-99
							</span>
						)}
					/>
				</div>

				<div className={styled.form__raw_wrap}>
					<label className={styled.form__label} htmlFor="">
						КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):
					</label>

					<input
						className={styled.form__input}
						{...register("comment")}
						placeholder="Введите ваши пожелания"
					/>
				</div>
				<PoliticCheckbox
					register={register}
					name="privacyPolicy"
					error={errors}
				/>
				<Button className={styled.form__btn} type="submit">
					Отправить
				</Button>
			</form>
		</Modal>
	)
}

export default ModalRepair
