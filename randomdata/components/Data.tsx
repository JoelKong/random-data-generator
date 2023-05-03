import classes from "./data.module.css";
import { useState } from "react";

function Data() {
  const [user, setUser] = useState("");

  async function generateData() {
    const data = await fetch(
      "https://random-data-api.com/api/v2/users?size=1is_json=true",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setUser(jsonData);
  }

  return !user ? (
    <section className={classes.section}>
      <button className={classes.button} onClick={generateData}>
        Generate Data
      </button>
    </section>
  ) : (
    <div>hi</div>
  );
}

export default Data;
