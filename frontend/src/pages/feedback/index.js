import clsx from 'clsx'
import SessionHeader from 'components/sessionHeader'
import {
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit'
import React from 'react'
import styles from './index.module.scss'
import logoYIT from '../../assets/YIT.png';
import { CONTACTS } from './contact'

export default function Feedback() {


    const address = {
        imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648229638/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/SV5T_-_2020_2021_esdmu8.png',
        title: 'ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN, TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TPHCM',
        content: 'Lầu 2, Trung tâm Tin học, Số 1, Võ Văn Ngân, Phường Linh Chiểu, Tp. Thủ Đức, Tp. Hồ Chí Minh'
    }

    return  (
        <div styles={styles.padlet}>
            <p styles={{margin: 0, padding: 0}}>
                <iframe className='w-100' style={{height: '90vh'}} src="https://padlet.com/embed/dljssv8mauksx2bq" frameBorder="0" allow="camera;microphone;geolocation">
                </iframe>
            </p>
           
        </div>
    )
    
}
