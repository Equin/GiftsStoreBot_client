import "./autorization.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../utils/input/Input";
import { login, } from "../../actions/user";
import { useDispatch } from "react-redux";

function Autorization() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const logIn=() => {
    dispatch(login(email, password))
  }


  return (
    <div className="autorization">
      <div className="autoriz-block">
        <div className="a-content">
          <div className="a-title color-text">Вхід</div>
            {/*
              <div className="a-choose">
              <div className="a-choose-1"> <a href="#">Користувач</a></div>
              <div> <a href="#">Адміністратор</a></div>
              </div>
              */}
          <Input class="a-input-1" value={email} setValue={setEmail} type="text" placeholder="Введіть email..." />
          <Input class="a-input-1" value={password} setValue={setPassword} type="password" placeholder="Введіть пароль..." />
          <div className="a-button">
            <button className="add-button" onClick={()=> logIn()}>Увійти</button>
          </div>
          <div className="a-registration">
            <p>Не маєте аккаунту? <NavLink to="/registration">Зареєструйтеся</NavLink></p>  <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autorization;