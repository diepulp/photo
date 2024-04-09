import React from "react";

function env() {
  const db = process.env.NEO4J_PASSWORD;
  return (
    <div>
      <p>${db}</p>
    </div>
  );
}

export default env;
