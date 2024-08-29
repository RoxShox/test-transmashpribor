import React from "react"
import Header from "../../modules/Header/Header"
import Preview from "../../modules/Preview/Preview"
import styled from "./MainSqreen.module.scss"
const MainSqreen = () => {
	return (
		<div className={styled.main_sqreen__wrap}>
			<div className="container">
				<Header />
				<Preview />
			</div>
		</div>
	)
}

export default MainSqreen
