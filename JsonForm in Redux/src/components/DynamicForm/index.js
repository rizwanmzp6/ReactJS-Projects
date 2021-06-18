import React from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import '../../App.css'
import { useSelector } from 'react-redux'

const DynamicForm = () => {
  const data = useSelector((state) => state.data)
  const title = useSelector((state) => state.title)

  const renderForm = () => {
    let model = data
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
      <h1 className='button'>{title}</h1>
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
