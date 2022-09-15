import TaskList from '../../../TaskList/TaskList';
import LeftHeader from './LeftHeader/LeftHader';
import style from './LeftLayout.module.scss';
const LeftLayout = ({ isActive }) => {
  return (
    <section className={`${style.LeftLayout} ${isActive && style.fadeout}`}>
      <div className={style.leftWrapper}>
        <LeftHeader />
        <TaskList />
      </div>
    </section>
  )
}

export default LeftLayout