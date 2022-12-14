import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render( <React.StrictMode><BrowserRouter><TodoContainer /> </BrowserRouter> </React.StrictMode>
)
