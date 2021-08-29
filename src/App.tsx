import React from "react";
import { AuthProvider, RouterApp } from "./components";
import "./sass/_main.scss";
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
