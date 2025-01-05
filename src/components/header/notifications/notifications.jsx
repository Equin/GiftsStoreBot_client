import FlowerNotif from "./flower-notifications";
import RequestNotif from "./request-notifications";
import "./notifications.css"

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotifications } from "../../../actions/notification";
import { getRequests } from "../../../actions/request";




function Notifications() {

    const { notifications } = useSelector(state => state.notification)
    const { requests } = useSelector(state => state.request)
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {

        if (currentUser.isAdmin) {
            dispatch(getRequests())
        } else {
            var date = new Date();
            dispatch(getNotifications(currentUser.id, date.getMonth(), date.getFullYear()))
        }

    }, [dispatch, currentUser.id])

    console.log("notifications sdfsdf sdf ", notifications)
    console.log("requests sdfsdf sdf ", requests)

    return (
        <div className="notifications">
            <div className="notif-text">
                <div className="notif-title"><h1>Сповіщення</h1></div>

                {currentUser.isAdmin ?
                    <div className="notif-description"><p>Запити на додавання рослин</p></div>
                    :
                    <div className="notif-description"><p>Рекомендується полити такі квітки:</p></div>
                }

            </div>

            {!currentUser.isAdmin ?
                <div className="notif-tables">
                    <div className="notif-today">
                        <div className="notif-day"><h2>Сьогодні</h2></div>
                        <div className="notif-flowers-table">

                            {notifications && notifications.todayInfo && notifications.todayInfo.length > 0 ?
                                notifications.todayInfo.map((notification) => {
                                    return <FlowerNotif key={notification.id} notification={notification} />
                                }

                                ) : <p>Немає рослин, яким потрібен полив сьогодні</p>

                            }
                        </div>
                    </div>
                    <div className="notif-tomorrow">
                        <div className="notif-day"><h2>Завтра</h2></div>
                        <div className="notif-flowers-table">
                            {notifications && notifications.tomorrowInfo && notifications.tomorrowInfo.length > 0 ?
                                notifications.tomorrowInfo.map((notification) => {
                                    return <FlowerNotif key={notification.id} notification={notification} />
                                }

                                ) : <p>Немає рослин, яким потрібен полив сьогодні</p>

                            }
                        </div>
                    </div>
                </div>

                :

                <div className="notif-tables">
                    <div className="notif-today">

                        <div className="notif-flowers-table">

                            {requests && requests.length > 0 ?
                                requests.map((request) => {
                                    return <RequestNotif key={request.id} request={request} />
                                }

                                ) : <p>Немає запитів на створення рослин</p>

                            }
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

export default Notifications;