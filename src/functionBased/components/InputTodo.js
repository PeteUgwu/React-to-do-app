import React, { useState } from "react";

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = event => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert ("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text"
      placeholder="Add todo..." value={inputText.title}
      name="title" onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo