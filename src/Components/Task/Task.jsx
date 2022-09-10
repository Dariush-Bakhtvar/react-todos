import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import widthActive from '../Hoc/withActive';
import GetIcons from '../GetIcons/GetIcons'
import style from './Task.module.scss';
import { CSSTransition } from 'react-transition-group';
import '../../asset/Sass/modal.scss';
import { MdMoreVert, MdEditNote, MdOutlineEditLocationAlt, MdNotListedLocation } from 'react-icons/md';
import { IoIosTrash } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { TiTimes } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import { BsBookmarkStarFill } from 'react-icons/bs';
import EditTask from '../EditTask/EditTask';
const Task = ({ isActive, setActive, Task }) => {
  const [isModal, setIsModal] = useState(false);

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
        <ProgressBar cx={0} cy={0} r={window.innerWidth > 720 ? 40 : 25} isActive={true} />
        <span className={style.icon}>
          <GetIcons name={Task.icon} />
        </span>
      </div>
      <div className={style.taskDetail}>
        <div className={style.Whatdo}>
          <MdOutlineEditLocationAlt />
          <p>{Task.whatDo}</p>
        </div>
        <div className={style.wheredo}>
          <MdNotListedLocation />
          <p>{Task.whereDo}</p>
        </div>
        <p>
          <span>
            {`${Task.date.day}  ${Task.date.month}  ${Task.date.year}`}
            <GoCalendar />
          </span>
          <span className={checkTaskTyep()}>
            <BsBookmarkStarFill />
          </span>
        </p>
      </div>
      <div className={style.taskControll}>
        <div className={style.mangeBtn} onClick={setActive}>
          <MdMoreVert />
        </div>
        <CSSTransition classNames="modal" timeout={600} in={isActive} unmountOnExit>
          <div className={style.Menu}>
            <p>
              <span>حذف</span>
              <IoIosTrash />
            </p>
            <p>
              <span>انجام</span>
              <IoCheckmarkCircleSharp />
            </p>
          </div>
        </CSSTransition>
        <div className={style.editBtn} onClick={() => setIsModal(!isModal)}>
          <MdEditNote />
        </div>
        <CSSTransition classNames="modal" timeout={600} in={isModal} unmountOnExit>
          <section className={style.ModalWrapper}>
            <div className={style.Modal}>
              <div className={style.closeBtn}>
                <span onClick={() => setIsModal(false)}><TiTimes /></span>
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
