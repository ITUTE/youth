import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import styles from './index.module.scss'

function MarkHome({ title, index }) {
    return (
        <div className={styles.header}>
            <h4 className={styles.header__title}>{title}</h4>
            {/* <MDBBtn outline className={styles.header__btn}>
                Xem thêm
            </MDBBtn> */}
        </div>
    )
}

export default MarkHome
