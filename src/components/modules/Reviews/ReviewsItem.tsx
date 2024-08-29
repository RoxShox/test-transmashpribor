import React from "react"
import styled from "./Reviews.module.scss"
import Typography from "../../elements/Typography/Typography"
import { IReviewItem } from "../../../types"
interface ReviewsItemProps {
	item: IReviewItem
}

const ReviewsItem = ({ item }: ReviewsItemProps) => {
	return (
		<div className={styled.reviews__slide}>
			<div className={styled.reviews__slide_top_wrap}>
				<div className={styled.reviews__slide__icon}>
					<img src={item.icon} alt="" />
				</div>
				<Typography className={styled.reviews__slide__name} variant="text">
					{item.name}
				</Typography>
			</div>
			<Typography className={styled.reviews__slide__description} variant="text">
				{item.description}
			</Typography>
		</div>
	)
}

export default ReviewsItem
