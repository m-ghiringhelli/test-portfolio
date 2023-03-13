import React from 'react';
import Project from './Project';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Betwixt',
    },
    {
      title: 'TypeTune'
    }
  ];

  return (
    <section className={styles.projects}>
      <h1>SELECTED PROJECTS</h1>
      {projects.map((project) => (
        <Project key={project.title} title={project.title} />
      ))}
    </section>
  )
}
