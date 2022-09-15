import React from 'react'
import style from './leftHeader.module.scss';
import FilterType from '../../../../Filter/FilterType/FilterType';
const LeftHeader = () => {
  return (
    <div className={style.headerWrapper}>
      <FilterType />
    </div>
  )
}

export default LeftHeader
