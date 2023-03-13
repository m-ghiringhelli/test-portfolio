import React from 'react'
import Logos from '../logos/Logos'
import styles from './Projects.module.css'

export default function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.imagePlaceholder}>
        image for project
      </div>
      <p>a brief description of the project</p>
      <Logos />
    </div>
  )
}
