import React from "react";
import './App.css';
import Header from "./header.js";
import SideBar from "./sidebar.js";
import Feed from "./feed.js";
import Widgets from "./widgets.js";
import Login from "./Login.js";
import {useStateValue} from "./StateProvider";


function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
       {!user ? (
         <Login />
       ) : (
         <>
          <Header />

          <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />
          
          </div>
          </>
       )}
      
    </div>
  );
}

export default App;
