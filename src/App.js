import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="app min-h-screen bg-blue-500 text-white">
      <header className="p-4">
        <img className="opacity-75" src={logo} alt="React Logo" width="50" />
        <h1 className="text-2xl lg:text-4xl ml-2">Admin Panel</h1>
      </header>

      <main className="flex flex-col items-center justify-center h-full">
        <div className="mb-10 grid grid-cols-3 w-1/2 mx-auto">
          <img className="opacity-75" src={logo} alt="React Logo" width="150" />
          <img
            className="col-span-2 row-span-2 animate-spin m-auto"
            style={{ animationDuration: "30s" }}
            src={logo}
            alt="React Logo"
            width="150"
          />
          <img className="opacity-75" src={logo} alt="React Logo" width="150" />
        </div>

        <h1 className="text-2xl lg:text-4xl mb-6">Welcome, Admin!</h1>

        <div className="grid grid-cols-2 gap-4">
          <MaterialButton
            text="User Management"
            url="#"
            color="bg-indigo-500"
            hoverColor="hover:bg-indigo-400"
          />
          <MaterialButton
            text="Settings"
            url="#"
            color="bg-teal-500"
            hoverColor="hover:bg-teal-400"
          />
        </div>
      </main>
    </div>
  );
}

function MaterialButton({ text, url = "#", color, hoverColor }) {
  return (
    <a
      href={url}
      className={`py-3 px-6 ${color} ${hoverColor} text-white block rounded text-center shadow-md hover:cursor-pointer leading-snug text-sm transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
