import React from "react";
import { UnDrawOuterSpace } from "../../assets";
export default class NotFound extends React.Component<any, any> {
  title: string = "404 - Page Not Found";

  componentDidMount(): void {
    document.title = `${this.title}`;
  }

  componentDidUpdate(): void {
    document.title = `${this.title}`;
  }

  render(): JSX.Element {
    return (
      <div className="w-full py-6 md:py-24 bg-blue-400 justify-center items-center flex md:flex-row flex-col transition-all">
        <img
          src={UnDrawOuterSpace}
          alt="Page Not Found"
          className="object-contain h-96 px-2 xl:px-3 sm:hover:scale-105 sm:hover:mx-5 transition-all"
        />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-center font-extrabold text-2xl py-3 pt-3 text-white md:text-3xl">{`${this.title}`}</p>
          <a
            href="./"
            className="block rounded-md px-4 py-2 mt-0 font-extrabold text-center text-white bg-blue-600 opacity-100 outline-none hover:ring-2 hover:ring-offset-blue-600 active:bg-blue-700 sm:hover:bg-opacity-90 md:my-1"
          >
            Go Home &#8594;
          </a>
        </div>
      </div>
    );
  }
}
