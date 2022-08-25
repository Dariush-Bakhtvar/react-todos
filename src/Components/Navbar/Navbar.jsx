import style from './Navbar.module.scss';
import { AiFillGithub, AiFillSetting, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineForwardToInbox, MdNotifications } from 'react-icons/md';
import withActive from '../Hoc/withActive';
const Navbar = ({ isActive, setIsActive }) => {
  const Modal = () => {
    return isActive && (
      <ul className={style.submenu}>
        <li className={style.userInfo}>
          <AiOutlineUser />
          <span>Dariush Bakhtvar</span>
        </li>
        <li>
          <MdNotifications />
          <span>notification</span>
        </li>
        <li>
          <MdOutlineForwardToInbox />
          <span>inbox</span>
        </li>
        <li>
          <AiFillGithub />
          <span>git</span>
        </li>
        <li>
          <AiFillSetting />
          <span>
            setting
          </span>
        </li>
        <li>
          <AiOutlineLogout />
          <span>
            logout
          </span>
        </li>
      </ul>
    );
  }
  return (
    <nav className={style.Navbar}>
      <div className={style.Logo}>
        <img src={require('../../asset/Img/Logo.png')} alt="Logo" />
      </div>
      <div className={style.profile} onClick={setIsActive}>
        <img src={require('../../asset/Img/Profile.jpg')} alt="Profile" />
        <span className={style.status}></span>
        {Modal()}
      </div>
    </nav>
  )
}

export default withActive(Navbar)
