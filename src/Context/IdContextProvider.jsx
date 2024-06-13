import React from "react";
import { useState } from "react";
import IdContext from "./IdContext";
const IdContextProvide =({children})=>{

    const [id,setId] =useState('');
    const [query,setQuery]=useState('')
    return(
        <IdContext.Provider value={{id,setId,query,setQuery}}>
            {children}
        </IdContext.Provider>

    );
}
export default IdContextProvide;