import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import widthActive from '../Hoc/withActive';
import GetIcons from '../GetIcons/GetIcons'
import style from './Task.module.scss';
import { CSSTransition } from 'react-transition-group';
import '../../asset/Sass/modal.scss';
import { MdEditNote, MdOutlineEditLocationAlt, MdNotListedLocation } from 'react-icons/md';
import { IoIosTrash, IoIosCheckmarkCircle } from 'react-icons/io';
// import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { TiTimes } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import { GiPlainCircle } from 'react-icons/gi';
// import { BsCheckCircleFill } from 'react-icons/bs';
import EditTask from '../EditTask/EditTask';
const Task = ({ isActive, setActive, Task, OnRemove, OnDone }) => {
  const [isCompelete, setIsCompelete] = useState(false);
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
        <ProgressBar cx={0} cy={0} r={window.innerWidth > 720 ? 40 : 25} isActive={isCompelete} />
        <span className={style.icon}>
          <GetIcons name={Task.icon} />
        </span>
      </div>
      <div className={style.taskDetail}>
        <div className={style.Whatdo}>
          <MdOutlineEditLocationAlt />
          <p>{isCompelete ? <del>{Task.whatDo}</del> : Task.whatDo}</p>
        </div>
        <div className={style.wheredo}>
          <MdNotListedLocation />
          <p>{isCompelete ? <del>{Task.whereDo}</del> : Task.whereDo}</p>
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
        <span onClick={() => { OnDone(); setIsCompelete(!isCompelete) }}>
          <IoIosCheckmarkCircle />
        </span>
        <div className={style.editBtn} onClick={setActive}>
          <MdEditNote />
        </div>
        <CSSTransition classNames="modal" timeout={600} in={isActive} unmountOnExit>
          <section className={style.ModalWrapper}>
            <div className={style.Modal}>
              <div className={style.closeBtn}>
                <span onClick={setActive}><TiTimes /></span>
              </div>
              <EditTask />
            </div>
          </section>
        </CSSTransition>
      </div>
    </section>
  )
}

export default widthActive(Task)
