import DashboardPage from "../institute page/institutedashboard";
import Table from "../../component/table";
import Instituteform from "./instituteform";
import BAbutton from "../../component/button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fbGet } from "../../config/firebsemethod";

export default function Institutelist() {
  const navigate = useNavigate();
  const [Data, setData] = useState({});
  console.log(Data);

  const Header = ["Institute Name ", "Logo", "no. of Campus", "Status"];

  let getTask = () => {
    fbGet("instituteform")
      .then((res) => {
        console.log(Object.values(res));
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
      <Table label="Institutelist" header={Header} datasource={Data} />
      <BAbutton
        label="Add"
        onClick={() => {
          navigate("/instituteform");
        }}
      />
    </>
  );
}
