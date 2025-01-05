import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles
import './kalendar.css';
import { useSelector, useDispatch } from "react-redux";
import { getCalendarInfo, getFrequency } from "../../../actions/plant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ua from './ua.json'

function CCCCC() {

    const { calendarInfo } = useSelector(state => state.plant)
    const { currentUser } = useSelector(state => state.user);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const dispatch = useDispatch()
    const history = useNavigate();

    console.log(calendarInfo)

    useEffect(() => {
        dispatch(getCalendarInfo(currentUser.id, new Date().getFullYear(), selectedMonth))
    }, [dispatch, currentUser.id, selectedMonth])

    return (
        <div className='calendar_wrapper'>
            <Kalend

                events={calendarInfo}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.MONTH}
                disabledViews={[CalendarView.DAY, CalendarView.WEEK, CalendarView.THREE_DAYS,]}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                customLanguage={ua}
                onEventClick={(event) => {
                    history(`/flower/${event.id}`)
                }}
            
                onPageChange={(rangeFrom, rangeTo, direction) => {
                    //console.log(Date.parse(rangeFrom), Date.parse(rangeFrom))
                   // setSelectedMonth(new Date(rangeTo).getMonth() - new Date(rangeFrom).getMonth())
                }}
                disabledDragging={true}
            />
        </div>
    );
}

export default CCCCC;