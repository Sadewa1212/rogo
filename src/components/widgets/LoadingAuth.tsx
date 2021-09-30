import React from "react";
import { UnDrawSynchronize } from "../../assets";

export default class LoadingAuth extends React.Component<any> {
  render() {
    return (
      <div >
        <img src={UnDrawSynchronize} alt="Loading" />
      </div>
    );
  }
}
