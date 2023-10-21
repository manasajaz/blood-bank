import React, { useState } from "react";
import { fbAdd } from "../../config/firebsemethod";
import { useNavigate } from "react-router-dom";
import BAinput from "../../component/input";
import BAbutton from "../../component/button";

export default function Courseform() {
  const [CourseFormdata, setCourseFormdata] = useState({});

  const handleChange = (key, val) => {
    CourseFormdata[key] = val;
    setCourseFormdata({ ...CourseFormdata });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(CourseFormdata);
    fbAdd("courseform", CourseFormdata)
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
              <h5 className="card-title">Course Form</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <BAinput
                    value={CourseFormdata.CourseName}
                    onChange={(e) => {
                      handleChange("CourseName", e.target.value);
                    }}
                    label="Course Name"
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    value={CourseFormdata.duration}
                    onChange={(e) => {
                      handleChange("duration", e.target.value);
                    }}
                    label="Duration"
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    value={CourseFormdata.fee}
                    onChange={(e) => {
                      handleChange("fee", e.target.value);
                    }}
                    label="Fee"
                  />
                </div>
                <div className="mb-3">
                  <BAinput
                    value={CourseFormdata.teacher}
                    onChange={(e) => {
                      handleChange("teacher", e.target.value);
                    }}
                    label="Teacher"
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
