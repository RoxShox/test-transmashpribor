import React from "react"
import styled from "./SmallBanner.module.scss"
import { smallBannerItems } from "../../../constants"
import SmallBannerItem from "./SmallBannerItem"

const SmallBanner = () => {
	return (
		<div className={styled.small_banner}>
			<div className="container">
				<div className={styled.small_banner__inner}>
					{smallBannerItems.map((item) => (
						<SmallBannerItem key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default SmallBanner
