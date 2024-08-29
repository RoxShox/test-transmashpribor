import Modal from "../../../elements/Modal/Modal"

import styled from "../../../../styleModules/Modals.module.scss"

import { Controller, useForm } from "react-hook-form"

import Button from "../../../elements/Button/Button"
import PoliticCheckbox from "../components/PoliticCheckbox/PoliticCheckbox"
import classNames from "classnames"
import ModalSelect from "../components/ModalSelect/ModalSelect"
import {
	selectItemBrand,
	selectItemModel,
	selectItemTechnic,
} from "../../../../constants"
import InputMaskedPhone from "../../../elements/InputMaskedPhone/InputMaskedPhone"
import { ErrorMessage } from "@hookform/error-message"
import { Option } from "../../../../types"
import CloseIcon from "../../../../assets/icon/default-close-icon.svg"
export interface ParsingFormValues {
	name: string
	phone: string
	privacyPolicy: boolean
	model: Option
	brand: Option
	technic: Option
}

interface ModalParsingProps {
	closeModal: () => void
	isModalOpen: boolean
	submitForm: (data: ParsingFormValues) => void
}

const ModalParsing = ({
	closeModal,
	isModalOpen,
	submitForm,
}: ModalParsingProps) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ParsingFormValues>()

	return (
		<Modal onClose={closeModal} open={isModalOpen} closeIcon={CloseIcon}>
			<form onSubmit={handleSubmit(submitForm)}>
				<div
					className={classNames(
						styled.form__raw_wrap,
						styled.form__raw_wrap_mb
					)}
				>
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
					<label className={styled.form__label} htmlFor="">
						ТЕХНИКА:
					</label>

					<Controller
						name="technic"
						control={control}
						render={({ field }) => (
							<ModalSelect
								options={selectItemTechnic}
								onChange={(selectedOption) => field.onChange(selectedOption)}
								value={field.value}
							/>
						)}
					/>
				</div>
				<div className={styled.form__small__select_wrap}>
					<div
						className={classNames(
							styled.form__raw_wrap,
							styled.form__raw_wrap_mb
						)}
					>
						<label className={styled.form__label} htmlFor="">
							БРЕНД:
						</label>

						<Controller
							name="brand"
							control={control}
							render={({ field }) => (
								<ModalSelect
									options={selectItemBrand}
									onChange={(selectedOption) => field.onChange(selectedOption)}
									value={field.value}
								/>
							)}
						/>
					</div>
					<div
						className={classNames(
							styled.form__raw_wrap,
							styled.form__raw_wrap_mb
						)}
					>
						<label className={styled.form__label} htmlFor="">
							МОДЕЛЬ:
						</label>

						<Controller
							name="model"
							control={control}
							render={({ field }) => (
								<ModalSelect
									options={selectItemModel}
									onChange={(selectedOption) => field.onChange(selectedOption)}
									value={field.value}
								/>
							)}
						/>
					</div>
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

export default ModalParsing
