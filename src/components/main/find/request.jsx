import Input from "../../utils/input/Input";
import "./request.css";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest } from '../../../actions/request';


 
function Request(){

  const { currentUser } = useSelector(state => state.user);

  const dispatch = useDispatch()

  const [plantName, setPlantName] = useState({})

  const handleSendRequest=()=>{
    dispatch(createRequest(plantName, currentUser.id))

  }

  return(
    <div>
    <div className="text-request">
        <p>Потрібну рослину не знайдено?</p>
        <p>Відправте заявку і адміністратор додасть необхідну Вам рослину</p>
    </div>
    <div className="input-request">
        <Input type="name" placeholder="Введіть назву " setValue={setPlantName}/>

    </div>
    <div className="button-request">
        <button onClick={()=>handleSendRequest()}>Надіслати</button>
    </div>
    </div>
  )  
}
export default Request;