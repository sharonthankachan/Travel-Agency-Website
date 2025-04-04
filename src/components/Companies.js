import React from 'react'
import styles from "../styles/Companies.module.scss"

const Companies = () => {
  return (
    <div className={styles.imgContainer}>
      <div><img alt='company1' src='images/company1.png' /></div>
      <div><img alt='company2' src='images/company2.png' /></div>
      <div><img alt='company3' src='images/company3.png' /></div>
      <div><img alt='company4' src='images/company4.png' /></div>
      <div><img alt='company5' src='images/company5.png' /></div>
    </div>
  )
}

export default Companies