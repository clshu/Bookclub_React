import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";


import Header from './components/Header';
import Main from './components/Main';
import SidePanel from './components/SidePanel';


import routes from './config/routes';



const app = document.getElementById('mainHtml');

ReactDOM.render(routes,app);
