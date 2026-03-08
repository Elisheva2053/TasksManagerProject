import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {login}  from "../features/userSlice"



export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [attempted, setAttempted] = useState(false);

  const handleLogin = () => {
    setAttempted(true);
    dispatch(login({ name, password }));
  };

  

  return (
    <div>
      <input
        type="text"
        placeholder="שם משתמש"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>התחבר</button>

      {attempted && (
        isLoggedIn
          ? <p>התחברת בהצלחה!</p>
          : <p>שם משתמש או סיסמה שגויים</p>
      )}
    </div>
  );
}



