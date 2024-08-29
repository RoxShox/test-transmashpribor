import { memo, useState } from "react"
import { IServiceItem } from "../../../types"
import Typography from "../../elements/Typography/Typography"
import styled from "./Services.module.scss"
import classNames from "classnames"
import ModalService, {
	ServiceFormValues,
} from "../Modals/ModalService/ModalService"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import { useModal } from "../../../hooks/useModal"
import { SubmitHandler } from "react-hook-form"
interface ServicesItemProps {
	item: IServiceItem
	onSelect: (id: number) => void
	isActive: boolean
}
const ServicesItem = memo(({ item, isActive, onSelect }: ServicesItemProps) => {
	const serviceModal = useModal()
	const thankModal = useModal()

	const submitForm: SubmitHandler<ServiceFormValues> = (data) => {
		alert(JSON.stringify(data))
		serviceModal.closeModal()
		thankModal.openModal()
	}
	const handleClickItem = () => {
		onSelect(item.id)
		serviceModal.openModal()
	}

	const activeItem = classNames({
		[styled.services__item__wrap_active]: isActive,
		[styled.services__item__wrap]: true,
	})
	return (
		<>
			<div className={activeItem} onClick={handleClickItem}>
				<div className={styled.services__item}>
					<Typography className={styled.services__item__title} variant="h5">
						{item.title}
					</Typography>
					<div className={styled.services__item__price_wrap}>
						<Typography
							className={styled.services__item__waiting}
							variant="text"
						>
							{item.waitingTime}
						</Typography>
						<Typography className={styled.services__item__price} variant="text">
							{item.price}
						</Typography>
					</div>
				</div>
			</div>
			<ModalService
				closeModal={serviceModal.closeModal}
				isModalOpen={serviceModal.isModalOpen}
				submitForm={submitForm}
				service={item.title}
			/>
			<ModalThanks
				closeModal={thankModal.closeModal}
				isModalOpen={thankModal.isModalOpen}
			/>
		</>
	)
})

export default ServicesItem
