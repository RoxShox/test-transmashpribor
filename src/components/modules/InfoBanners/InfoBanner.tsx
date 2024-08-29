import React from "react"
import Typography from "../../elements/Typography/Typography"
import styled from "./InfoBanners.module.scss"
interface InfoBannerProps {
	children: React.ReactNode
	className: string
	title: string
	descr?: string
}
const InfoBanner = ({ className, title, descr, children }: InfoBannerProps) => {
	return (
		<div className={className}>
			<Typography className={styled.banners__item__title} variant="h4">
				{title}
			</Typography>
			{descr && (
				<Typography className={styled.banners__item__subtitle} variant="text">
					{descr}
				</Typography>
			)}
			{children}
		</div>
	)
}

export default InfoBanner
