import React from 'react'
import styles from'./index.module.scss'
import {ReactComponent as Reactlogo} from '../../../assets/IconSearch.svg'
export default function Header() {
    return [
        <div className={styles.header}>
            <span className={styles.homePage}> YOUTH FIT</span>
            <div className={styles.search}>
                <div className={styles.iconSearch}><Reactlogo /></div>
                <input type="text" name="seach" className={styles.input} placeholder="Nhập từ khóa"></input>
            </div>
             <div className={styles.container}> Trang chủ </div>
            <div className={styles.container}> Văn phòng điện tử </div>
            <div className={styles.container}> CLB/Đội/Nhóm  </div>
            <div className={styles.container}> SV5T</div>
            <div className={styles.container}> Hỗ trợ sinh viên </div>
            <div className={styles.container}> Vinh danh </div>
            <div className={styles.container}> Về chúng tôi </div>
        </div>
        
    ]
}
