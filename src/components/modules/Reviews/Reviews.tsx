import styled from "./Reviews.module.scss"
import Slider from "react-slick"

import Typography from "../../elements/Typography/Typography"
import { reviewItems } from "../../../constants"
import PrevArrow from "../../../assets/icon/arrow-prev.svg"
import NextArrow from "../../../assets/icon/arrow-next.svg"
import ReviewsItem from "./ReviewsItem"
import { useState } from "react"
import "../../../style/slick-slide.scss"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
interface ArrowProps {
	onClick?: () => void
	type: string
}

function Arrow({ type, onClick }: ArrowProps) {
	let className =
		type === "next"
			? styled.reviews__slide__arrow_next
			: styled.reviews__slide__arrow_prev

	className += " " + styled.reviews__slide__arrow
	const char =
		type === "next" ? (
			<img src={NextArrow} alt="" />
		) : (
			<img src={PrevArrow} alt="" />
		)
	return (
		<span className={className} onClick={onClick}>
			{char}
		</span>
	)
}

const Reviews = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <Arrow type="next" />,
		prevArrow: <Arrow type="prev" />,
		afterChange: (current: number) => setCurrentSlide(current),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	const isMedia600 = useMediaQuery(600)
	return (
		<section className={`reviews ${styled.reviews}`}>
			<div className="container">
				<Typography className={styled.reviews__title} variant="h3">
					Отзывы
				</Typography>
				<div className={styled.reviews__slide__items}>
					<Slider {...settings} className={styled.reviews__slide_wrap}>
						{reviewItems.map((slide) => (
							<ReviewsItem item={slide} key={slide.id} />
						))}
					</Slider>
					<div className={styled.reviews__custom_dots}>
						{isMedia600 && (
							<div className={styled.reviews__custom_dots_wrap}>
								0{currentSlide + 1}
								<span className={styled.reviews__custom_dots__regular}>
									/ 0{reviewItems.length}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Reviews
