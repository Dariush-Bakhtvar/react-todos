import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import widthActive from '../Hoc/withActive';
import style from './Task.module.scss';
import { CSSTransition } from 'react-transition-group';
import '../../asset/Sass/modal.scss';
import { MdMoreVert, MdEditNote } from 'react-icons/md';
import { IoIosTrash } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { TiTimes } from 'react-icons/ti';
const Task = ({ isActive, setActive }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <section className={style.task}>
      <div className={style.taskIcon}>
        <ProgressBar cx={0} cy={0} r={40} isActive={true} />
        <span className={style.icon}>icon</span>
      </div>
      <div className={style.taskDetail}>
        <p>متن آزمایشی</p>
        <p>متن آزمایشی</p>
        <p>12/6/1401</p>
        <p>lable</p>
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
              <div className="cloneBtn">
                <TiTimes />
              </div>
              <form action="#">
                <input type="text" placeholder='چه کاری را ویرایش کنم؟' />
                <input type="text" placeholder='کجا؟' />
                <input type="submit" value="ویرایش" />
              </form>
            </div>
          </section>
        </CSSTransition>
      </div>
    </section>
  )
}

export default widthActive(Task)
