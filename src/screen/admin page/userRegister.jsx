import BAbutton from "../../component/button";
import BAinput from "../../component/input";
import { fbAdd, fbSignUp } from "../../config/firebsemethod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../component/select";

export default function UserRegister() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let UserRegister = () => {
    console.log(model);
    model.role = "admin";
    fbAdd("RegisterUser", model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> User Register</h5>
                <form>
                  <div className="p-2">
                    <BAinput
                      type="text"
                      label="Name"
                      value={model.name}
                      onChange={(e) => fillModel("name", e.target.value)}
                    />
                  </div>
                  <div className="p-2">
                    <BAinput
                      type="text"
                      label="Email"
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
                      label="CNIC"
                      type="number"
                      value={model.cnic}
                      onChange={(e) => fillModel("cnic", e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <Select
                      getvalue={(e) => {
                        console.log("app.js", e);
                      }}
                      label="Type"
                      value={model.type}
                      onChange={(e) => fillModel("type", e.target.value)}
                      option={[
                        {
                          value: "Admin",
                          displayName: "Admin",
                        },
                        {
                          value: "Student",
                          displayName: "Student",
                        },
                        {
                          value: "Institute",
                          displayName: "Institute",
                        },
                        {
                          value: "Teacher",
                          displayName: "Teacher",
                        },
                      ]}
                    />
                  </div>
                  <div className="p-2">
                    <BAbutton onClick={UserRegister} label={"Register"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
