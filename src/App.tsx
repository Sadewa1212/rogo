import React from 'react';
import { AuthProvider, Router } from './component';
function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
