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
      <div className="fetch_data_user">
        <img src={UnDrawNoData} alt="No Data" />
        <div className="fetch_data_user_bar_process">
          <div className="fetch_data_user_bar_process_nested" />
        </div>
      </div>
    );
  }
}
