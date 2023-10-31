import React, { useReducer } from "react";
import Forms from "./components/Forms";
import contextTodo from "./components/context/context";
import reducer from "./components/context/reducer";
import DisplayNotes from "./components/DisplayNotes";

function App(){

  const [todos, dispatch] = useReducer(reducer, [])
  console.log(useReducer(reducer, []))

  return(
    <contextTodo.Provider value ={{todos, dispatch}}>

    
    <>
    <h1 className="flex flex-col sm:flex-row sm:items-center sm:text-xl mx-auto justify-center text-3xl p-3 m-2 font-bold text-center font-mono">My Notes</h1>
    <Forms />
    </>

    </contextTodo.Provider>
  );
}

export default App;