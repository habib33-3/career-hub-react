import { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../hooks/AuthProvider";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div>
        <div className="login-container">
          <div>
            <input
              className="form-control"
              type="email"
              placeholder="Type Email"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Type Password"
            />
            <button className="Login-btn">Login</button>
            <div className="login-btns">
              <button onClick={handleGoogleSignIn} className="google-btn ">Google Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
