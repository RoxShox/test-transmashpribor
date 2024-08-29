import React, { useCallback, useState } from "react"
import styled from "./Services.module.scss"
import { servicesItems } from "../../../constants"
import ServicesItem from "./ServicesItem"
import ModalRepair from "../Modals/ModalRepair/ModalRepair"
import ModalThanks from "../Modals/ModalThanks/ModalThanks"
import ModalService, {
	ServiceFormValues,
} from "../Modals/ModalService/ModalService"
import { SubmitHandler } from "react-hook-form"
import { useModal } from "../../../hooks/useModal"
const ServicesItemlist = () => {
	const [selectItemId, setSelectItemId] = useState<number | null>(null)

	const handleClickItem = useCallback(
		(id: number) => {
			setSelectItemId(id)
		},
		[selectItemId]
	)

	return (
		<div className={styled.services__items}>
			{servicesItems.map((item) => (
				<ServicesItem
					isActive={selectItemId === item.id}
					key={item.id}
					item={item}
					onSelect={handleClickItem}
				/>
			))}
		</div>
	)
}

export default ServicesItemlist
