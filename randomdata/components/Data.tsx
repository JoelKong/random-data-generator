import classes from "./data.module.css";
import { useState } from "react";
import { useEffect } from "react";

function Data() {
  const [user, setUser] = useState<any>("");
  const [count, setCount] = useState<number>(0);

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

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [user]);

  return !user ? (
    <>
      <div className={classes.count}>{"Number of Generations: " + count}</div>
      <section className={classes.section}>
        <button className={classes.button} onClick={generateData}>
          Generate Data
        </button>
      </section>
    </>
  ) : (
    <>
      <div className={classes.count}>{"Number of Generations: " + count}</div>
      <section className={classes.section2}>
        <img
          src={user.avatar}
          width={200}
          height={200}
          alt="avatar"
          className={classes.image}
        />
        <div className={classes.text}>
          {"Name: " + user.first_name + " " + user.last_name}
        </div>
        <div className={classes.text}>{"Email: " + user.email}</div>
        <button className={classes.button} onClick={generateData}>
          Generate Data
        </button>
      </section>
    </>
  );
}

export default Data;
