import React from 'react'
import withActive from '../../Hoc/withActive';
import { CSSTransition } from 'react-transition-group';
import { BiCaretDown } from 'react-icons/bi'
import { AiOutlineFieldTime } from 'react-icons/ai'
import style from './filterDate.module.scss';
import { useTodos } from '../../Provider/TodoProvider';
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import groupDate from '../../../Utils/groupDate';
import { TbMoodEmpty } from 'react-icons/tb'
import '../../../asset/Sass/modal.scss';
const toDayObj = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY", });
// const tomarrowOjbj = new DateObject({ calendar: persian, locale: persian_fa, format: "D MMMM YYYY", }).add(1, 'day');
const FilterDate = ({ isActive, setActive }) => {
  const Todos = useTodos();
  const GroupDates = groupDate(Todos);
  const Today = toDayObj.format().toString().split(" ");
  const TodayCounter = () => {
    const isToday = GroupDates.filter(date => date.day.includes(Today[0]) && date.month.includes(Today[1]));
    return isToday.length ? isToday[0].count : 0;
  }
  const getAnotherDays = () => {
    const anohterDays = GroupDates.filter(date => date.day !== Today[0]);
    if (anohterDays.length) return anohterDays.map((date, index) => {
      return (<li key={index}>
        <span>{`${date.day} ${date.month} ${date.year}`}</span>
        <span>{date.count}</span>
      </li>);
    });
    return <span className={style.nothing}>تعریف نشده<TbMoodEmpty /></span>
  }
  return (
    <div className={style.filterDateWrapper}>
      <div className={style.filterDateBtn} onClick={setActive}>
        <AiOutlineFieldTime />
        <span>امروز</span>
        <BiCaretDown />
      </div>
      <CSSTransition in={isActive} classNames='modal' timeout={600} unmountOnExit >
        <ul className={style.filterDateMenu}>
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