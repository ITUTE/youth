import React from 'react'
import SideBar from '../sidebar'
//import Body from './body'
import styles from '../index.module.scss'
import OfficeBreadcrumb from '../officeBreadcrumb'
import OfficeDocumentData from './OfficeDocumentData'
import '../office.scss'

function OfficeDocument() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className="office-workspace">
                <OfficeBreadcrumb currentField={"Văn bản"} />
                <div className="office-content">
                    <OfficeDocumentData />
                </div>
            </div>
        </div>
    )
}

export default OfficeDocument
