import React from "react";
import { UnDrawNoData } from "../../assets";

export default class FetchDataUser extends React.Component {
  componentDidMount() {
    document.title = "Loading...";
  }

  componentDidUpdate() {
    document.title = "Loading...";
  }

  render(): JSX.Element {
    return (
      <div >
        <img src={UnDrawNoData} alt="No Data" />
        <div>
          <div />
        </div>
      </div>
    );
  }
}
