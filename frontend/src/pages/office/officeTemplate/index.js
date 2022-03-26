import React from 'react'
import SideBar from '../sidebar'
//import Body from './body'
import styles from '../index.module.scss'
import OfficeBreadcrumb from '../officeBreadcrumb'
import OfficeTemplateData from './data'
import '../office.scss'

function OfficeTemplate() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className="office-workspace">
                <OfficeBreadcrumb currentField={"Biểu mẫu"} />
                <div className="office-content">
                    <OfficeTemplateData />
                </div>
            </div>
        </div>
    )
}

export default OfficeTemplate
