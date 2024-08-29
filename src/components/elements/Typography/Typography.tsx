import React from "react"
import "./Typography.scss"
const variantsMapping: any = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	text: "p",
}

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
	variant: any
	children: React.ReactNode
}

const Typography = ({
	variant,
	className,
	children,
	...props
}: TypographyProps) => {
	const Component = variant ? variantsMapping[variant] : "p"

	return (
		<Component
			className={` ${`typography--variant-${variant}`} ${className}`}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Typography
