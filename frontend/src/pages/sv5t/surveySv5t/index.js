import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import ProfileSV5T, { DataKey as ProfileDataKey } from './profile'
import HocTapTotSV5T, { DataKey as HocTapTotDataKey } from './hocTapTot'
import DaoDucTotSV5T, { DataKey as DaoDucTotDataKey } from './daoDucTot'
import TheLucTotSV5T, { DataKey as TheLucTotDataKey } from './theLucTot'
import TinhNguyenTotSV5T, { DataKey as TinhNguyenTotDataKey } from './tinhNguyenTot'
import HoiNhapTotSV5T, { DataKey as HoiNhapTotDataKey } from './hoiNhapTot'
import { useEffect } from 'react';

const surveySv5tContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem',
    borderRadius: '1vw',
    background: 'rgba(230,210,160,0.3)',
    boxShadow: '4px 4px rgb(166,86,20)'
}

const MODAL_ACTION = {
    RESET: 'RESET',
    SUBMIT: 'SUBMIT'
}

export default function SurveySV5T() {

    const [activePageNumber, setActivePageNumber] = useState(1);
    let items = [
        <ProfileSV5T />,
        <DaoDucTotSV5T />,
        <HocTapTotSV5T />,
        <TheLucTotSV5T />,
        <TinhNguyenTotSV5T />,
        <HoiNhapTotSV5T />,
    ];
    const AllPages = []
    for (let number = 1; number <= items.length; number++) {
        AllPages.push(
            <Pagination.Item key={number} active={number === activePageNumber} onClick={() => setActivePageNumber(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const [activePage, setActivePage] = useState(<ProfileSV5T />);

    useEffect(() => {
        setActivePage(items[activePageNumber - 1])
    }, [activePageNumber]);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleShowResetModal = () => {
        setModalMessage('Bạn có chắc chắn muốn nhập lại dữ liệu? Lưu ý: Dữ liệu hiện tại sẽ bị xóa!');
        setModalAction(MODAL_ACTION.RESET);
        setShowModal(true)
    }

    const handleShowSubmitModal = () => {
        setModalMessage('Bạn có chắc chắn muốn nộp thông tin đăng ký? Lưu ý: Sau khi nộp, bạn sẽ không thể thay đổi thông tin. Mọi thắc mắc xin liên hệ với fanpage của Đoàn - Hội Khoa Công nghệ Thông tin để được hỗ trợ!');
        setModalAction(MODAL_ACTION.SUBMIT);
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleAction = () => {
        if (modalAction === MODAL_ACTION.RESET) {
            resetData()
            window.location.reload()
        } else if (modalAction === MODAL_ACTION.SUBMIT) {
            submitData()
        }
        setShowModal(false)
    }

    const submitData = () => {
        // call API to submit data
        const profile = JSON.parse(localStorage.getItem(ProfileDataKey))
        const daoDucTot = JSON.parse(localStorage.getItem(DaoDucTotDataKey))
        const hocTapTot = JSON.parse(localStorage.getItem(HocTapTotDataKey))
        const theLucTot = JSON.parse(localStorage.getItem(TheLucTotDataKey))
        const tinhNguyenTot = JSON.parse(localStorage.getItem(TinhNguyenTotDataKey))
        const hoiNhapTot = JSON.parse(localStorage.getItem(HoiNhapTotDataKey))

        fetch('https://sv5t2023-add-zynfzilxmq-uc.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                profile: profile,
                daoDucTot: daoDucTot,
                hocTapTot: hocTapTot,
                theLucTot: theLucTot,
                tinhNguyenTot: tinhNguyenTot,
                hoiNhapTot: hoiNhapTot,
                mssv: profile['MSSV']
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log('Response:', response)

                if (response.success === true) {
                    setToastMessage('Đã lưu dữ liệu thành công!')
                    setShowToast(true)
                } else {
                    setToastMessage('Đã có lỗi xảy ra! Vui lòng thử lại sau.')
                    setShowToast(true)
                }
            })
    }

    const resetData = () => {
        localStorage.removeItem(ProfileDataKey)
        localStorage.removeItem(DaoDucTotDataKey)
        localStorage.removeItem(HocTapTotDataKey)
        localStorage.removeItem(TheLucTotDataKey)
        localStorage.removeItem(TinhNguyenTotDataKey)
        localStorage.removeItem(HoiNhapTotDataKey)
        setToastMessage('Đã xóa dữ liệu thành công!')
        setShowToast(true)
    }

    return (
        <div>
            <div className='row m-2 p-2'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <button className='btn btn-secondary' style={{ width: '10vw' }} onClick={handleShowResetModal}>Nhập lại</button>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <button className='btn btn-primary' style={{ width: '10vw' }} onClick={handleShowSubmitModal}>Hoàn thành</button>
                </div>
            </div>

            <div style={surveySv5tContainer}>
                {activePage}
            </div>

            {/* Pagination */}
            <Pagination size="lg" className='d-flex justify-content-center p-3'>{AllPages}</Pagination>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{modalMessage}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Đóng</Button>
                    <Button variant="primary" onClick={handleAction}>OK</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast */}
            <ToastContainer
                className="p-3"
                position={'bottom-end'}
                style={{ zIndex: 10 }}
            >
                <Toast show={showToast} onClose={() => setShowToast(false)} 
                    className="d-inline-block m-1 text-primary" bg='light' 
                    delay={3000} autohide>
                    <Toast.Header className='bg-primary text-white'>Thông báo</Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>

        </div>
    )

}
