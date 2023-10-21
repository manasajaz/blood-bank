import Table from "../../component/table";
import BAbutton from "../../component/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fbGet } from "../../config/firebsemethod";

export default function Courselist() {
  const navigate = useNavigate();
  const [Data, setData] = useState({});
  console.log(Data);

  const Header = ["Course Name ", "Duration", " Fees"];

  let getTask = () => {
    fbGet("courseform")
      .then((res) => {
        console.log(res);
        setData({ ...res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Table header={Header} datasource={Data} />
      <BAbutton
        label="Add Data"
        onClick={() => {
          navigate("/institutedashboard/courseform");
        }}
      />
    </>
  );
}
