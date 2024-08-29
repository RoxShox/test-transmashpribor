import styled from "./InfoBanners.module.scss"
import Typography from "../../elements/Typography/Typography"
import Button from "../../elements/Button/Button"

import ArrowIcon from "../../../assets/icon/banner-arrow.svg"
import PhoneIcon from "../../../assets/icon/phone-icon.svg"
import BannerPicture1 from "../../../assets/img/banner-img-1.png"
import BannerPicture2 from "../../../assets/img/banner-img-2.png"
import BannerPicture3 from "../../../assets/img/banner-img-3.png"
import MobileBannerPicture3 from "../../../assets/img/mobile-banner-img-3.png"

import { useModal } from "../../../hooks/useModal"
import ModalParsing, {
	ParsingFormValues,
} from "../Modals/ModalParsing/ModalParsing"
import { SubmitHandler } from "react-hook-form"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import InfoBanner from "./InfoBanner"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
const InfoBanners = () => {
	const parsingModal = useModal()
	const thankModal = useModal()

	const submitForm: SubmitHandler<ParsingFormValues> = (data) => {
		alert(JSON.stringify(data))
		parsingModal.closeModal()
		thankModal.openModal()
	}

	const isMedia600 = useMediaQuery(600)

	return (
		<div className={styled.banners}>
			<div className="container">
				<div className={styled.banners__items}>
					<InfoBanner
						className={styled.banners__item}
						title="Слишком сильные повреждения?"
						descr="Сдайте ваше устройство на запчасти обратившись в наш сервис"
					>
						<Button
							onClick={parsingModal.openModal}
							className={styled.banners__item__btn}
						>
							Разобрать на запчасти
							<img src={ArrowIcon} alt="" />
						</Button>
						<img
							className={styled.banners__item__img}
							src={BannerPicture1}
							alt=""
						/>
					</InfoBanner>
					<InfoBanner
						className={styled.banners__item}
						title="	Ознакомится с более точными ценами"
					>
						<Button className={styled.banners__item__btn}>
							<img src={PhoneIcon} alt="" />
							89610988111
						</Button>
						<img
							className={styled.banners__item__img}
							src={BannerPicture2}
							alt=""
						/>
					</InfoBanner>
					<InfoBanner
						className={styled.banners__item}
						title="Покупайте запчасти онлайн"
						descr="Комплектующие на различные девайсы прямо со склада"
					>
						<Button
							onClick={parsingModal.openModal}
							className={styled.banners__item__btn}
						>
							Посмотреть
							<img src={ArrowIcon} alt="" />
						</Button>
						{isMedia600 ? (
							<img
								className={styled.banners__item__img_mobile}
								src={MobileBannerPicture3}
								alt=""
							/>
						) : (
							<img
								className={styled.banners__item__img}
								src={BannerPicture3}
								alt=""
							/>
						)}
					</InfoBanner>
				</div>
			</div>
			<ModalParsing
				closeModal={parsingModal.closeModal}
				isModalOpen={parsingModal.isModalOpen}
				submitForm={submitForm}
			/>
			<ModalThanks
				closeModal={thankModal.closeModal}
				isModalOpen={thankModal.isModalOpen}
			/>
		</div>
	)
}

export default InfoBanners
