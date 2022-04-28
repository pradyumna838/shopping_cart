import React from "react";

export default function Dashboard() {
  return (
    <>
      <main id="main" className="main d-flex float-left">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
      </main>
    </>
  );
}
