import Search from '../../../Search_Filter/Search';
import style from './LeftLayout.module.scss';
const LeftLayout = ({ isActive }) => {
  return (
    <section className={`${style.LeftLayout} ${isActive && style.fadeout}`}>
      <div className={style.leftWrapper}>
        <Search />
        <div>tasks</div>
      </div>
    </section>
  )
}

export default LeftLayout