import React from 'react'

const ProjectDetails = (props) => {
  
  const id = props.match.params.id

  return (
    <div className="container section project-details">
      <div className="card z-depht-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ea deleniti quia quidem eligendi aliquid, in accusantium, necessitatibus officiis porro omnis praesentium voluptatibus quibusdam molestiae adipisci quos. Dignissimos, repudiandae! Et?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Sebastian Rodriguez</div>
          <div>12th March, 1am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails