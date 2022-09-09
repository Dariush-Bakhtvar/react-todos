import { useState } from "react";
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
import '../NewTaskFrom/inputClass.css';
import style from './EditTask.module.scss';
import { useEffect } from "react";
import { useRef } from "react";

const EditTask = () => {
  const [date, setDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const editWhatDo = useRef();
  const editWhereDo = useRef();
  //set Date in date hook
  const dateHandler = (e) => {
    setDate(e);
  }
  //check screen size
  const checkScreenSize = () => {
    return window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
  })
  const editFormHandler = (e) => {
    e.preventDefault();
  }
  return (
    <form action="#" className={style.editForm} onSubmit={(e) => editFormHandler(e)}>
      <input type="text" placeholder='چه کاری را ویرایش کنم؟' ref={editWhatDo} className={style.inputText} />
      <input type="text" placeholder='کجا؟' ref={editWhereDo} className={style.inputText} />
      <div className={style.calendar}>
        <DatePicker className={`teal rmdp_input ${isMobile && 'rmdp-mobile'} bg-dark `}
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
        />
      </div>
      <input type="submit" value="ویرایش" />
    </form>
  )
}

export default EditTask
