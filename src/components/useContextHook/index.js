import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

export const ComponentOne = () => {
  const [user, setUser] = useState("John Diere");

  return (
    <MyContext.Provider value={user}>
      <h1>{`Hello, ${user}!`}</h1>
      <ComponentTwo user={user} />
    </MyContext.Provider>
  );
};

export const ComponentTwo = () => {
  return (
    <>
      <h1>Component #2</h1>
      <ComponentThree />
    </>
  );
};

export const ComponentThree = () => {
  return (
    <>
      <h1>Component #3</h1>
      <ComponentFour />
    </>
  );
};

export const ComponentFour = () => {
  return (
    <>
      <h1>Component #4</h1>
      <ComponentFive />
    </>
  );
};

export const ComponentFive = () => {
  const user = useContext(MyContext);

  return (
    <>
      <h1>Component #5</h1>
      <h2>{`Hello, ${user} one more time)))`}</h2>
    </>
  );
};
