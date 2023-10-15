import React, { useState, useEffect } from 'react'


const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Hội nhập tốt';
export const DataKey = 'HoiNhapTot';

export default function HoiNhapTotSV5T() {

    const [hoiNhapTot, setHoiNhapTot] = useState({
        NgoaiNgu: {},
        KyNang: {}
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(DataKey))
        // console.log('HoiNhapTot: ', data)
        if (data) {
            setHoiNhapTot(data)
        }
    }, [])

    useEffect(() => {
        // console.log(hoiNhapTot)
        localStorage.setItem(DataKey, JSON.stringify(hoiNhapTot))
    }, [hoiNhapTot])

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div className="row" id="hoi-nhap-tot">

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Về ngoại ngữ</strong></h5>
                <h6 className="text-danger ml-3 mr-3">Sinh viên có thể bình xét bằng các ngoại ngữ quy đổi tương đương.</h6>
                <h5 className="bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.1. Đạt mốc đánh giá năng lực ngoại ngữ sau: 500 TOEIC/ JLPT N5 hoặc các ngôn ngữ tương đương:</legend>
                    <span>Chấp nhận minh chứng Anh văn Đầu ra trong trường, các chứng nhận, chứng chỉ ngoại ngữ do Trung tâm ngoại ngữ của trường tổ chức, giấy chứng nhận thi thử được cấp bởi các Trung tâm ngoại ngữ.</span>
                    <textarea className="form-control"
                        id="hnt-101" required={true} spellcheck="true" wrap="soft" rows="3"
                        placeholder="VD: Đạt TOEIC 625, thi ngày 18/11/2020."
                        value={hoiNhapTot.NgoaiNgu.ChungChiNgoaiNgu}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, NgoaiNgu: { ...hoiNhapTot.NgoaiNgu, ChungChiNgoaiNgu: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.2. Đạt chứng chỉ tiếng Anh trình độ B1 hoặc có tổng điểm các học phần ngoại ngữ (trừ ngoại ngữ chuyên ngành) đạt từ 7.5/10 trở lên trong năm học:</legend>
                    <span><em>Ghi điểm trung bình của các học phần ngoại ngữ có trong năm học (nếu có).</em></span>
                    <textarea className="form-control"
                        id="hnt-102" required={true} wrap="soft" spellcheck="true" rows="3"
                        placeholder="VD: Đạt điểm trung bình ngoại ngữ 8.0/10.0"
                        value={hoiNhapTot.NgoaiNgu.DtbNgoaiNgu}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, NgoaiNgu: { ...hoiNhapTot.NgoaiNgu, DtbNgoaiNgu: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.3. Tham gia và đạt giải ba trở lên các cuộc thi kiến thức ngoại ngữ (được hiểu là cuộc thi tìm hiểu ngoại ngữ hoặc cuộc thi sử dụng ngoại ngữ để trình bày) từ cấp Trường trở lên:</legend>
                    <span><em>Ghi rõ tên cuộc thi, đơn vị tổ chức, xếp loại, xếp hạng, giải thưởng đạt được.</em></span>
                    <textarea className="form-control" 
                        id="hnt-103" required={true} wrap="soft" spellcheck="true" rows="3" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.NgoaiNgu.CuocThiNgoaiNgu}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, NgoaiNgu: { ...hoiNhapTot.NgoaiNgu, CuocThiNgoaiNgu: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.4. Đạt giấy chứng nhận tham gia các hoạt động giao lưu quốc tế: Hội nghị, Hội thảo quốc tế, các chương trình gặp gỡ, giao lưu, hợp tác với thanh niên, sinh viên quốc tế trong và ngoài nước:</legend>
                    <span><em>Ghi rõ tên hoạt động, hội nghị, thời gian tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="hnt-103" required={true} wrap="soft" spellcheck="true" rows="3" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.NgoaiNgu.GiaoLuuQuocTe}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, NgoaiNgu: { ...hoiNhapTot.NgoaiNgu, GiaoLuuQuocTe: event.target.value } })}></textarea>
                </fieldset>

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Về kỹ năng</strong></h5>
                <h5 className="text-danger bg-info text-white ml-3 mr-3">Hoàn thành ít nhất 01 tiêu chí khác nhau trong các tiêu chí sau:</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.1. Tham gia và đạt giấy chứng nhận hoàn thành khóa trang bị kỹ năng thực hành xã hội:</legend>
                    <span><em>Ghi rõ tên khóa học, đơn vị và thời gian tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="hnt-201" required={true} wrap="soft" spellcheck="true" rows="3" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.KyNang.KhoaKyNangXaHoi}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, KhoaKyNangXaHoi: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.2. Tham gia hội thảo giao lưu với doanh nghiệp, phỏng vấn, tư vấn học bổng từ các doanh nghiệp từ cấp Liên chi trở lên và tương đương:</legend>
                    <span><em>Ghi rõ tên hội thảo, đơn vị và thời gian tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="hnt-202" required={true} wrap="soft" spellcheck="true" 
                        placeholder="VD: Không." rows="3"
                        value={hoiNhapTot.KyNang.HoiThao}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, HoiThao: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.3. Tham gia học tập và đạt các chứng nhận kỹ năng trên các nền tảng như HubSpot, LinkedIn, Google Digital Garage, Coursera, Udemy...:</legend>
                    <span><em>Ghi rõ tên khóa học, thời gian hoàn thành, link chứng chỉ.</em></span>
                    <textarea className="form-control" 
                        id="hnt-203" required={true} rows="3" wrap="soft" spellcheck="true" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.KyNang.Mooc}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, Mooc: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.4. Thành viên sinh hoạt định kỳ của CLB/Đội/Nhóm/Trung tâm cấp Liên Chi Hội trở lên hoặc thành viên hoạt động tích cực tại các đơn vị chức năng của Đoàn - Hội trường:</legend>
                    <span><em>Có minh chứng trên bảng điểm rèn luyện.</em></span>
                    <textarea className="form-control" 
                        id="hnt-204" required={true} wrap="soft" spellcheck="true" 
                        placeholder="VD: Không." rows="3"
                        value={hoiNhapTot.KyNang.Clb}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, Clb: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.5. Là Chi Hội trưởng/Chi Hội phó, Bí thư Chi Đoàn/Phó Bí thư Chi Đoàn, Cộng tác viên Đoàn - Hội khoa, Ủy viên Ban Chấp hành Đoàn khoa/ Liên Chi Hội khoa; thành viên Ban Chủ nhiệm/Ban Điều hành/Ban Giám đốc các CLB/Đội/Nhóm/TT trực thuộc Đoàn Thanh niên - Hội Sinh viên trường, Ủy viên Ban Chấp hành Đoàn Thanh niên trường - Hội Sinh viên trường có xác nhận hoạt động tích cực của cơ sở:</legend>
                    <span><em>Có minh chứng trên bảng điểm rèn luyện.</em></span>
                    <textarea className="form-control" 
                        id="hnt-205" required={true} wrap="soft" spellcheck="true" 
                        placeholder="VD: CTV Đoàn - Hội Khoa Công nghệ Thông tin." rows="3"
                        value={hoiNhapTot.KyNang.CanBoCacCap}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, CanBoCacCap: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.6. Tham gia, luyện tập và có giấy chứng nhận hoàn thành các hoạt động, chương trình liên quan đến đồng diễn, đồng ca,... có số lượng sinh viên tham gia đạt kỷ lục từ cấp Trường trở lên (hoặc tương đương):</legend>
                    <span><em>Nêu rõ tên hoạt động, chương trình, thời gian và đơn vị tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="hnt-206" required={true} wrap="soft" spellcheck="true" rows="3" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.KyNang.KyLucDongDien}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, KyLucDongDien: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.7. Tham gia và có giấy xác nhận tham gia các cuộc thi kỹ năng từ cấp Liên Chi trở lên (hoặc tương đương):</legend>
                    <span><em>Ghi rõ tên cuộc thi, giải thưởng, thời gian và đơn vị tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="hnt-207" required={true} wrap="soft" spellcheck="true" rows="3" 
                        placeholder="VD: Không."
                        value={hoiNhapTot.KyNang.CuocThiKyNang}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, CuocThiKyNang: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.8. Được Đoàn Thanh niên - Hội Sinh viên từ cấp khoa trở lên khen thưởng về thành tích xuất sắc trong công tác Đoàn và phong trào thanh niên hoặc công tác Hội và phong trào sinh viên trong năm học 2022 - 2023:</legend>
                    <span><em>Ghi rõ hình thức, nội dung và cấp khen thưởng.</em></span>
                    <textarea className="form-control" 
                        id="hnt-209" required={true} wrap="soft" spellcheck="true" 
                        placeholder="VD: Không." rows="3"
                        value={hoiNhapTot.KyNang.KhenThuongDoanHoi}
                        onChange={(event) => setHoiNhapTot({ ...hoiNhapTot, KyNang: { ...hoiNhapTot.KyNang, KhenThuongDoanHoi: event.target.value } })}></textarea>
                </fieldset>

            </div>
        </section>
    )

}
