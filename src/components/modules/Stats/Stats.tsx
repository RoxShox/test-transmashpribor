import React from "react"
import styled from "./Stats.module.scss"
import Typography from "../../elements/Typography/Typography"
const Stats = () => {
	return (
		<div className={styled.stats}>
			<div className="container">
				<div className={styled.stats__inner}>
					<Typography className={styled.stats__description} variant="text">
						В своём стремлении улучшить пользовательский опыт мы упускаем, что
						базовые сценарии поведения пользователей формируют глобальную
						экономическую сеть и при этом - ограничены исключительно образом
						мышления. Дальнейшее развитие различных форм деятельности позволяет
						оценить значение благоприятных перспектив. Прежде всего, новая
						модель организационной деятельности играет определяющее значение для
						соответствующих условий активизации. Имеется спорная точка зрения,
						гласящая примерно следующее: непосредственные участники технического
						прогресса неоднозначны и будут объявлены нарушающими
						общечеловеческие нормы этики и морали. Банальные, но неопровержимые
						выводы, а также непосредственные участники технического прогресса и
						по сей день остаются уделом либералов, которые жаждут быть
						заблокированы в рамках своих собственных рациональных ограничений.
					</Typography>
					<div className={styled.stats__right_item}>
						<div className={styled.stats__circle_wrap}>
							<div className={styled.stats__circle}>
								<Typography
									className={styled.stats__circle__value}
									variant="text"
								>
									1500
								</Typography>
							</div>
						</div>

						<Typography className={styled.stats__circle__title} variant="text">
							смартфонов VIVO отремонтировано
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
