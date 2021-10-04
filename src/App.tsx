import React from "react";
import { AuthProvider, RouterApp } from "./components";
import "./sass/_main.scss";
import './css/style.css'

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
