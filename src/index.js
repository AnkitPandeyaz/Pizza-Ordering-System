// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
// import "remixicon/fonts/remixicon.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css";
// import { AuthProvider } from "./context/AuthContext";
// import store from "./store/store";
// import { Provider } from "react-redux";

// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Provider store={store}>
//       <AuthProvider>
//         <App />
//         </AuthProvider>
//       </Provider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
