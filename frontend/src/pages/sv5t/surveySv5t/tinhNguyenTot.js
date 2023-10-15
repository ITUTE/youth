import React, { useState, useEffect } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Tình nguyện tốt';
export const DataKey = 'TinhNguyenTot';

export default function TinhNguyenTotSV5T() {

    const [tinhNguyenTot, setTinhNguyenTot] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(DataKey))
        // console.log('TinhNguyenTot: ', data)
        if (data) {
            setTinhNguyenTot(data)
        }
    }, [])

    useEffect(() => {
        // console.log(tinhNguyenTot)
        localStorage.setItem(DataKey, JSON.stringify(tinhNguyenTot))
    }, [tinhNguyenTot])

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div className="row" id="tinh-nguyen-tot">
                <h5 className="text-red-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn bắt buộc</strong></h5>
                <h5 className="text-danger bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">4.1. Tham gia và nhận giấy chứng nhận hoàn thành đầy đủ một trong các chương trình, chiến dịch sau: Chiến dịch Xuân tình nguyện 2023, Chương trình Tiếp sức mùa thi 2023 và Chiến dịch Mùa hè xanh 2023:</legend>
                    <span><em>Đối với trường hợp chỉ tham gia gây quỹ không được tính vào tiêu chí này.</em></span>
                    <textarea className="form-control"
                        id="tnt-1" required={true} rows="3" spellcheck="true" wrap="soft"
                        placeholder="VD: Tham gia chiến dịch &quot;Xuân tình nguyện 2023&quot; khoa Công nghệ Thông tin."
                        value={tinhNguyenTot.ChienDichTinhNguyen}
                        onChange={(event) => setTinhNguyenTot({ ...tinhNguyenTot, ChienDichTinhNguyen: event.target.value })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">4.2. Tham gia và đạt được ít nhất 25 điểm công tác xã hội/ năm học:</legend>
                    <span><em>Ghi tổng số điểm CTXH đã đạt trong năm học 2022 - 2023.</em></span>
                    <input className="form-control" type="text"
                        id="tnt-2" required={true} placeholder="VD: 30.0"
                        value={tinhNguyenTot.DiemCtxh}
                        onChange={(event) => setTinhNguyenTot({ ...tinhNguyenTot, DiemCtxh: event.target.value })}></input>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">4.3. Được khen thưởng từ cấp khoa trở lên về hoạt động tình nguyện:</legend>
                    <span><em>Ghi rõ hình thức, nội dung và cấp khen thưởng.</em></span>
                    <textarea className="form-control"
                        id="tnt-3" required={true} rows="3" wrap="soft" spellcheck="true"
                        placeholder="VD: Không."
                        value={tinhNguyenTot.KhenThuongTinhNguyen}
                        onChange={(event) => setTinhNguyenTot({ ...tinhNguyenTot, KhenThuongTinhNguyen: event.target.value })}></textarea>
                </fieldset>

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn ưu tiên</strong></h5>
                <h5 className="text-danger bg-info text-white ml-3 mr-3">Ưu tiên cho những cá nhân đạt từ 20 điểm CTXH trở lên.</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">Tham gia và đạt giấy chứng nhận tham gia các hoạt động hỗ trợ cộng đồng tại khu địa bàn dân cư hoặc tại địa phương nơi sinh viên học tập và sinh hoạt:</legend>
                    <span><em>Ghi rõ hoạt động, hình thức, địa điểm, thời gian tổ chức.</em></span>
                    <textarea className="form-control"
                        id="tnt-3" required={true} rows="3" wrap="soft" spellcheck="true"
                        placeholder="VD: Không."
                        value={tinhNguyenTot.TinhNguyenDiaPhuong}
                        onChange={(event) => setTinhNguyenTot({ ...tinhNguyenTot, TinhNguyenDiaPhuong: event.target.value })}></textarea>
                </fieldset>
            </div>

        </section>
    )

}
