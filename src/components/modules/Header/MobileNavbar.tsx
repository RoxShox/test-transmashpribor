import React, { Dispatch, SetStateAction } from "react"
import { headerMenuItem } from "../../../constants"
import styles from "./Header.module.scss"
import classNames from "classnames"

type MobileNavbarProps = {
	activeMenu: boolean
	setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const MobileNavbar = ({ activeMenu, setActiveMenu }: MobileNavbarProps) => {
	const menuClasses = classNames({
		[styles.mobile__menu]: true,
		[styles.active]: activeMenu,
	})
	return (
		<div className={menuClasses}>
			<button
				className={styles.mobile__btn_close}
				onClick={() => setActiveMenu(false)}
			>
				X
			</button>
			<div className={styles.mobile__menu__content}>
				<ul>
					{headerMenuItem.map((item) => (
						<li className={styles.mobile__menu__item} key={item.id}>
							{item.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileNavbar
