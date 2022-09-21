import { useEffect, useRef, useState } from "react";
import { useTodosAction } from "../Provider/TodoProvider";
import { ToastContainer, toast } from 'react-toastify';
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
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import InputIcon from "react-multi-date-picker/components/input_icon"
//datapicker  custom style class
import '../../asset/Css/Datapicker.css';
// import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import '../../asset/Css/popup.css';
import { MdEditNote } from 'react-icons/md';
import { TiTimes } from 'react-icons/ti';
import style from './EditTask.module.scss';
const EditTask = ({ taskId }) => {
  const dispatch = useTodosAction();
  const [editDate, setEditDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const editWhatDo = useRef();
  const editWhereDo = useRef();
  //set Date in date hook
  const dateHandler = (e) => {
    setEditDate(e);
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
    const toastProperty = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    const EditWhatDo = editWhatDo.current.value;
    const EditWhereDo = editWhereDo.current.value;
    const EditDate = editDate.format().toString().split(" ");
    const success = () => toast.success('کار جدید با موقیت ویرایش شد!', toastProperty);
    const unsuccess = () => toast.error('فیلد های خالی را پر کنید', toastProperty);
    const checkFild = !EditWhatDo || !EditWhereDo || !EditDate;
    if (checkFild) {
      unsuccess();
    } else {
      dispatch({ type: 'editTask', id: taskId, EditWhatDo, EditWhereDo, EditDate });
      editWhatDo.current.value = "";
      editWhereDo.current.value = "";
      success();
    }
  }
  return (
    <Popup className="popup-content" trigger={<button className={style.btnModal}><MdEditNote /> </button>} modal>
      {close => (
        <div className={style.modal}>
          <button className={style.close} onClick={close}><TiTimes /></button>
          <div className={style.header}> ویرایش </div>
          <form action="#" className={style.editForm} onSubmit={(e) => editFormHandler(e)}>
            <input type="text" placeholder='چه کاری را ویرایش کنم؟' ref={editWhatDo} className={style.inputText} />
            <input type="text" placeholder='کجا؟' ref={editWhereDo} className={style.inputText} />
            <div className={style.calendar}>
              <DatePicker className={`teal rmdp_input bg-dark  ${isMobile && 'rmdp-mobile'} `}
                value={editDate}
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
        </div>
      )}
    </Popup>
  )
}

export default EditTask
