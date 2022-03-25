import React from 'react'
import SideBar from '../sidebar'
//import Body from './body'
import styles from '../index.module.scss'

function Office() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div>Văn bản</div>
        </div>
    )
}

export default Office
