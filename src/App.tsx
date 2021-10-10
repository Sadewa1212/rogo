import React from "react";
// import { AuthProvider, NotFound, RouterApp } from "./components";
import "./sass/_main.scss";
import './css/style.css'
import { NotFound } from "./components";

function App() {
  return (
    <React.Fragment>
      {/* <AuthProvider>
        <RouterApp />
      </AuthProvider> */}
      <NotFound />
    </React.Fragment>
  );
}

export default App;
