import React from 'react'
import styles from './index.module.scss'

export default function Feedback() {

    return  (
        <div styles={styles.padlet}>
            <div styles={{margin: 0, padding: 0, top: '100px'}}>
                <iframe title='feedback' className='w-100' style={{height: '100vh'}} src="https://padlet.com/embed/dljssv8mauksx2bq" frameBorder="0" allow="camera;microphone;geolocation">
                </iframe>
            </div>
           
        </div>
    )
    
}
