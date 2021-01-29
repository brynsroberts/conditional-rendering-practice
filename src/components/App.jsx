import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form title="Login"/> : <Form title="Register"/>}
    </div>
  );
}

export default App;
