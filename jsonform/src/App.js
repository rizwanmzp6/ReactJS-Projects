import React from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'

const App = () => {
  return (
    <div>
      <DynamicForm
        className='app'
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
          { key: 'indian', label: 'Indian', type: 'checkbox' },
          {
            key: 'male',
            label: 'male',
            type: 'radio',
          },
          {
            key: 'female',
            label: 'female',
            type: 'radio',
          },
        ]}
      />
    </div>
  )
}

export default App
