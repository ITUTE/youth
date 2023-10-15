import React from 'react'
import styles from './index.module.scss'

export default function SV5T() {

    return  (
        <div styles={styles.padlet}>
            <div>
                <iframe title='sv5t' className='w-100' style={{height: '100vh'}} src="https://itute.github.io/SV5T">
                </iframe>
            </div>           
        </div>
    )
    
}
