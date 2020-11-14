import React from "react";
import Hero from "./Hero";

export default function Main() {
  return (
    <>
      <div className="col-1"></div>
      <div className="col-10">
        <Hero />
      </div>
      <div className="col-1"></div>
    </>
  );
}
