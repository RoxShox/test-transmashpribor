interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export default Button
