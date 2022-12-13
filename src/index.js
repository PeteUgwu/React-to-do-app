import React from "react"
import ReactDom from "react-dom"

//stylesheet
import "./App.css"

//component file
import TodoContainer from "./components/TodoContainer"

ReactDom.render( <React.StrictMode><TodoContainer /></React.StrictMode> , document.getElementById("root")
)