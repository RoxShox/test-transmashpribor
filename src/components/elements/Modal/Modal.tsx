import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styled from "./Modal.module.scss"
import Typography from "../Typography/Typography"
import classNames from "classnames"

interface ModalProps {
	open: boolean
	children: React.ReactNode
	onClose: () => void
	decorTitle?: string | null
	closeIcon: string
	className?: string
}

const Modal = ({
	open,
	children,
	onClose,
	closeIcon,
	className,
	decorTitle = "Заполните форму и с вами свяжутся в ближайшее время",
}: ModalProps) => {
	// Закрытие модалки по нажатию клавиши Escape
	const onKeydown = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose()
		}
	}

	const modalRef = useRef<HTMLDivElement | null>(null)

	const handleClickOutside = (event: React.MouseEvent) => {
		if (modalRef.current === event.target) {
			onClose()
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", onKeydown)
		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "visible"
		}

		return () => {
			window.removeEventListener("keydown", onKeydown)
		}
	}, [open])

	if (!open) return null

	return ReactDOM.createPortal(
		<div
			className={styled.modal_overlay}
			onClick={handleClickOutside}
			ref={modalRef}
		>
			<div className={styled.modal_content}>
				<div className={styled.modal__close_icon} onClick={onClose}>
					<img src={closeIcon} alt="" />
				</div>
				{decorTitle && (
					<div className={styled.modal__title_wrap}>
						<Typography className={styled.modal__title} variant="text">
							{decorTitle}
						</Typography>
					</div>
				)}
				<div className={classNames(styled.modal__container, className)}>
					{children}
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Modal
