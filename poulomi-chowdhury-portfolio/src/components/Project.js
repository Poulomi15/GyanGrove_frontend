// components/Project.js
import React from 'react';

const Project = ({technologies }) => {
  return (
    <div className="project">
      <h3>Food Delivery Webapp</h3>
      <p>Designed and developed a user-friendly food delivery web application,
responsible for frontend and backend implementation,
database management, and deployment.</p>
      <p>Technologies used: {technologies}Django,HTML,CSS,JavaScript</p>
      <div className="project-links">

      </div>
    </div>
  );
};

export default Project;
