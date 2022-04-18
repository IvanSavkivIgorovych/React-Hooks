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

function ComponentTwo() {
  return (
    <>
      <h1>Component #2</h1>
      <ComponentThree />
    </>
  );
}

function ComponentThree() {
  return (
    <>
      <h1>Component #3</h1>
      <ComponentFour />
    </>
  );
}

function ComponentFour() {
  return (
    <>
      <h1>Component #4</h1>
      <ComponentFive />
    </>
  );
}

function ComponentFive() {
  const user = useContext(MyContext);

  return (
    <>
      <h1>Component #5</h1>
      <h2>{`Hello, ${user} one more time)))`}</h2>
    </>
  );
}

ReactDOM.render(<ComponentOne />, document.getElementById("root"));
