import { fbAdd, fbGet, fbLogout } from "../../config/firebsemethod";
import BAinput from "../../component/input";
import BAbutton from "../../component/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Quiz() {
  const [model, setModel] = useState({});
  const [Question, setQuestion] = useState({});
  const [questionlist, setquestionlist] = useState([]);
  const [Option, setOption] = useState("");
  const [Optionlist, setOptionlist] = useState([]);
  const [CorrectOption, setCorrectOption] = useState("");
  const [disable, setdisable] = useState(false);
  const [Tasklist, setTaskList] = useState([]);

  const navigate = useNavigate();

  const addOption = () => {
    Optionlist.push(Option);
    setOptionlist([...Optionlist]);
    setOption("");
  };

  const addQuestion = () => {
    // Question.question = { ...Question };
    Question.options = [...Optionlist];
    Question.correctAns = CorrectOption;
    questionlist.push(Question);
    setquestionlist([...questionlist]);

    Optionlist.push(Option);
    setOptionlist([...Optionlist]);

    setCorrectOption("");
    setOptionlist([]);
    setQuestion({ question: "" });
  };

  const lockQuiz = () => {
    setdisable(true);
  };

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const fillQuestion = (key, val) => {
    Question[key] = val;
    setQuestion({ ...Question });
  };

  let addTask = () => {
    console.log(model);
    // ye smjh nhi aye line ///
    model.questionlist = [...questionlist];
    fbAdd("quiz", model)
      .then((res) => {
        console.log(res);
        getTask();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getTask = () => {
    fbGet("quiz")
      .then((res) => {
        console.log(res);
        // setTaskList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut = () => {
    fbLogout().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4">
        <div className="p-10 ">
          {/* <div className="mb-5">html</div>
          <div className="mb-5">css</div>
          <div className="mb-5">js</div> */}

          <div>
            <BAbutton label="logout" onClick={logOut} />
          </div>
        </div>

        <div className="p-10 col-span-3">
          <div className="flex justify-between items-center mb-5">
            <h1>quiz app </h1>
            <BAbutton label="Save" onClick={addTask} />
          </div>

          <div className="grid grid-cols-3">
            <div className="mb-5">
              <BAinput
                value={model.name}
                onChange={(e) => {
                  fillModel("name", e.target.value);
                }}
                label="Name"
              />
            </div>
            <div className="mb-5">
              <BAinput
                value={model.duration}
                onChange={(e) => {
                  fillModel("duration", e.target.value);
                }}
                label="duration"
              />
            </div>
            <div className="mb-5">
              <BAinput
                value={model.secretkey}
                onChange={(e) => {
                  fillModel("secret key", e.target.value);
                }}
                label="secret key"
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="mb-5">
              <BAinput
                value={model.Quizopen}
                onChange={(e) => {
                  fillModel("Quiz open", e.target.value);
                }}
                label="Quiz open"
              />
            </div>
            <div className=" col-span-2">
              <div className="mb-5">
                <BAinput
                  value={model.description}
                  onChange={(e) => {
                    fillModel("description", e.target.value);
                  }}
                  label="description"
                />
              </div>
            </div>
            <div className="mb-5">
              <BAbutton
                label="Lock Quiz"
                onClick={lockQuiz}
                value={disable ? "Unlock" : "Lock"}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className=" col-span-3">
              <div className="mb-5">
                <BAinput
                  value={Question.question}
                  onChange={(e) => {
                    fillQuestion("question", e.target.value);
                  }}
                  label="question"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mb-5 ">
              <BAinput
                value={Option}
                onChange={(e) => {
                  setOption(e.target.value);
                }}
                label="Option"
              />
            </div>
            <div className="mb-5">
              <BAbutton onClick={addOption} label="Add Option" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="p-2">
              {Optionlist.map((x, i) => (
                <div key={i}>
                  <button
                    className="btn w-100 btn-primary mb-1"
                    onClick={() => setCorrectOption(x)}
                  >
                    {x}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-2">
              {CorrectOption && (
                <button className="btn w-100 btn-danger">
                  {CorrectOption}
                </button>
              )}
            </div>
          </div>
          <BAbutton onClick={addQuestion} label="Add Question" />
        </div>

        {/* <div>
          {Tasklist.map((x, i) => (
            <div key={i}>
              <p>{x.question}</p>
              {x.options.map((option, optionIndex) => (
                <button key={optionIndex}>{option}</button>
              ))}
            </div>
          ))}
        </div> */}

        <div className="mt-5">
          {questionlist.map((x, index) => (
            <div key={index}>
              <p> {x.question}</p>
              <div>
                {x.options.map((option, optionIndex) => (
                  <button
                    className="btn w-100 btn-primary mb-1"
                    key={optionIndex}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
