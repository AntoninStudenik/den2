import React, { useState } from "react";
import "./app.css";
import FormInputs from "./components/FormInputs";

const App = () => {
  const [username, setUsername] = useState("");
  const usernameRef = useRef();
  console.log(usernameRef);

  console.log("re-rendered");
  return (
    <div className="app">
      <form>
        <FormInputs refer ={usernameRef} placeholder="Username" setUsername={setUsername} />
        <FormInputs placeholder="Email" />
        <FormInputs placeholder="Full Name" />
        <FormInputs placeholder="Sth else" />
        <button>Sumit</button>
      </form>
    </div>
  );
};

export default App;