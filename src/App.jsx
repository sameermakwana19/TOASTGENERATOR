import { useCallback, useEffect, useState } from "react";
import "./App.css";
import BackgroundImg from "./components/BackgroundImg";
import Form from "./components/Form";

const toastTiming = 3;
let backgroundColors = {
  notice: "rgb(5, 184, 197)",
  warning: "#f97316",
  success: "#65a30d",
  error: "#f43f5e",
};

function App() {
  const [visibleToast, setVisibleToast] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        setVisibleToast([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      return;
    }

    const id = setTimeout(() => {
      setTimer((prev) => prev - toastTiming);
      setVisibleToast((prev) => prev.slice(1));
    }, toastTiming * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [visibleToast]);

  const deleteToast = useCallback((e) => {
    // console.log(e.target.tagName === "I");

    if (e.target.tagName === "I") {
      const currentId = e.target.parentElement.dataset.id;

      // setVisibleToast((prev) => {
      //   const newArr = prev.filter((item) => {
      //     // console.log(item);
      //     return currentId !== item.id;
      //   });
      //   return newArr;
      // });
      setVisibleToast((prev) =>
        prev.filter((item) => {
          // console.log(item);
          return currentId !== item.id;
        })
      );

      setTimer((prev) => prev - toastTiming);
    }
  }, []);

  console.log({ visibleToast });
  console.log({ timer });

  return (
    <>
      <BackgroundImg />
      <h2>Toast Component</h2>
      <Form
        setVisibleToast={setVisibleToast}
        setTimer={setTimer}
        toastTiming={toastTiming}
      />

      <div className="toast-container" onClick={deleteToast}>
        {visibleToast.map(({ msg, variant, id }) => {
          return (
            <div
              key={id}
              data-id={id}
              className="toast"
              style={{
                background: `${backgroundColors[variant]}`,
              }}
            >
              {msg}
              <i className="fa-solid fa-xmark cross-icon"></i>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
