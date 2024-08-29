import React, { useState } from "react"
import Typography from "../../elements/Typography/Typography"
import styled from "./Work.module.scss"
import { workItems } from "../../../constants"
import WorkItem from "./WorkItem"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import Slider from "react-slick"
import "../../../style/slick-slide.scss"
import PrevArrow from "../../../assets/icon/arrow-prev.svg"
import NextArrow from "../../../assets/icon/arrow-next.svg"

interface ArrowProps {
	onClick?: () => void
	type: string
}

function Arrow({ type, onClick }: ArrowProps) {
	let className =
		type === "next"
			? styled.work__slide__arrow_next
			: styled.work__slide__arrow_prev

	className += " " + styled.work__slide__arrow

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

const Work = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <Arrow type="next" />,
		prevArrow: <Arrow type="prev" />,
		afterChange: (current: number) => setCurrentSlide(current),
	}
	const isMedia768 = useMediaQuery(768)

	return (
		<section className={`${styled.work} work`}>
			<div className="container">
				<Typography className={styled.work__title} variant="h3">
					Как мы работаем?
				</Typography>
				<div className={styled.work__items}>
					{isMedia768 ? (
						<>
							<Slider {...settings}>
								{workItems.map((item) => (
									<WorkItem key={item.id} item={item} />
								))}
							</Slider>
							<div className={styled.work__custom_dots}>
								<div className={styled.work__custom_dots_wrap}>
									0{currentSlide + 1}
									<span className={styled.work__custom_dots__regular}>
										/0{workItems.length}
									</span>
								</div>
							</div>
						</>
					) : (
						workItems.map((item) => <WorkItem key={item.id} item={item} />)
					)}
				</div>
			</div>
		</section>
	)
}

export default Work
