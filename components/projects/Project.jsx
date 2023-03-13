import React from 'react'
import Logos from '../logos/Logos'
import styles from './Projects.module.css'

export default function Project({ title }) {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      <div className={styles.imagePlaceholder}>
        image for project
      </div>
      <p>a brief description of the project</p>
      <Logos />
    </div>
  )
}
