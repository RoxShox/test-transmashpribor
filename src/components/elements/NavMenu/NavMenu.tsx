import React from "react"
import { headerMenuItem } from "../../../constants"
import styled from "./NavMenu.module.scss"
const NavMenu = () => {
	return (
		<nav className={styled.menu__list_wrap}>
			<ul className={styled.menu__list}>
				{headerMenuItem.map((item) => (
					<li key={item.id} className={styled.menu__item}>
						<a className={styled.menu__link} href="#">
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavMenu
