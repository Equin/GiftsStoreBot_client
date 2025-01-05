import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./registration.css";
import Input from "../utils/input/Input";
import { registration } from "../../actions/user";
import { useDispatch } from "react-redux";

function Registration() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="autorization">
      <div className="autoriz-block">
        <div className="a-content">
          <div className="a-title color-text">Реєстрація</div>
         
          <Input class="a-input-1" value={name} setValue={setName} type="text" placeholder="Введіть повне ім'я..." />
          <Input class="a-input-1" value={email} setValue={setEmail} type="text" placeholder="Введіть email..." />
          <Input class="a-input-1" value={password} setValue={setPassword} type="password" placeholder="Введіть пароль..." />

          <div className="a-button">
            <button className="add-button" onClick={()=>dispatch(registration(email, password, name))}>Зареєструватися</button>
          </div>
          <div className="a-registration">
            <p><NavLink to="/authorization">Повернутись до сторінки Авторизації</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;