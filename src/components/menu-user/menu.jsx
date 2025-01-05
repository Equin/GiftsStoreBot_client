import React, { useState } from 'react';
import "./menu.css"
import MyFlowersPage from "../main/flowers/user-page/my-flowers-page";
import Find from "../main/find/find-page";
import { useSelector, useDispatch } from "react-redux";
import Calendar from '../main/calendar/kalendar';

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("myFlowersPage");
  const { currentUser } = useSelector(state => state.user);

  const handleClick = (content) => {
    setCurrentPage(content);
  };

  const renderPage = () => {
    if (currentPage === 'myFlowersPage') {
      return <MyFlowersPage />;
    } else if (currentPage === 'find') {
      return <Find />;
    } else if (currentPage === 'wateringCalendar') {
      return <Calendar />;
    } else {
      return null;
    }
  };

  return (
    <>{
        currentUser.isEnabled != true &&
        <div className="menu">
          Будь ласка підвердіть свою електронну адресу. На вашу пошту відправлено лист з посиланням для підтвердження.
        </div>
      }

      {currentUser.isEnabled == true && 
      <div>
        <div className="menu">
          <ul className="menu-ul">
            <li className={currentPage === 'myFlowersPage' ? "categories active" : "categories"} onClick={() => handleClick('myFlowersPage')}>Моя квіткарня</li>
            <li className={currentPage === 'find' ? "categories active" : "categories"} onClick={() => handleClick('find')}>Знайти рослинку</li>
            <li className={currentPage === 'wateringCalendar' ? "categories active" : "categories"} onClick={() => handleClick('wateringCalendar')}>Календар поливу</li>
          </ul>
        </div>
        <div className="page-content">{renderPage()}</div>
      </div>
      }
    </>
  );
};

export default Menu;