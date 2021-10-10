import React from "react";
//import { AuthState } from '../../module'
//import { useAuth } from '../context'
export default function Splash() {
  //const auth: AuthState = useAuth();
  return <div>{process.env.REACT_APP_API_KEY}</div>;
}
