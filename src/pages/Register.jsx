import { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      return setError("Password not strong");
    }

    if (email) {
      signUp(email, password)
        .then((res) => console.log(res.user))
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="login-container">
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
                placeholder="Type Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                type="password"
                placeholder="Type Password"
              />
              <button className="Login-btn">Register</button>
              <div className="login-btns">
                <button onClick={handleRegister} className="google-btn ">Google Login</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
