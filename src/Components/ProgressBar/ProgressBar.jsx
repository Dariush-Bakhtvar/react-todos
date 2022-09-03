import style from './Progress.module.scss';
const ProgressBar = ({ cx, cy, r, isActive }) => {
  return (
    <div className={style.progressWrapper}>
      <svg className={style.ProgressBarSvg} >
        <circle cx={cx} cy={cy} r={r}
          className={`${style.ProgressBarCircle} ${isActive ? style.Progress_forward : style.Progress_backward}`}></circle>
      </svg>
    </div>
  )
}

export default ProgressBar