import { ISmallBannerItem } from "../../../types"
import styled from "./SmallBanner.module.scss"
interface SmallBannerItemProps {
	item: ISmallBannerItem
}

const SmallBannerItem = ({ item }: SmallBannerItemProps) => {
	return (
		<div className={styled.small_banner__item}>
			<item.icon />
			<p>{item.title}</p>
		</div>
	)
}

export default SmallBannerItem
