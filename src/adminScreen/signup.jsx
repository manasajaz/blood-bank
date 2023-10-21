import BAbutton from "../component/button";
import BAinput from "../component/input";
import { fbSignUp } from "../config/firebsemethod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    model.role = "admin";
    fbSignUp(model)
      .then((res) => {
        console.log(res);
        if (model.role === "admin") {
          navigate("/");
        } else {
          navigate("/quiz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-600 to-pink-500 dark:bg-black">
        <div className="dark:bg-white  bg-[rgba(255,255,255,.3)] p-10 rounded-lg border-t-4 border-b-4 border-indigo-300 text-center">
          <div className="py-2">
            <h1 className="text-5xl ">Signup</h1>
          </div>
          <div className="p-2">
            <BAinput
              type="text"
              label="username"
              value={model.username}
              onChange={(e) => fillModel("username", e.target.value)}
            />
          </div>
          <div className="p-2">
            <BAinput
              type="text"
              label="email"
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
            />
          </div>
          <div className="p-2">
            <BAinput
              label="passward"
              type="password"
              value={model.passward}
              onChange={(e) => fillModel("password", e.target.value)}
            />
          </div>
          <div className="p-2">
            <BAinput
              type="password"
              label="confirm passward"
              value={model.confirmpassward}
              onChange={(e) => fillModel("confirmpassward", e.target.value)}
            />
          </div>
          <div className="p-2">
            <BAbutton onClick={signUpUser} label={"signup"} />
          </div>
          <div>
            <Link to="/login">Already Register?</Link>
          </div>
        </div>
      </div>
    </>
  );
}
