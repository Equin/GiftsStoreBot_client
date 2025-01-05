import React, { useState } from 'react';
import "./header.css"
import "../../style.css"
import ModalWindow from '../modal-window/modal';
import Logout from './logout/logout';
import Notifications from './notifications/notifications';
import AddFlowerModal from '../main/flowers/add-flower/AddFlowerModal';

function Header({hello, about}) {
    return (
        <div className="container container-header" >
       
            <div className="coll-1"><img src="../../header-main.png" alt="main photo"/></div>
            
            <div className="coll-2">
                <div className="header-title">
                    <h1><div className="color-text">Вітаємо тебе,</div>{hello}</h1>
                </div>
                <div className="header-description">
                    <p>{about}</p>
                </div>
                <div>
                    
                    <ul> 
                        <li>полив</li>
                        <li>вологість</li>
                        <li>температура</li>
                        <li>освітлення</li>
                    </ul> 
                </div>
            </div>
            <div className="icons">
                <div className="icon1">
                    <ModalWindow icon="../../notifications.png" >
                        <Notifications />
                    </ModalWindow>
                    
                </div>
                <div className="icon2">
                     <ModalWindow icon="../../logout.png" >
                        <Logout />
                    </ModalWindow>
                </div>
            </div>
    
            

        </div>
    );
}

export default Header;