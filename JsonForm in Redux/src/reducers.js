const initialState = {
  title: 'Registration',
  data: [
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
  ],
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default counterReducer
