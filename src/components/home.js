import React from "react";
import Parent from "./parent"
import Form from "./form"
import DebounceSearch from './Debounce';

const Home = () => {
    return (
      <div>  
        
         <Parent />
     <Form/>
     <DebounceSearch/>
      </div>    
    )}
    
 export default Home;