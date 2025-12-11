import { useState } from "react";

export default function Projects() {
  const [projects] = useState([
    { name: "Proyecto 1", desc: "Descripción del proyecto 1" },
    { name: "Proyecto 2", desc: "Descripción del proyecto 2" },
  ]);

  return (
    <div>
      <h1>Mis proyectos</h1>
      {projects.map((p, index) => (
        <div key={index}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}