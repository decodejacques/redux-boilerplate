import ReactDOM from "react-dom"
import "./main.css"
import { connect, Provider } from "react-redux"
import { createStore } from "redux"
import React, { Component } from "react"

let reducer = function(state, action) {
  return state // Needed because react-redux calls your reducer with an @@init action
}

const store = createStore(
  reducer,
  { todos: [] }, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World!</div>
  </Provider>,
  document.getElementById("root")
)
