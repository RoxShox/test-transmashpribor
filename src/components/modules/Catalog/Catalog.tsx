import React from "react"
import Typography from "../../elements/Typography/Typography"
import { catalogItems } from "../../../constants"
import CatalogItem from "./CatalogItem"
import styled from "./Catalog.module.scss"
import Button from "../../elements/Button/Button"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
const Catalog = () => {
	const isMedia768 = useMediaQuery(768)
	const visibleItems = isMedia768 ? catalogItems.slice(0, 4) : catalogItems

	return (
		<section className={styled.catalog}>
			<div className="container">
				<Typography className={styled.catalog__title} variant="h3">
					Выберите модель
				</Typography>
				<Typography className={styled.catalog__subtitle} variant="text">
					Выберите свою модель
				</Typography>
				<div className={styled.catalog__items}>
					{visibleItems.map((item) => (
						<CatalogItem key={item.id} item={item} />
					))}
				</div>
				<Button className={styled.catalog__btn}>Показать еще</Button>
			</div>
		</section>
	)
}

export default Catalog
