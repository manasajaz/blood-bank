import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { fbAuth } from "../config/firebsemethod";
import img1 from "../asset/img1.gif";

export default function Protected(props) {
  const { Screen } = props;

  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  let checkAuth = () => {
    setLoader(true);

    fbAuth()
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/login");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
      <img src={img1} alt="" />
    </>
  ) : (
    <>
      <Screen />
    </>
  );
}
