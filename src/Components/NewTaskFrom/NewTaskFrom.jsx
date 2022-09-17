import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withActive from "../Hoc/withActive"
import ProgressBar from '../ProgressBar/ProgressBar';
import { useTodosAction } from '../Provider/TodoProvider';
//select
import makeAnimated from 'react-select/animated';
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
//datapicker  custom style class
import './inputClass.css';
import { FaPlus } from "react-icons/fa";
import { RiImageEditFill } from 'react-icons/ri'
import GetIcons from '../GetIcons/GetIcons';
//date-fns-jalali
//react-select option and style
const Option = [
  { value: "Business", label: "کسب و کار", color: "#00c7c7" },
  { value: "Personal", label: "شخصی", color: "#F24C4C" },
  { value: "Family", label: "خانوادگی", color: "#844685" },
  { value: "Work", label: "کاری", color: "#05FF97" },
];
const colorMap = {
  Business: "#00c7c7",
  Personal: "#F24C4C",
  Family: "#844685",
  Work: "#05FF97",
};
const SelectInsideColor = {
  container: (styles) => ({
    ...styles,
    "@media only screen and (min-width: 320px) and (max-width:480px)": {
      ...styles["@media only screen and(min-width: 320px) and (max-width:480px)"],
      height: 16,
      marginBottom: 14,
    },
  }),
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
    "@media only screen and (min-width: 320px) and (max-width:480px)": {
      ...base["@media only screen and(min-width: 320px) and (max-width:480px)"],
      height: 16,
      marginBottom: 14,
    },
  }),
};
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
  const [isMobile, setIsMobile] = useState(false);
  const [selectTask, setSelectTask] = useState("");
  const [date, setDate] = useState("");
  const inputWhatDo = useRef();
  const inputWhereDo = useRef();
  const selectRef = useRef();
  const dispatch = useTodosAction();
  //check screen size
  const checkScreenSize = () => {
    return window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
  })
  // check state icone?
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
  //show modal element
  const showIconGroup = () => {
    return Icons.map((icon, index) => {
      return <li key={index} className={style.BtnIcons}
        onClick={() => checkIconStatus(icon)}>
        <GetIcons name={icon} />
      </li>
    })
  }
  //set react-select value
  const selectHandler = (e) => {
    setSelectTask(e.value);
  }
  //set Date in date hook
  const dateHandler = (e) => {
    // console.log(e.format());
    setDate(e);
  }
  //set new task =>create new task
  const CreateNewTask = (e) => {
    e.preventDefault();
    const toastProperty = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    const WhatDo = inputWhatDo.current.value;
    const WhereDo = inputWhereDo.current.value;
    const WhenDo = date.format().toString().split(" ");
    const success = () => toast.success('کار جدید با موقیت ایجاد شد!', toastProperty);
    const unsuccess = () => toast.error('فیلد های خالی را پر کنید', toastProperty);
    const checkFild = !WhatDo || !WhereDo || !selectTask || !WhenDo;
    if (checkFild) {
      unsuccess();
      return;
    } else {
      dispatch({ type: 'newTask', WhatDo, WhereDo, WhenDo, selectTask, icon });
      setIcons("");
      setSelectTask("");
      setDate("");
      inputWhatDo.current.value = "";
      inputWhereDo.current.value = ""
      selectRef.current.state.selectValue = [];
      setActive();
      success();
    }
  }
  return (
    <form action='#' className={style.NewTaskFrom} onSubmit={CreateNewTask}>
      <div className={style.newTaskTitle}>
        <FiEdit />
        <h2>کار جدید</h2>
      </div>
      <section className={style.selectIconTask}>
        <ProgressBar cx={0} cy={0} r={`${isMobile ? '25' : '50'}`} isActive={isActive} />
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
      <Select className={style.select}
        options={Option}
        components={makeAnimated()}
        onChange={selectHandler}
        ref={selectRef}
        placeholder="دسته بندی ..."
        styles={SelectInsideColor}
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
      />
      <input className={style.inputTask} type="text" placeholder='چه کاری را باید انجام بدم؟ *' ref={inputWhatDo} />
      <input className={style.inputTask} type="text" placeholder='کجا؟ *' ref={inputWhereDo} />
      <div className={style.calendar}>
        <DatePicker className={`teal ${style.rmdp_input} ${isMobile && 'rmdp-mobile'}`}
          value={date}
          onChange={dateHandler}
          format="D MMMM YYYY HH:mm:ss"
          calendar={persian}
          locale={persian_fa}
          plugins={[<TimePicker position="bottom" />]}
          calendarPosition="bottom-right"
          render={<InputIcon />}
          animations={[opacity(), transition({ from: 35, duration: 800 })]}
          placeholder='چه موقع؟ *'
          minDate={new Date()}
        />
      </div>
      <input type="submit" value="ایجاد" disabled={!date} className={` ${style.submitBtn} ${!date && style.disableBtn}`} />
      <ToastContainer
        position={window.innerWidth > 720 ? "top-right" : "top-center"}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "#333748", color: "#f2f2f2", fontFamily: "'Shabnam', sans- serif", width: window.innerWidth < 720 && '90%' }}
        theme="dark"
      />
    </form>
  )
}

export default withActive(NewTaskFrom)