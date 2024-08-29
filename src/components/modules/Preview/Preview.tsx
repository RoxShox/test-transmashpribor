import React from "react"
import Typography from "../../elements/Typography/Typography"
import MainMobile from "../../../assets/img/main-mobile.png"
import styled from "./Preview.module.scss"
import Button from "../../elements/Button/Button"
import ModalRepair, {
	RepairFormValues,
} from "../Modals/ModalRepair/ModalRepair"
import { useModal } from "../../../hooks/useModal"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import { SubmitHandler } from "react-hook-form"
const Preview = () => {
	const repairModal = useModal()
	const thankModal = useModal()

	const submitForm: SubmitHandler<RepairFormValues> = (data) => {
		alert(JSON.stringify(data))
		repairModal.closeModal()
		thankModal.openModal()
	}

	return (
		<section className={styled.preview}>
			<div className={styled.preview__wrap}>
				<div className={styled.preview__text_content}>
					<Typography className={styled.preview__title} variant="h1">
						Ремонт <span>VIVO</span> в Екатеринбурге любой сложности
					</Typography>
					<Typography className={styled.preview__subtitle} variant="h5">
						Ремонтируем устройства любой сложности в кратчайшие сроки и с
						гарантией до 3 месяцев
					</Typography>
					<Button
						onClick={repairModal.openModal}
						className={styled.preview__btn}
					>
						Заказать ремонт
					</Button>
				</div>
				<div className={styled.preview__mobile}>
					<img src={MainMobile} alt="" />
				</div>
			</div>
			<ModalRepair
				closeModal={repairModal.closeModal}
				isModalOpen={repairModal.isModalOpen}
				submitForm={submitForm}
			/>
			<ModalThanks
				closeModal={thankModal.closeModal}
				isModalOpen={thankModal.isModalOpen}
			/>
		</section>
	)
}

export default Preview
