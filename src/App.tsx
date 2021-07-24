import React from 'react';
import { AuthContext, Router } from './component';
function App() {
  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;
