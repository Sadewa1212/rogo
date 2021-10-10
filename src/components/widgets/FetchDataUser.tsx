import React from "react";

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
      
        <div>
          <div />
        </div>
      </div>
    );
  }
}
