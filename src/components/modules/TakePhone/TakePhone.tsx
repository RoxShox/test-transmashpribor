import React from "react"
import Typography from "../../elements/Typography/Typography"
import FeedbackForm from "../../elements/FeedbackForm/FeedbackForm"
import styled from "./TakePhone.module.scss"
const TakePhone = () => {
	const handleSubmit = (data: any) => {
		alert(JSON.stringify(data))
	}
	return (
		<section className={styled.take_phone}>
			<div className="container">
				<Typography className={styled.take_phone__title} variant="h3">
					Заберем ваш сломанный смартфон прямо из дома
				</Typography>
				<Typography className={styled.take_phone__subtitle} variant="text">
					Оставьте Ваш номер телефона и мы перезвоним Вам
					<span> прямо сейчас.</span>
				</Typography>
				<FeedbackForm onSubmit={handleSubmit} />
			</div>
		</section>
	)
}

export default TakePhone
