export const createProject = (project) => {
  return (dispatch, getState) => {
    //make asyn call to backend
    dispatch({ type: 'CREATE_PROJECT', project: project})
  }
}