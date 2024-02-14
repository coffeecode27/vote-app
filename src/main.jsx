import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Appshell from "./components/layouts/Appshell/index.jsx";
import { RecoilRoot } from "recoil"; // panggil paket recoil yg telah di install
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Appshell>
        <App />
      </Appshell>
    </RecoilRoot>
  </React.StrictMode>
);
