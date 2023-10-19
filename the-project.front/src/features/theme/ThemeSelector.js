import { useSelector, useDispatch } from "react-redux"
import { changeTheme } from "./ThemeSlice"
import Select from "react-select"

export const ThemeSelector = () => {
    const options = [
        {value: 'theme-light', label: 'Light'},
        {value: 'theme-dark', label: 'Dark'},
    ]

    const selectedTheme = useSelector((state) => state.theme.selectedTheme)
    const dispatch = useDispatch()

    const handleChange = (selectedOption) => {
        dispatch(changeTheme(selectedOption.value))
    }

    return (<div className="">
        <Select options={options} value={options.find((option) => option.value === selectedTheme)} onChange={handleChange} />
    </div>)
}