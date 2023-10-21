import BAbutton from "../component/button";
import BAinput from "../component/input";
import { useEffect, useState } from "react";
import { fbLogin, fbAuth } from "../config/firebsemethod";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUser } from "../redux/reducers/userSlice";

export default function Login() {
  const [model, setModel] = useState({});
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    // e.preventDefault();

    fbLogin(model)
      .then((res) => {
        console.log(res);
        // dispatch(addUser({ ...res }));
        if (res.role === "admin") {
          navigate("/");
        } else {
          navigate("/test");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // useEffect(() => {
    //   fbAuth()
    //     .then((res) => {
    //       navigate("/student");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className=" dark:bg-white bg-[rgba(255,255,255,.3)] p-5 rounded-lg border-t-4 border-b-4 border-indigo-300  text-center">
        <div className="py-2">
          <h1 className="text-5xl ">Login</h1>
        </div>

        <div className="py-2">
          <BAinput
            type="text"
            label="email"
            value={model.email}
            onChange={(e) => fillModel("email", e.target.value)}
          />
        </div>
        <div className="py-2">
          <BAinput
            type="password"
            label="password"
            value={model.password}
            onChange={(e) => fillModel("password", e.target.value)}
          />
        </div>
        <div className="py-2">
          <BAbutton onClick={LoginUser} label="login" />
        </div>
        <div>
          <Link to="/signup">Creat an Account</Link>
        </div>
      </div>
    </div>
  );
}
