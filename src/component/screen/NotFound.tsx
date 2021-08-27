import React from "react";
import { UnDrawPageNotFound } from "../../asset";
export default class NotFound extends React.Component<any, any> {
  componentDidMount(): void {
    document.title = "Page Not Found";
  }

  componentDidUpdate(): void {
    document.title = "Page Not Found";
  }

  render(): JSX.Element {
    return (
      <div className="not_found">
        <img src={UnDrawPageNotFound} alt="Page Not Found" />
        <p>Page Not Found</p>
      </div>
    );
  }
}
