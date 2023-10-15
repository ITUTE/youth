import React from 'react'
import { useEffect } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Thông tin chung'
export const DataKey = 'Profile'

export default function ProfileSV5T() {

    const [profile, setProfile] = React.useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(DataKey))
        // console.log('Profile: ', data)
        if (data) {
            setProfile(data)
        }
        else {
            setProfile({
                Khoa: 'Công nghệ Thông tin',
            })
        }
    }, [])

    useEffect(() => {
        // console.log(profile)
        localStorage.setItem(DataKey, JSON.stringify(profile))
    }, [profile])

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div>
                <fieldset style={{ margin: '10px' }}>
                    <legend className="d-md-flex justify-content-md-start fw-bold">Họ tên:</legend>
                    <input className="form-control" type="text"
                        id="ho-ten" autoComplete="on" required={true} placeholder="Nguyễn Văn A"
                        value={profile.HoTen}
                        onChange={(event) => setProfile({ ...profile, HoTen: event.target.value })} />
                </fieldset>

                <div className="row row-cols-2">
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Chuyên ngành đào tạo:</legend>
                            <select className="form-select"
                                id="chuyen-nganh" required={true}
                                value={profile.ChuyenNganh}
                                onChange={(event) => setProfile({ ...profile, ChuyenNganh: event.target.value })}>
                                <option></option>
                                <option value="Công nghệ Thông tin">Công nghệ Thông tin</option>
                                <option value="Kỹ thuật Dữ liệu">Kỹ thuật Dữ liệu</option>
                                <option value="An toàn Thông tin">An toàn Thông tin</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Khoa:</legend>
                            <input className="form-control" type="text" id="khoa" required={true} value="Công nghệ Thông tin" readOnly />
                        </fieldset>
                    </div>
                </div>

                <div className="row row-cols-2">
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">MSSV:</legend>
                            <input className="form-control" type="number"
                                id="mssv" required={true} placeholder="VD: 22110006"
                                value={profile.MSSV}
                                onChange={(event) => setProfile({ ...profile, MSSV: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Lớp:</legend>
                            <input className="form-control" type="text"
                                id="lop" placeholder="VD: 221101A"
                                value={profile.Lop}
                                onChange={(event) => setProfile({ ...profile, Lop: event.target.value })} />
                        </fieldset>
                    </div>
                </div>

                <div className="row row-cols-2">
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Sinh viên năm:</legend>
                            <select className="form-select" id="sv-nam" required={true}
                                value={profile.SvNamThu}
                                onChange={(event) => setProfile({ ...profile, SvNamThu: event.target.value })}>
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Chức vụ:</legend>
                            <input className="form-control" type="text"
                                id="chuc-vu" placeholder="VD: Sinh viên"
                                value={profile.ChucVu}
                                onChange={(event) => setProfile({ ...profile, ChucVu: event.target.value })} />
                        </fieldset>
                    </div>
                </div>

                <div className="row row-cols-2">
                    <div className="col-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Giới tính:</legend>
                            <select className="form-select"
                                id="gioi-tinh" required={true}
                                value={profile.GioiTinh}
                                onChange={(event) => setProfile({ ...profile, GioiTinh: event.target.value })}>
                                <option></option>
                                <option value="Nam" >Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Ngày sinh:</legend>
                            <input className="form-control"
                                id="ngay-sinh" type="date" required={true}
                                value={profile.NgaySinh}
                                onChange={(event) => setProfile({ ...profile, NgaySinh: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col-12 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Dân tộc:</legend>
                            <input className="form-control" type="text"
                                id="dan-toc" required={true} placeholder="VD: Kinh"
                                value={profile.DanToc}
                                onChange={(event) => setProfile({ ...profile, DanToc: event.target.value })} />
                        </fieldset>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Ngày vào Đảng :</legend>
                            <span><em>(dự bị - nếu không có, xin để trống)</em></span>
                            <input className="form-control"
                                id="vao-dang-du-bi" type="date" placeholder="Không."
                                value={profile.NgayVaoDangDuBi}
                                onChange={(event) => setProfile({ ...profile, NgayVaoDangDuBi: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Ngày vào Đảng :</legend>
                            <span><em>(chính thức - nếu không có, xin để trống)</em></span>
                            <input className="form-control"
                                id="vao-dang-chinh-thuc" type="date" placeholder="Không."
                                value={profile.NgayVaoDangChinhThuc}
                                onChange={(event) => setProfile({ ...profile, NgayVaoDangChinhThuc: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Ngày vào Đoàn:</legend>
                            <span><em>(nếu không có, xin để trống)</em></span>
                            <input className="form-control" 
                                id="vao-doan" type="date"
                                value={profile.NgayVaoDoan}
                                onChange={(event) => setProfile({ ...profile, NgayVaoDoan: event.target.value })} />
                        </fieldset>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">SĐT:</legend>
                            <input className="form-control" type="tel" 
                                id="sdt" required={true} inputMode="tel" autoComplete="on" placeholder='VD: 0123456789'
                                value={profile.SDT}
                                onChange={(event) => setProfile({ ...profile, SDT: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Email:</legend>
                            <input className="form-control" type="email" 
                                id="email" autoComplete="on" inputMode="email" required={true} placeholder="VD: 22110006@student.hcmute.edu.vn"
                                value={profile.Email}
                                onChange={(event) => setProfile({ ...profile, Email: event.target.value })} />
                        </fieldset>
                    </div>
                    <div className="col">
                        <fieldset style={{ margin: '10px' }}>
                            <legend className="fw-bold">Facebook:</legend>
                            <input className="form-control" type="text" 
                                id="facebook" placeholder="VD: https://www.facebook.com/username" required={true} autoComplete="on"
                                value={profile.Facebook}
                                onChange={(event) => setProfile({ ...profile, Facebook: event.target.value })} />
                        </fieldset>
                    </div>
                </div>

                <fieldset style={{ margin: '10px' }}>
                    <legend className="fw-bold">Địa chỉ liên lạc:</legend>
                    <textarea className="form-control" 
                        id="dia-chi" wrap="soft" rows="3" spellCheck="true" required={true}
                        value={profile.DiaChi}
                        onChange={(event) => setProfile({ ...profile, DiaChi: event.target.value })}>
                    </textarea>
                </fieldset>
            </div>
        </section>
    )

}
