import { useState } from 'react';

function Projects() {
  const [projects] = useState([
    { 
      id: 1, 
      name: 'E-commerce React', 
      client: 'TechStore', 
      status: 'Completado',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    { 
      id: 2, 
      name: 'Dashboard Analytics', 
      client: 'DataCorp', 
      status: 'En desarrollo',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    { 
      id: 3, 
      name: 'API REST', 
      client: 'StartUp API', 
      status: 'Completado',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    },
    { 
      id: 4, 
      name: 'App Móvil', 
      client: 'HealthPlus', 
      status: 'Planificado',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    }
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
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
        {filteredProjects.map(project => (
          <div key={project.id} className='project-card' style={{overflow: 'hidden'}}>
            <div style={{
              height: '150px',
              backgroundImage: 'url(' + project.image + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px 8px 0 0'
            }}></div>
            <div style={{padding: '1.5rem'}}>
              <h3 style={{marginTop: 0}}>{project.name}</h3>
              <p><strong>Cliente:</strong> {project.client}</p>
              <p><strong>Estado:</strong> <span style={{
                color: project.status === 'Completado' ? 'green' : 
                       project.status === 'En desarrollo' ? 'orange' : 'gray',
                fontWeight: 'bold'
              }}>{project.status}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
