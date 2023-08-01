// // App.js
// import React from "react";
// import { ThemeProvider } from "./ThemeContext";
// import Header from "./Header";

// const App = () => {
//   // let obj = {
//   //   name: "shahbaz",
//   // };
//   // // let user = Object.assign({}, obj);
//   // let user = { ...obj };
//   // user.name = "ramzan";
//   // console.log("obj", obj);
//   // console.log("user", user);

//   function Welcome() {
//     let name = "shahbaz";
//     let greetinginfo = function (message) {
//       console.log(message + " " + name);
//     };
//     return greetinginfo;
//   }
//   let foo = Welcome();
//   foo("welcome");
//   foo("hello Mr.");
//   return (
//     <ThemeProvider>
//       <div>
//         <Header />
//         {/* Other components */}
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;

import Form from "./Form";
import UseStateHook from "./UseStateHook";
import Counter from "./Counter";

function App() {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Hello</h1>
      <Form /> */}
      <UseStateHook />
      <Counter />
    </div>
  );
}

export default App;
