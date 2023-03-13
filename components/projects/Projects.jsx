import React from 'react';
import Project from './Project';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1>SELECTED PROJECTS</h1>
      <Project />
    </section>
  )
}
