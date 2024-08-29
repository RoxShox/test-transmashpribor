import React from "react"
import { ICatalogItem } from "../../../types"
import Typography from "../../elements/Typography/Typography"
import styled from "./Catalog.module.scss"
interface CatalogItemProps {
	item: ICatalogItem
}

const CatalogItem = ({ item }: CatalogItemProps) => {
	return (
		<div className={styled.catalog__item}>
			<Typography className={styled.catalog__item__title} variant="h5">
				{item.title}
			</Typography>
			<img className={styled.catalog__item__img} src={item.img} alt="" />
		</div>
	)
}

export default CatalogItem
