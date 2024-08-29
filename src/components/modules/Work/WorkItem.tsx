import React from "react"
import { IWorkItem } from "../../../types"
import styled from "./Work.module.scss"
interface WorkItemProps {
	item: IWorkItem
}
const WorkItem = ({ item }: WorkItemProps) => {
	return (
		<div className={styled.work__item}>
			<div className={styled.work__item_number_wrap}>
				<span className={styled.work__item_number_text}>0{item.id}</span>
			</div>
			<img src={item.img} alt="" />
			<p className={styled.work__item__title}>{item.title}</p>
			<div className={styled.work__item_flex_el}></div>
		</div>
	)
}

export default WorkItem
