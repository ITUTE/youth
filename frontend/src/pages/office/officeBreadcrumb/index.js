import React from 'react'
import { Link } from 'react-router-dom'
import styles from './officeBreadcrumb.module.scss'

export default function OfficeBreadcrumb({ currentField, description }) {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.breadcrumb}>
                    <Link to="/" className={styles.crumb}>Trang chủ</Link>
                    <span className={styles.sep}>/</span>
                    <Link to="/office" className={styles.crumb}>Văn phòng</Link>
                    <span className={styles.sep}>/</span>
                    <span className={styles.crumbActive}>{currentField}</span>
                </div>
                <h1 className={styles.title}>{currentField}</h1>
                {description && <p className={styles.desc}>{description}</p>}
            </div>
        </div>
    )
}
