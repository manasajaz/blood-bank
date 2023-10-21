import { useState, useEffect } from "react";
import { fbGet } from "../../config/firebsemethod";

export default function Test() {
  const [data, setdata] = useState([]);

  let getTask = () => {
    fbGet("quiz")
      .then((res) => {
        console.log(res);
        setdata([...res]);
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
      <div>
        {data.map((x, i) => (
          <div key={i}>
            <p>{x.question}</p>
            {x.options.map((option, optionIndex) => (
              <button key={optionIndex}>{option}</button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
