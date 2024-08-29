import styled from "./Services.module.scss"
import Typography from "../../elements/Typography/Typography"
import ServicesItemlist from "./ServicesItemlist"

const Services = () => {
	return (
		<section className={styled.services}>
			<div className="container">
				<Typography className={styled.services__title} variant="h3">
					Наши услуги
				</Typography>
				<Typography className={styled.services__subtitle} variant="text">
					Мы сможем отремонтировать любой вид техники, вот наиболее часто
					заказываемые у нас услуги
				</Typography>

				<ServicesItemlist />
			</div>
		</section>
	)
}

export default Services
