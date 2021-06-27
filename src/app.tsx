import React from "react";
import {TopPage, WhoAmI, Logo, Drawings, ContactMe} from "./styles/app";
import logo from "./styles/assets/Ana.png";


const App = (): JSX.Element => {
  return(
    <>
      <TopPage>
        <Logo src={logo}/>
      </TopPage>
      <WhoAmI></WhoAmI>
      <Drawings/>
      <ContactMe/>
    </>
    );
}

export default App;

