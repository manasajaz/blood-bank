import React, { useState } from "react";
import { fbAdd } from "../../config/firebsemethod";
import { useNavigate } from "react-router-dom";
import BAinput from "../../component/input";
import Select from "../../component/select";
import BAbutton from "../../component/button";

export default function Instituteform() {
  const [InstituteFormdata, setInstituteFormdata] = useState({});

  const handleChange = (key, val) => {
    InstituteFormdata[key] = val;
    setInstituteFormdata({ ...InstituteFormdata });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(InstituteFormdata);
    fbAdd("instituteform", InstituteFormdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Institute Form</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <BAinput
                    value={InstituteFormdata.InstituteName}
                    onChange={(e) => {
                      handleChange("InstituteName", e.target.value);
                    }}
                    label="Institute Name"
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    type="text"
                    label="Email"
                    value={InstituteFormdata.email}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    label="passward"
                    type="password"
                    value={InstituteFormdata.password}
                    onChange={(e) => {
                      handleChange("password", e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    label="Institute logo"
                    onChange={(e) => {
                      handleChange("logo", e.target.value);
                    }}
                    // onchange="previewImage(event)"
                    type="file"
                    // accept="image/*"
                    value={InstituteFormdata.logo}
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    label=" Number of campus"
                    onChange={(e) => {
                      handleChange("campus", e.target.value);
                    }}
                    value={InstituteFormdata.campus}
                  />
                </div>
                <div className="mb-3">
                  <Select
                    onChange={(e) => {
                      handleChange("Select", e.target.value);
                    }}
                    label="Institute type"
                    value={InstituteFormdata.Select}
                    option={[
                      {
                        value: "school",
                        displayName: "school",
                      },
                      {
                        value: "college",
                        displayName: "college",
                      },
                      {
                        value: "institute",
                        displayName: "institute",
                      },
                      {
                        value: "university",
                        displayName: "university",
                      },
                    ]}
                  />
                </div>

                <div className="text-center">
                  <BAbutton label="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
