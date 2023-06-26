// App.js
import React from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";

const App = () => {
  const user = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>My App</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
};

export default App;
