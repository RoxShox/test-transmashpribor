import { useState } from "react"

import styled from "./Header.module.scss"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import logo from "../../../assets/icon/logo.svg"
import BorderBtn from "../../../assets/icon/linear-border-header-btn.svg"

import Button from "../../elements/Button/Button"
import NavMenu from "../../elements/NavMenu/NavMenu"
import MobilePhoneIcon from "../../../assets/icon/mobile-phone-icon.svg"
import MobileNavbar from "./MobileNavbar"
import BurgerMenu from "../../../assets/icon/burger-icon.svg"
import { useModal } from "../../../hooks/useModal"
import ModalRepair, {
	RepairFormValues,
} from "../Modals/ModalRepair/ModalRepair"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import { SubmitHandler } from "react-hook-form"

const Header = () => {
	const [mobileMenuActive, setMobileMenuActive] = useState(false)
	const repairModal = useModal()
	const thankModal = useModal()

	const isMedia1024 = useMediaQuery(1024)
	const isMedia768 = useMediaQuery(768)

	const submitForm: SubmitHandler<RepairFormValues> = (data) => {
		alert(JSON.stringify(data))
		repairModal.closeModal()
		thankModal.openModal()
	}
	return (
		<header className={styled.header}>
			<div className={styled.header__inner}>
				{isMedia768 && (
					<button
						className={styled.header__burger_menu}
						onClick={() => setMobileMenuActive(!mobileMenuActive)}
					>
						<img src={BurgerMenu} alt="" />
					</button>
				)}
				<div className={styled.header__links}>
					<a href="#">
						<img className={styled.header__logo} src={logo} alt="logo" />
					</a>
					{!isMedia768 && <NavMenu />}
				</div>
				<MobileNavbar
					activeMenu={mobileMenuActive}
					setActiveMenu={setMobileMenuActive}
				/>
				<div className={styled.header__callback_wrap}>
					{isMedia1024 ? (
						<img src={MobilePhoneIcon} alt="" />
					) : (
						<>
							<a className={styled.header__phone} href="#">
								+8 (343) 311-21-11
							</a>
							<Button
								className={styled.header__btn}
								onClick={repairModal.openModal}
							>
								<img
									className={styled.header__btn_border}
									src={BorderBtn}
									alt=""
								/>
								<span className={styled.header__btn_text}>Перезвонить мне</span>
							</Button>
						</>
					)}
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
		</header>
	)
}

export default Header
