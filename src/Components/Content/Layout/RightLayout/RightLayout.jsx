import style from './RightLayout.module.scss';
const RightLayout = ({ isActive }) => {
  return (
    <div className={`${style.RightLayout} ${isActive && style.fadeout}`}>
      Rigth layout
    </div>
  )
}

export default RightLayout
