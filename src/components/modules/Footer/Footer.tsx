import React from "react"
import styled from "./Footer.module.scss"
import Logo from "../../../assets/icon/logo.svg"
import NavMenu from "../../elements/NavMenu/NavMenu"
import Button from "../../elements/Button/Button"
import Typography from "../../elements/Typography/Typography"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import MobileIcon from "../../../assets/icon/footer-mobile-phone-icon.svg"
import ModalRepair, {
	RepairFormValues,
} from "../Modals/ModalRepair/ModalRepair"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import { SubmitHandler } from "react-hook-form"
import { useModal } from "../../../hooks/useModal"
const Footer = () => {
	const repairModal = useModal()
	const thankModal = useModal()

	const submitForm: SubmitHandler<RepairFormValues> = (data) => {
		alert(JSON.stringify(data))
		repairModal.closeModal()
		thankModal.openModal()
	}

	const isMedia600 = useMediaQuery(600)
	return (
		<footer className={styled.footer}>
			<div className="container">
				<div className={styled.footer__inner}>
					<div className={styled.footer__menu_wrap}>
						<a href="#" className={styled.footer__logo}>
							<img src={Logo} alt="" />
						</a>
						<NavMenu />
					</div>
					<div className={styled.footer__callback_wrap}>
						<a href="#" className={styled.footer__phone}>
							{isMedia600 && <img src={MobileIcon} alt="" />}
							+8 (343) 311-21-11
						</a>
						<Button
							onClick={repairModal.openModal}
							className={styled.footer__btn}
						>
							Перезвонить мне
						</Button>
					</div>
				</div>
			</div>
			<div className={styled.footer__copyright}>
				<div className="container">
					<div className={styled.footer__copyright_inner}>
						<Typography
							className={styled.footer__copyright__text}
							variant="text"
						>
							Copyright 2020. Все права защищены
						</Typography>
						<Typography
							className={styled.footer__copyright__text}
							variant="text"
						>
							Дизайн, разработка, реклама by Axmobi 8961-098-81-11
						</Typography>
					</div>
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
		</footer>
	)
}

export default Footer
