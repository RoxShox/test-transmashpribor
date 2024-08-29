import Select from "react-select"
import "../../../style/modal-select.scss"
import { Option } from "../../../types"

interface SearchSelectProps {
	options: Option[]
	onChange: (option: Option | null) => void
	value: Option | null
	className?: string
}

const SearchSelect = ({
	options,
	onChange,
	value,
	className,
	...props
}: SearchSelectProps) => {
	return (
		<Select
			options={options}
			onChange={onChange}
			value={value}
			placeholder={options[0].label}
			className={`my-custom-select ${className ? className : ""}`}
			classNamePrefix="select"
		/>
	)
}

export default SearchSelect
