import { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    { id: 1, name: 'E-commerce', tech: 'React' },
    { id: 2, name: 'Dashboard', tech: 'React, Node.js' },
    { id: 3, name: 'API REST', tech: 'Express, MongoDB' }
  ]);

  return (
    <div>
      <h2>Proyectos Realizados</h2>
      {projects.map(project => (
        <div key={project.id} style={{border: '1px solid #ccc', padding: '1rem', margin: '1rem 0'}}>
          <h3>{project.name}</h3>
          <p>Tecnologías: {project.tech}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
