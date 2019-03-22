import React from 'react'
import styles from './NotFound.module.css'

const NotFound = props => {
  return (
    <div className={styles.fourOfour}>
      <h1>404. Not Found</h1>
      <p>Please try going back to the previous page.</p>
    </div>
  )
}

export default NotFound