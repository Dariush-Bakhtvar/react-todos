import { useTodosAction } from '../Provider/TodoProvider';
import { useState } from 'react';
import style from './Search.module.scss';
const Search = ({ Filter }) => {
  const dispatch = useTodosAction();
  const [search, setSearch] = useState("");
  const searchHandler = (e, isCheck = false) => {
    if (!Filter) {
      dispatch({ type: 'search', event: e.target.value, isCheck });
      setSearch(e.target.value);
    } else {
      isCheck = true;
      dispatch({ type: 'filter', event: Filter });
      dispatch({ type: 'search', event: e.target.value, isCheck });
      setSearch(e.target.value);
    }
  }
  return (
    <div className={style.searchBox}>
      <input type="text" placeholder='جستجو...' onChange={searchHandler} value={search} />
      <span></span>
    </div>


  )
}

export default Search
