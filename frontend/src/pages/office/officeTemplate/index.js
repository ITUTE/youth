import React from 'react'
import SideBar from '../sidebar'
import styles from '../index.module.scss'
import OfficeBreadcrumb from '../officeBreadcrumb'
import OfficeTemplateData from './data'
import '../office.scss'

function OfficeTemplate() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className="office-workspace">
                <OfficeBreadcrumb
                    currentField="Biểu mẫu"
                    description="Các mẫu biểu sử dụng trong công tác Đoàn - Hội Khoa Công nghệ Thông tin"
                />
                <div className="office-content">
                    <OfficeTemplateData />
                </div>
            </div>
        </div>
    )
}

export default OfficeTemplate
