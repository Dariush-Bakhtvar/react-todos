import { useState } from 'react'
import Select from 'react-select';
import { selectStyles } from '../../../Utils/SelectStyle'
import { useTodosAction } from '../../Provider/TodoProvider';
import style from './FilterTyepe.module.scss';
import Search from '../../Search/Search'
const Option = [
  { value: "All", label: "همه وظایف", color: "#F3C623" },
  { value: "Business", label: "کسب و کار", color: "#00c7c7" },
  { value: "Personal", label: "شخصی", color: "#F24C4C" },
  { value: "Family", label: "خانوادگی", color: "#844685" },
  { value: "Work", label: "کاری", color: "#05FF97" },
];
const FilterType = () => {
  const [select, setSelect] = useState("");
  const dispatch = useTodosAction();
  const selectHandler = (e) => {
    dispatch({ type: 'filter', event: e.value });
    setSelect(e.value);
  }
  return (
    <>
      <Select className={style.select}
        options={Option}
        onChange={selectHandler}
        defaultValue={select}
        placeholder="فیلتر..."
        styles={selectStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            text: "dodgerblue",
            primary25: "rgba(51, 55, 72, 0.3)",
            primary: "rgba(51, 55, 72, 0.8)",
            neutral50: "#f2f2f294",
          },
          spacing: {
            ...theme.spacing,
            controlHeight: 30,
            baseUnit: 2,
          },
        })}
      />
      <Search Filter={select} />
    </>
  )
}

export default FilterType