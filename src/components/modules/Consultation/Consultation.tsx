import React from "react"
import Typography from "../../elements/Typography/Typography"
import FeedbackForm from "../../elements/FeedbackForm/FeedbackForm"
import styled from "./Consultation.module.scss"
const Consultation = () => {
	const handleSubmit = (data: any) => {
		alert(JSON.stringify(data))
	}

	return (
		<section className={styled.consultation}>
			<div className={styled.consultation__bg_decor}></div>
			<div className="container">
				<Typography className={styled.consultation__title} variant="h3">
					Нужна консультация?
				</Typography>
				<Typography className={styled.consultation__subtitle} variant="text">
					Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.
				</Typography>
				<FeedbackForm onSubmit={handleSubmit} />
			</div>
		</section>
	)
}

export default Consultation
