import React from 'react'
import styles from './index.module.scss'

export default function SV5T() {

    return  (
        <div styles={styles.padlet}>
            <div styles={{margin: 0, padding: 0, top: '100px'}}>
                <iframe title='feedback' className='w-100' style={{height: '100vh'}} src="https://itute.github.io/SV5T" frameBorder="0" allow="camera;microphone;geolocation">
                </iframe>
            </div>           
        </div>
    )
    
}
