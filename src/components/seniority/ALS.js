import React from "react";
import Table from "../common/Table";
import SeniorityLinks from "./SeniorityLinks";

export default function ALS() {
  return (
    <>
      <div className="col-1">
        <SeniorityLinks />
      </div>
      <div className="col-10">
        <div className="container">
          <h1 className="text-center">ALS</h1>
          <Table />
        </div>
      </div>
      <div className="col-1"></div>
    </>
  );
}
