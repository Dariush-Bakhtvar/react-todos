import style from './Navbar.module.scss';
import { AiFillGithub, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineForwardToInbox, MdNotifications } from 'react-icons/md';
// import withActive from '../Hoc/withActive';
import { CSSTransition } from 'react-transition-group';
import '../../asset/Sass/modal.scss';
import { useState } from 'react';
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  // const Navbar = ({ isActive, setActive }) => {
  // const DropDown = () => {
  //   return isShow && (
  //     <ul className={style.submenu}>
  //       <li className={style.userInfo}>
  //         <AiFillGithub />
  //         <span>Dariush Bakhtvar</span>
  //       </li>
  //       <li>
  //         <MdNotifications />
  //         <span>notification</span>
  //       </li>
  //       <li>
  //         <MdOutlineForwardToInbox />
  //         <span>inbox</span>
  //       </li>
  //       <li>
  //         <AiFillSetting />
  //         <span>
  //           setting
  //         </span>
  //       </li>
  //       <li>
  //         <AiOutlineLogout />
  //         <span>
  //           logout
  //         </span>
  //       </li>
  //     </ul>
  //   );
  // }
  return (
    <nav className={style.Navbar}>
      <div className={style.Logo}>
        <img src={require('../../asset/Img/Logo.png')} alt="Logo" />
      </div>
      <div className={style.profile} onClick={() => setIsShow(!isShow)}>
        <img src={require('../../asset/Img/Profile.jpg')} alt="Profile" />
        <span className={style.status}></span>
        <CSSTransition in={isShow} classNames='modal' timeout={600} unmountOnExit >
          {/* {DropDown()}
           */}
          <ul className={style.submenu}>
            <li className={style.userInfo}>
              <AiFillGithub />
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
        </CSSTransition>
      </div>
    </nav>
  )
}

// export default withActive(Navbar);
export default Navbar;
