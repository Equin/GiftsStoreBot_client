import Find from "./components/main/find/find-page";
import FlowerDetails from "./components/main/flowers/FlowerDetails/flower-details";
import { BrowserRouter, Route, Routes, redirect, useLocation, useNavigate } from 'react-router-dom';
import Autorization from "./components/autorization/autorization";
import Registration from "./components/registration/registration";
import UserPage from "./Users-pages/User-page";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./actions/user";
import { useDispatch } from "react-redux";
import AdminPage from "./Users-pages/Admin-page";

function App() {

  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const isLoading = useSelector(state => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  if (isLoading && localStorage.getItem('token')) {
    return
  }

  function getPage() {
    if (currentUser.isAdmin == true) {
      return <AdminPage />
    } else {
      return <UserPage />
    }
  }

  if (isAuth && (window.location.pathname == '/authorization' || window.location.pathname == '/registration')) {
    window.location.pathname = '/';
  }

  if (!isAuth && (window.location.pathname !== '/authorization' && window.location.pathname !== '/registration' && window.location.pathname !== '/')) {
    window.location.pathname = '/';
  }

  return (

    <BrowserRouter>
      <Routes >

        {!isAuth && <Route path="/" element={<Autorization />} />}
        {!isAuth && <Route path="/registration" element={<Registration />} />}
        {!isAuth && <Route path="/authorization" element={<Autorization />} />}

        {isAuth && <Route path="/" element={getPage()} />}

        {isAuth && <Route path="/flower/:id" element={<FlowerDetails />} />}

        {isAuth && <Route path="/search" element={<Find />} />}

      </Routes >
    </BrowserRouter>
  );
}

export default App;
