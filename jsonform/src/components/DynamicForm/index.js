import React from 'react'
import '/Users/alpha/Desktop/jsonform/src/App.css'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'

const DynamicForm = (props) => {
  const renderForm = () => {
    let model = props.model
    let formUI = model.map((m) => {
      return (
        <div key={m.key} className='ctr'>
          <label className='lb'>{m.label}</label>
          <input className='rc' type={m.type} {...m.props} />
        </div>
      )
    })
    return formUI
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1 className='button'>{props.title}</h1>
      <form onSubmit={handleSubmit}>
        {renderForm()}
        <DateTimePickerComponent></DateTimePickerComponent>
        <button type='submit' className='button'>
          submit
        </button>
      </form>
    </div>
  )
}

export default DynamicForm
