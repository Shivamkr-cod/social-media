import Header from "./component/store/header";
import Footer from "./component/store/footer";
import Sidebar from "./component/store/sidebar";
import Postlist from "./component/store/postlist";
import Createpost from "./component/store/Createpost";
import Postlistprovider from "./store/postliststore";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedtab,setselectedtab]=useState("Home")
  return (
    <Postlistprovider>
      <div className="main">
      <Sidebar selectedtab={selectedtab}
      setselectedtab={setselectedtab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedtab=="Home" ? (
           <Postlist></Postlist>
        ) :(
            <Createpost></Createpost>
        ) }
       
       
        <Footer></Footer>
      </div>
    </div>
    </Postlistprovider>
  );
}

export default App;
