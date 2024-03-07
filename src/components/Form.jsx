import React from "react";
import "./form.css";

const variants = ["notice", "warning", "success", "error"];

const Form = ({ toast, updateToast, visibleToast }) => {
  // console.log(toast);
  const { msg, variant } = toast;

  let themeColor = {
    notice: "blue",
    warning: "orange",
    success: "green",
    error: "error",
  };

  function generateToast(e) {
    e.preventDefault();
    console.log({ msg }, { variant });
  }

  return (
    <div className="form-container">
      <form onSubmit={generateToast}>
        {/* Text input */}
        <div className="textarea-container">
          <label htmlFor="msg">Message</label>
          <textarea
            type="text"
            id="msg"
            name="msg"
            value={msg}
            onChange={updateToast}
          />
        </div>

        {/* radio buttons for variants */}
        <div className="variants-container">
          <p>Variants : </p>
          <div className="radiobtns-container">
            {variants.map((item, index) => {
              const isChecked = variant === item;
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="variant"
                    id={item}
                    value={item}
                    onChange={updateToast}
                    checked={isChecked}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/* End of radio Variants section */}

        <button>Generate Toast</button>
      </form>
    </div>
  );
};

export default Form;

//
{
  /* <div>
<input
name="variants"
type="radio"
id="notice"
value={"notice"}
/>
<label htmlFor="notice">notice</label>
</div>

<div>
<input
name="variants"
type="radio"
id="warning"
value={"warning"}
required
/>
<label htmlFor="warning">warning</label>
</div>
<div>
<input
name="variants"
type="radio"
id="success"
value={"success"}
/>
<label htmlFor="success">success</label>
</div>

<div>
<input type="radio" name="variants" id="error" value={"error"} />
<label htmlFor="error">error</label>
</div> */
}
