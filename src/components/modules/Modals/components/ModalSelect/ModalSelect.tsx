import Select, { Props as SelectProps } from "react-select"
import "../../../../../style/modal-select.scss"
import { Option } from "../../../../../types"

interface ModalSelectProps {
	options: Option[]
	onChange: (option: Option | null) => void
	value: Option | null
	className?: string
}

const ModalSelect = ({
	options,
	onChange,
	value,
	className,
	...props
}: ModalSelectProps & SelectProps) => {
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

export default ModalSelect
