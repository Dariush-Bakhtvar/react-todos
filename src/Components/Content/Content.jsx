import React from 'react'
// import withActive from '../Hoc/withActive';
import Overlay from '../Overlay/Overlay';
import style from './Content.module.scss';
import LeftLayout from './Layout/LeftLayout/LeftLayout';
import RightLayout from './Layout/RightLayout/RightLayout';
const Content = ({ isActive, setActive }) => {
  return (
    <section className={style.Wrapper}>
      <LeftLayout />
      <RightLayout />
      <Overlay />
    </section>
  )
}

// export default withActive(Content);
export default Content;
