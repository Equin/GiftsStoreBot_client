import { useDispatch } from "react-redux";
import "./logout.css"
import { logOut } from "../../../actions/user";

function Logout(params){
    const dispatch = useDispatch()

    const handleRemove = () => {
      params?.onClose()
     
    };

    return(
        <div className="modal-logout">
        <div className="modal-text">
          <h1>Вихід</h1>
          <p className="modal-text-1">Ви впевнені, що хочете завершити сенс?</p>
          <p className="modal-text-2">Ваші данні будуть збережені</p>
        </div>
        <div className="modal-buttons">
          <button className="modal-button-1" onClick={()=> dispatch(logOut())}>Так</button>
          <button className="modal-button-2" onClick={()=>{handleRemove()}}>Ні</button>
        </div>
        </div>
    )
}

export default Logout;