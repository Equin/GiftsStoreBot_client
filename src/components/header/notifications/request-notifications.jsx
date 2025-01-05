import FlowerDetails from "../../main/flowers/FlowerDetails/flower-details";
import ModalWindowAdd from "../../main/flowers/add-flower/Modal-add";
import AddFlowerModal from "../../main/flowers/add-flower/AddFlowerModal";
import "./flower-notifications.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteRequest } from "../../../actions/request";


function RequestNotif({ request }) {
    const dispatch = useDispatch()

    return (
        <div className="flower-notif">
       <p>{request.name}</p>

            <ModalWindowAdd buttonClassName="card-button" buttonName="Додати" addButtonKlassName="">
                <AddFlowerModal userID ={request.userID} newPlantName={request.name} requestID={request.id} />
            </ModalWindowAdd>

            <button onClick={()=> {
                dispatch(deleteRequest(request.id))
            }}className="card-button">Видалити</button>

        </div>
    )
}

export default RequestNotif;