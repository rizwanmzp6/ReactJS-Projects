// Index.js

import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class DynamicForm extends Component {
  constructor(props) {
    super(props)
  }

  renderForm = () => {
    let model = this.props.model
    let formUI = model.map((m) => {
      return (
        <div key={m.key}>
          <label>{m.label}</label>
          <input type={m.type} {...m.props} />
        </div>
      )
    })
    return formUI
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={() => this.onSubmit()}>
          {this.renderForm()}
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

//App.js.......................................


import React, { Component } from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'

class App extends Component {
  render() {
    return (
      <div>
        <DynamicForm
          title='Registration'
          model={[
            { key: 'name', label: 'Name', props: { required: true } },
            { key: 'age', label: 'Age', type: 'number' },
            {
              key: 'rating',
              label: 'Rating',
              type: 'number',
              props: { min: 0, max: 5 },
            },
            { key: 'qualification', label: 'Qualification' },
          ]}
        />
      </div>
    )
  }
}

export default App