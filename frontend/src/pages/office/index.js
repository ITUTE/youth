import React from 'react'
import SideBar from './sidebar/index'
//import Body from './body'
import styles from './index.module.scss'

function Office() {
    return (
        <div className={styles.container}>
            <SideBar />
        </div>
    )
}

export default Office
