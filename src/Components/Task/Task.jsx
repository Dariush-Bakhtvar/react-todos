import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import GetIcons from '../GetIcons/GetIcons'
import EditTask from '../EditTask/EditTask';
import { MdOutlineEditLocationAlt, MdNotListedLocation } from 'react-icons/md';
import { IoIosTrash, IoIosCheckmarkCircle } from 'react-icons/io';
import { GoCalendar } from 'react-icons/go';
import { GiPlainCircle } from 'react-icons/gi';
import style from './Task.module.scss';
import '../../asset/Sass/modal.scss';
const Task = ({ Task, OnRemove, OnDone, }) => {
  const [isDone, setIsDone] = useState(false);
  const checkTaskTyep = () => {
    switch (Task.taskType) {
      case "Business":
        return style.taskTypeColor1;
      case "Personal":
        return style.taskTypeColor2;
      case "Family":
        return style.taskTypeColor3;
      case "Work":
        return style.taskTypeColor4;
      default:
        throw new Error("plase check TaskType ");
    }
  }
  return (
    <section className={style.task}>
      <div className={style.taskIcon}>
        <ProgressBar cx={0} cy={0} r={window.innerWidth > 720 ? 40 : 25} isActive={isDone} />
        <span className={style.icon}>
          <GetIcons name={Task.icon} />
        </span>
      </div>
      <div className={style.taskDetail}>
        <div className={style.Whatdo}>
          <MdOutlineEditLocationAlt />
          <p>{isDone ? <del>{Task.whatDo}</del> : Task.whatDo}</p>
        </div>
        <div className={style.wheredo}>
          <MdNotListedLocation />
          <p>{isDone ? <del>{Task.whereDo}</del> : Task.whereDo}</p>
        </div>
        <p>
          <span>
            {`${Task.date.day}  ${Task.date.month}  ${Task.date.year}`}
            <GoCalendar />
          </span>
          <span className={checkTaskTyep()}>
            <GiPlainCircle />
          </span>
        </p>
      </div>
      <div className={style.taskControll}>
        <span onClick={OnRemove}>
          <IoIosTrash />
        </span>
        <span onClick={() => { OnDone(); setIsDone(!isDone) }}>
          <IoIosCheckmarkCircle />
        </span>
        <EditTask taskId={Task.id} />
      </div>
    </section>
  )
}
export default Task
