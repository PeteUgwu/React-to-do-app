import React from "react"
import ReactDom from "react-dom"

//stylesheet
import "./functionBased/App.css"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

ReactDom.render( <React.StrictMode><TodoContainer /></React.StrictMode> , document.getElementById("root")
)