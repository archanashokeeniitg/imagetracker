import React, { useEffect, useState } from "react";
import "./App.css";

//amplify exports
import Amplify, { Auth, Hub } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

//components imports
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

Amplify.configure(awsExports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(45deg, #51547e 30%, #0a3f74 90%)";

    //finding and setting loggedin User
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, []);

  return (
    <AmplifyAuthenticator style={{ textAlign: "center" }}>
      <div className="App">
        {user ? <Header user={user} /> : null}
        <Footer />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";

// //amplify exports
// import { Amplify, Auth } from "aws-amplify";
// import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import awsExports from "./aws-exports";

// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";

// Amplify.configure(awsExports);
// Auth.configure(awsExports);

// function App() {
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     document.body.style.background =
//       "linear-gradient(45deg, #51547e 30%, #0a3f74 90%)";
//   }, []);
//   return (
//     <AmplifyAuthenticator style={{ textAlign: "center" }}>
//       <div className="App">
//         <row>
//           <Header />
//         </row>
//         Hello I'm clean!!
//         <Footer />
//       </div>
//     </AmplifyAuthenticator>
//   );
// }

// export default App;

// // import React, { useEffect } from "react";
// // import "./App.css";

// // //amplify exports
// // import Amplify from "aws-amplify";
// // import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// // import awsExports from "./aws-exports";

// // Amplify.configure(awsExports);

// // function App() {
// //   useEffect(() => {
// //     document.body.style.background =
// //       "linear-gradient(45deg, #51547e 30%, #0a3f74 90%)";
// //   }, []);
// //   return (
// //     <AmplifyAuthenticator style={{ textAlign: "center" }}>
// //       <div className="App">Hello I'm clean!!</div>
// //     </AmplifyAuthenticator>
// //   );
// // }

// // export default App;

// // // import logo from "./logo.svg";
// // // import "./App.css";
// // // import Amplify from "aws-amplify";
// // // import awsExports from "./aws-exports";
// // // Amplify.configure(awsExports);

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;
