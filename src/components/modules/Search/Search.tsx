import React, { useState } from "react"
import styled from "./Search.module.scss"
import Typography from "../../elements/Typography/Typography"
import SearchSelect from "./SearchSelect"
import { Option } from "../../../types"
import { searchItems } from "../../../constants"
import Button from "../../elements/Button/Button"
const Search = () => {
	const [selectedOption, setSelectedOption] = useState<Option | null>(null)

	const handleChange = (option: Option | null) => {
		setSelectedOption(option)
	}

	return (
		<div className="container">
			<div className={styled.search}>
				<Typography className={styled.search__title} variant="text">
					Поиск МОДЕЛИ
				</Typography>
				<SearchSelect
					options={searchItems}
					onChange={handleChange}
					value={selectedOption}
					className={styled.search__select}
				/>
				<Button className={styled.search__btn}>Поиск</Button>
			</div>
		</div>
	)
}

export default Search
