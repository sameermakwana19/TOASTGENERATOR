import { useState } from "react";
import "./App.css";
import BackgroundImg from "./components/BackgroundImg";
import Form from "./components/Form";

function App() {
  const [toast, setToast] = useState({
    msg: "Demo Toast",
    variant: "notice",
  });
  // console.log(toast);
  const visibleToast = useState([]);

  const updateToast = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log({ name }, { value });
    setToast((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <BackgroundImg />
      <h2>Toast Component</h2>
      <Form
        toast={toast}
        updateToast={updateToast}
        visibleToast={visibleToast}
      />
    </>
  );
}

export default App;
