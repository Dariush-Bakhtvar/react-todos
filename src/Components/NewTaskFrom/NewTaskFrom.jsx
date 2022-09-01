import { useState } from 'react'
import withActive from "../Hoc/withActive"
import Select from 'react-select';
import { FiEdit } from 'react-icons/fi';
import style from './form.module.scss';
// Datapicker package and Time Picker
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
//DataPicker persion format
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
//DataPicer style
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/colors/teal.css"
import "react-multi-date-picker/styles/layouts/prime.css"
import "react-multi-date-picker/styles/layouts/mobile.css"
import InputIcon from "react-multi-date-picker/components/input_icon"
import './inputClass.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { FaPlus } from "react-icons/fa";
import { RiImageEditFill } from 'react-icons/ri'
import GetIcons from '../GetIcons/GetIcons';
//react-select option and style
const Option = [
  { value: "Business", label: "کسب و کار", color: "#00c7c7" },
  { value: "Personal", label: "شخصی", color: "#F24C4C" },
  { value: "Family", label: "خانوادگی", color: "#844685" },
  { value: "Work", label: "کاری", color: "#F3C623" },
];
const colorMap = {
  Business: "#00c7c7",
  Personal: "#F24C4C",
  Family: "#844685",
  Work: "#F3C623",
};
const SelectInsideColor = {
  singleValue: (provided, { data }) => ({
    ...provided,
    color: colorMap[data.value] ? colorMap[data.value] : "defaultColor",
  }),
  control: (base) => ({
    ...base,
    border: '0 !important',
    // This line disable the blue border
    boxShadow: '0 !important',
    '&:hover': {
      border: '0 !important'
    },
    height: 40,
    background: "#f2f2f2",
  }),
};
// const selectStyle = [];
//icon name for btn list
const Icons = [
  "FaRocketchat",
  "FaHighlighter",
  "FaMapMarkedAlt",
  "FaPrint",
  "FaEnvelope",
  "FaCar",
  "FaUserFriends",
  "FaCameraRetro",
  "FaVideo",
  "FaBriefcase",
  "FaCalculator",
  "FaHeart",
  "FaHeadphones",
  "FaBuilding",
  "FaShopify",
  "FaCartArrowDown",
  "FaShoppingCart",
  "FaWrench",
  "FaTree",
  "FaDollarSign",
];
const NewTaskFrom = ({ isActive, setActive }) => {
  const [icon, setIcons] = useState("");
  const [isHover, setIsHover] = useState(false);
  const checkIconStatus = (iconsName) => {
    if (icon) {
      setIcons(iconsName);
      setIsHover(false);
    } else {
      setIcons(iconsName);
      setActive();
      setIsHover(false);
    }
  }
  const showIconGroup = () => {
    return Icons.map((icon, index) => {
      return <li key={index} className={style.BtnIcons}
        onClick={() => checkIconStatus(icon)}>
        <GetIcons name={icon} />
      </li>
    })
  }
  return (
    <form action="" className={style.NewTaskFrom}>
      <div className={style.newTaskTitle}>
        <FiEdit />
        <h2>کار جدید</h2>
      </div>
      <section className={style.selectIconTask}>
        <ProgressBar cx={0} cy={0} r={50} isActive={isActive} />
        <div className={`${style.selectIconBtn} ${isActive && style.activeBtn}`} onClick={() => setIsHover(!isHover)}>
          {icon ? <GetIcons name={`${icon}`} /> : <FaPlus />}
        </div>
        {
          icon &&
          <div className={style.editIcons} onClick={() => setIsHover(!isHover)}>
            <span>
              <RiImageEditFill />
            </span>
          </div>
        }
        {
          isHover &&
          <ul className={`${style.IconModal}`}>
            {showIconGroup()}
          </ul>
        }
      </section>
      <Select
        className={style.select}
        // defaultValue={Option[0]}
        options={Option}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            text: "dodgerblue",
            primary25: "#dff9fb",
            primary: "#14AF6E",
            neutral50: '#aaa',
          },
          spacing: {
            ...theme.spacing,
            controlHeight: 30,
            baseUnit: 2,
          },
        })}
        styles={SelectInsideColor}
        // onChange={}
        placeholder="دسته بندی ..."
      />
      <input className={style.inputTask} type="text" placeholder='چه کاری را باید انجام بدم؟ *' />
      <input className={style.inputTask} type="text" placeholder='کجا؟ *' />
      <div className={style.calendar}>
        <DatePicker
          className={`teal ${style.rmdp_input}`}
          render={<InputIcon />}
          calendar={persian}
          locale={persian_fa}
          plugins={[<TimePicker position="bottom" />]}
          animations={[opacity(), transition({ from: 35, duration: 800 })]}
          calendarPosition="bottom-right"
          format="D MMMM YYYY HH:mm:ss"
          placeholder='چه موقع؟ *'
        />
      </div>
      <input type="submit" value="ایجاد" />
    </form>
  )
}

export default withActive(NewTaskFrom)