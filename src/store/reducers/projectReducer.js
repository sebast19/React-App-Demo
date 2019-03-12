const initState = {
  projects: [
    {id: '1', title: 'title 1', content: 'content here 1 ...'},
    {id: '2', title: 'title 2', content: 'content here 2 ...'},
    {id: '3', title: 'title 3', content: 'content here 3 ...'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created Project', action.project)
      break
    default:
      return state
  }

  return state

}

export default projectReducer