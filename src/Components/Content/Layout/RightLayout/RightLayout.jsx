import style from './RightLayout.module.scss';
// import { FiEdit } from 'react-icons/fi';
import NewTaskFrom from '../../../NewTaskFrom/NewTaskFrom';

const RightLayout = ({ isActive }) => {
  return (
    <div className={`${style.RightLayout} ${isActive && style.fadeout}`}>
      <NewTaskFrom />
    </div>
  )
}

export default RightLayout
