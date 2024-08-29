import Modal from "../../../elements/Modal/Modal"
import CloseIcon from "../../../../assets/icon/gradient-close-icon.svg"
import Typography from "../../../elements/Typography/Typography"
import styled from "./ModalThanks.module.scss"
import CheckIcon from "../../../../assets/icon/modal-check-icon.svg"
interface ModalThanksProps {
	closeModal: () => void
	isModalOpen: boolean
}
const ModalThanks = ({ closeModal, isModalOpen }: ModalThanksProps) => {
	return (
		<Modal
			onClose={closeModal}
			open={isModalOpen}
			decorTitle={null}
			closeIcon={CloseIcon}
			className={styled.modal}
		>
			<Typography variant="text" className={styled.modal__title}>
				Спасибо за заявку!
			</Typography>
			<img className={styled.modal__check_icon} src={CheckIcon} alt="" />
			<Typography variant="text" className={styled.modal__subtitle}>
				Наш менеджер свяжется с Вами
			</Typography>
		</Modal>
	)
}

export default ModalThanks
