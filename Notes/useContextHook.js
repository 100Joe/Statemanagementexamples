// This allows you to move components around to multiple components. The Context hook is made up of 3 key things a Context file, a Provider file, and wrapping the App.js return with the provider. If you are only using the state data in one component use the useState hook.

// Code example 

// Context file
// import { createContext } from "react";      how to import the context hook
// export const Context = createContext();    how to export the context hook
//--------------------------------------------------------------------------------------------------
// Provider file 
// import { useState } from "react";    Context utilizes useState
// import { Context } from "./Context";  Importing the Context file

// export const Provider = ({ children }) => {       Accessing the Children props
//   const [numberOfClicks, setNumberOfClicks] = useState(0);     setting the state data details

//   const increment = incrementBy => {                     function to manipulate the state
//     setNumberOfClicks(numberOfClicks + incrementBy);     manipulating the state
//   }

//   return (
//   Context.provider with an attribute of value. Value is all of the state data you want to utilize elsewhere.
//     <Context.Provider value={{ numberOfClicks, increment }}> 
      // {children}             Calling the children props inside of the context.provider return.
//     </Context.Provider>
//   )
// }
// -----------------------------------------------------------------------------------------------------
// using Context hook 
// import {useContext} from 'react'; importing the context hook
// import { Context } from "./Context";  Importing the Context file
// const { numberOfClicks, increment, } = useContext(Context);   this is an object not an array the information in here should match your values from the provider file. place the context file export inside of the useContext() to access it.
// -------------------------------------------------------------------------------------------------------
// App.js 
// import {Provider} from './Provider.js';   importing the Provider
// replace the div in the return with <Provider></Provider>    placing the provider in the app.js file