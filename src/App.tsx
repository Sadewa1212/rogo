import React from 'react';
import { AuthProvider, RouterApp } from './component';
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
