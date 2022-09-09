import Search from '../../../Search/Search';
import TaskList from '../../../TaskList/TaskList';
import style from './LeftLayout.module.scss';
const LeftLayout = ({ isActive }) => {
  return (
    <section className={`${style.LeftLayout} ${isActive && style.fadeout}`}>
      <div className={style.leftWrapper}>
        <Search />
        <TaskList />
      </div>
    </section>
  )
}

export default LeftLayout