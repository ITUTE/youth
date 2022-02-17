import React from 'react'
import banner from 'assets/loginBanner.png'

import styles from './index.module.scss'

export default function Login() {
    return (
        <div className="container">
            <img src={banner} alt="" className={styles.container} />
        </div>
    )
}
