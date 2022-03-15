import React from 'react'
import styles from './styles.module.css'

export const Button = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} 
      ${
        props.type === 'shadow'
          ? styles.shadow
          : props.type === 'dotted'
          ? styles.dotted
          : props.type === 'double'
          ? styles.double
          : props.type === 'dashed'
          ? styles.dashed
          : props.type === 'textShadow'
          ? styles.textShadow
          : props.type === 'insetShadow'
          ? styles.insetShadow
          : props.type === 'textBorderShadow'
          ? styles.textBorderShadow
          : ''
      }
        ${props.className ? props.className : ''}`}
    >
      {props.text}
    </button>
  )
}
