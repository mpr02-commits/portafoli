import { useState } from 'react';

function Projects() {
  const [projects] = useState([
    { id: 1, name: 'E-commerce React', client: 'TechStore', status: 'Completado' },
    { id: 2, name: 'Dashboard Analytics', client: 'DataCorp', status: 'En desarrollo' },
    { id: 3, name: 'API REST', client: 'StartUp API', status: 'Completado' },
    { id: 4, name: 'App Móvil', client: 'HealthPlus', status: 'Planificado' }
  ]);
  
  const [filter, setFilter] = useState('todos');
  
  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.status.includes(filter));
  
  return (
    <div className='page-container'>
      <h2> Nuestros Proyectos</h2>
      <p>Estos son algunos de los proyectos que hemos desarrollado para nuestros clientes:</p>
      
      <div style={{margin: '1.5rem 0'}}>
        <button onClick={() => setFilter('todos')}>Todos</button>
        <button onClick={() => setFilter('Completado')}>Completados</button>
        <button onClick={() => setFilter('desarrollo')}>En desarrollo</button>
      </div>
      
      {filteredProjects.map(project => (
        <div key={project.id} className='project-card'>
          <h3>{project.name}</h3>
          <p><strong>Cliente:</strong> {project.client}</p>
          <p><strong>Estado:</strong> <span style={{
            color: project.status === 'Completado' ? 'green' : 
                   project.status === 'En desarrollo' ? 'orange' : 'gray'
          }}>{project.status}</span></p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
