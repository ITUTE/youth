import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ProfileSV5T, { DataKey as ProfileDataKey } from './profile'
import HocTapTotSV5T, { DataKey as HocTapTotDataKey } from './hocTapTot'
import DaoDucTotSV5T, { DataKey as DaoDucTotDataKey } from './daoDucTot'
import TheLucTotSV5T, { DataKey as TheLucTotDataKey } from './theLucTot'
import TinhNguyenTotSV5T, { DataKey as TinhNguyenTotDataKey } from './tinhNguyenTot'
import HoiNhapTotSV5T, { DataKey as HoiNhapTotDataKey } from './hoiNhapTot'
import styles from './survey.module.scss'

const STEPS = [
    { label: 'Thông tin', key: 'profile' },
    { label: 'Đạo đức tốt', key: 'daoDuc' },
    { label: 'Học tập tốt', key: 'hocTap' },
    { label: 'Thể lực tốt', key: 'theLuc' },
    { label: 'Tình nguyện tốt', key: 'tinhNguyen' },
    { label: 'Hội nhập tốt', key: 'hoiNhap' },
]

const PAGES = [
    <ProfileSV5T />,
    <DaoDucTotSV5T />,
    <HocTapTotSV5T />,
    <TheLucTotSV5T />,
    <TinhNguyenTotSV5T />,
    <HoiNhapTotSV5T />,
]

const MODAL_ACTION = { RESET: 'RESET', SUBMIT: 'SUBMIT' }

export default function SurveySV5T() {
    const [step, setStep] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [modalAction, setModalAction] = useState('')
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastVariant, setToastVariant] = useState('success')

    const showNotif = (msg, variant = 'success') => {
        setToastMessage(msg)
        setToastVariant(variant)
        setShowToast(true)
    }

    const handleNext = () => { if (step < STEPS.length - 1) setStep(step + 1) }
    const handleBack = () => { if (step > 0) setStep(step - 1) }

    const handleShowReset = () => {
        setModalMessage('Bạn có chắc chắn muốn nhập lại dữ liệu? Lưu ý: Toàn bộ dữ liệu hiện tại sẽ bị xóa!')
        setModalAction(MODAL_ACTION.RESET)
        setShowModal(true)
    }

    const resetData = () => {
        ;[ProfileDataKey, DaoDucTotDataKey, HocTapTotDataKey, TheLucTotDataKey, TinhNguyenTotDataKey, HoiNhapTotDataKey]
            .forEach((k) => localStorage.removeItem(k))
        showNotif('Đã xóa toàn bộ dữ liệu thành công!')
        setStep(0)
        window.location.reload()
    }

    const submitData = async () => {
        const profile = JSON.parse(localStorage.getItem(ProfileDataKey))
        const payload = {
            profile,
            daoDucTot: JSON.parse(localStorage.getItem(DaoDucTotDataKey)),
            hocTapTot: JSON.parse(localStorage.getItem(HocTapTotDataKey)),
            theLucTot: JSON.parse(localStorage.getItem(TheLucTotDataKey)),
            tinhNguyenTot: JSON.parse(localStorage.getItem(TinhNguyenTotDataKey)),
            hoiNhapTot: JSON.parse(localStorage.getItem(HoiNhapTotDataKey)),
            mssv: profile?.MSSV,
        }

        try {
            const res = await fetch('https://sv5t2023-add-zynfzilxmq-uc.a.run.app', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            if (data.success === true) {
                showNotif('Đăng ký thành công! Cảm ơn bạn đã tham gia.')
                resetData()
            } else {
                showNotif(`Nộp thất bại: ${data.message || 'Vui lòng thử lại sau.'}`, 'danger')
            }
        } catch (err) {
            showNotif('Không thể kết nối đến máy chủ. Vui lòng kiểm tra mạng và thử lại.', 'danger')
        }
    }

    const handleConfirm = () => {
        setShowModal(false)
        if (modalAction === MODAL_ACTION.RESET) resetData()
        else if (modalAction === MODAL_ACTION.SUBMIT) submitData()
    }

    const isLastStep = step === STEPS.length - 1

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Đăng ký Sinh viên 5 tốt</h1>
                <p className={styles.pageSub}>Năm học 2024 – 2025 · Khoa Công nghệ Thông tin · HCMUTE</p>
            </div>

            <div className={styles.layout}>
                {/* Step sidebar */}
                <aside className={styles.stepSidebar}>
                    <p className={styles.stepSidebarLabel}>Các bước</p>
                    {STEPS.map((s, i) => (
                        <button
                            key={s.key}
                            className={`${styles.stepItem} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}
                            onClick={() => setStep(i)}
                        >
                            <span className={styles.stepNum}>
                                {i < step ? (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                ) : i + 1}
                            </span>
                            <span className={styles.stepLabel}>{s.label}</span>
                        </button>
                    ))}

                    <div className={styles.sidebarActions}>
                        <button className={styles.btnReset} onClick={handleShowReset}>
                            Nhập lại
                        </button>
                    </div>
                </aside>

                {/* Form content */}
                <div className={styles.formArea}>
                    <div className={styles.formCard}>
                        {PAGES[step]}
                    </div>

                    {/* Navigation */}
                    <div className={styles.navBar}>
                        <button
                            className={styles.btnBack}
                            onClick={handleBack}
                            disabled={step === 0}
                        >
                            Quay lại
                        </button>

                        <div className={styles.stepDots}>
                            {STEPS.map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.dot} ${i === step ? styles.dotActive : ''} ${i < step ? styles.dotDone : ''}`}
                                    onClick={() => setStep(i)}
                                />
                            ))}
                        </div>

                        {isLastStep ? (
                            <span className={styles.submitClosed}>
                                Chưa mở đăng ký
                            </span>
                        ) : (
                            <button className={styles.btnNext} onClick={handleNext}>
                                Tiếp theo
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Confirm Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '1rem', fontWeight: 700 }}>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{modalMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" size="sm" onClick={() => setShowModal(false)}>Hủy</Button>
                    <Button variant={modalAction === MODAL_ACTION.SUBMIT ? 'primary' : 'danger'} size="sm" onClick={handleConfirm}>
                        {modalAction === MODAL_ACTION.SUBMIT ? 'Xác nhận nộp' : 'Xóa dữ liệu'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Toast */}
            <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 100 }}>
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={4000}
                    autohide
                    bg={toastVariant}
                    className="text-white"
                >
                    <Toast.Header closeButton>
                        <strong className="me-auto">Thông báo</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}
