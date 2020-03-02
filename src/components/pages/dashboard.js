import React from "react";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  let history = useHistory();
  return (
    <div>
      dashboard
      <button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}
