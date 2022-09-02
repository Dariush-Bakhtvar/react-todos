import style from './Progress.module.scss';
const ProgressBar = ({ cx, cy, r, isActive }) => {
  return (
    <div className={style.progressWrapper}>
      <svg className={style.ProgressBarSvg} >
        <circle cx={cx} cy={cy} r={r}
          className={`${style.ProgressBarCircle} ${isActive ? style.Pogress_forward : style.Pogress_backward}`}></circle>
      </svg>
    </div>
  )
}

export default ProgressBar