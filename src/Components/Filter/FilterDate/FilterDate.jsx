import { useRef, useState } from 'react';
import withActive from '../../Hoc/withActive';
import { CSSTransition } from 'react-transition-group';
import { useTodos, useTodosAction } from '../../Provider/TodoProvider';
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import groupDate from '../../../Utils/groupDate';
import { BiCaretDown } from 'react-icons/bi'
import { TbMoodEmpty } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'
import style from './filterDate.module.scss';
import '../../../asset/Sass/modal.scss';
const toDayObj = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY", });
// const tomarrowOjbj = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY", }).add(1, 'day');
const FilterDate = ({ isActive, setActive }) => {
  const Todos = useTodos();
  const dispatch = useTodosAction();
  const GroupDates = groupDate(Todos);
  const [date, setDate] = useState([]);
  const btnText = useRef();
  const Today = toDayObj.format().toString().split(" ");
  // get Day list by filter and remove dubplicated value;
  const getDateList = () => {
    let known = new Set()
    let compare = date.map(subarray =>
      subarray.filter(item => !known.has(item.day) && known.add(item.day))
    )
    let filtered = compare.filter(item => item.length);
    return filtered.flat();
  }
  const dayList = getDateList();
  const TodayCounter = () => {
    if (dayList.length) {
      const isToday = dayList.filter(date => date.day.includes(Today[0]) && date.month.includes(Today[1]));
      return isToday.length ? isToday[0].count : 0;
    } else {
      const isToday = GroupDates.filter(date => date.day.includes(Today[0]) && date.month.includes(Today[1]));
      return isToday.length ? isToday[0].count : 0;
    }
  }
  const getAnotherDays = () => {
    const anohterDays = dayList.length ? dayList.filter(date => date.day !== Today[0]) : GroupDates.filter(date => date.day !== Today[0]);
    if (anohterDays.length) return anohterDays.map((date, index) => {
      return (<li key={index}>
        <span>{`${date.day} ${date.month} ${date.year}`}</span>
        <span>{date.count}</span>
      </li>);
    });
    return <span className={style.nothing}>تعریف نشده<TbMoodEmpty /></span>
  }
  const filterHandler = (e) => {
    setDate([...date, GroupDates]);
    const dateString = e.target.closest('li').children[0].innerText;
    btnText.current = dateString;
    if (!e.target.closest('li').children[0]) return;
    if (!e.target.closest('li').children) return;
    dispatch({ type: 'filterDate', event: dateString });

  }

  return (
    <div className={style.filterDateWrapper}>
      <div className={style.filterDateBtn} onClick={() => { setActive() }} ref={btnText} >
        <AiOutlineFieldTime />
        <span>
          {btnText.current instanceof Element ? 'امروز' : `${btnText.current}`}
        </span>
        <BiCaretDown />
      </div>
      <CSSTransition in={isActive} classNames='modal' timeout={600} unmountOnExit >
        <ul className={style.filterDateMenu} onClick={filterHandler}>
          <li>
            <span>امروز</span>
            <span>{TodayCounter()}</span>
          </li>
          <div className={style.division}></div>
          <ul className={style.upComing}>
            <p>روزهای آینده</p>
            {getAnotherDays()}
          </ul>
        </ul>
      </CSSTransition>
    </div>
  )
}

export default withActive(FilterDate)