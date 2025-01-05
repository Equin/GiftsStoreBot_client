import FlowerDetails from "../../main/flowers/FlowerDetails/flower-details";
import ModalWindowAdd from "../../main/flowers/add-flower/Modal-add";
import "./flower-notifications.css"


function FlowerNotif({ notification }) {
    return (
        <div className="flower-notif">
            <div className="flower-notif-img"><img src={process.env.REACT_APP_API_URL + notification?.imagePath ?? ""} /></div>
            <div className="flower-notif-name"><p>{notification.summary}</p></div>

            <ModalWindowAdd buttonClassName="card-button" buttonName="Детальніше" addButtonKlassName="">
                <FlowerDetails id={notification.id} />
            </ModalWindowAdd>
        </div>
    )
}

export default FlowerNotif;