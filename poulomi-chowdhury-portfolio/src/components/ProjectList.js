
import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';
import Project from './Project';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data.slice(0, 1)); // Limiting to 5 projects for demo
    };
    getProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => (
        <Project key={project.id} title={project.title} body={project.body} />
      ))}
    </div>
  );
};

export default ProjectList;
