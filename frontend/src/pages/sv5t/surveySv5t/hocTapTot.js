import React, { useState, useEffect } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Học tập tốt';
export const DataKey = 'HocTapTot';

export default function HocTapTotSV5T() {

    const [hocTapTot, setHocTapTot] = useState({
        KhongNoMon: 'Không nợ môn.',
        Khac: {}
    });

    useEffect(() => {
        const hocTapTot = JSON.parse(localStorage.getItem(DataKey))
        // console.log('HocTapTot: ', hocTapTot)
        if (hocTapTot) {
            setHocTapTot(hocTapTot)
        }
    }, [])

    useEffect(() => {
        // console.log(hocTapTot)
        localStorage.setItem(DataKey, JSON.stringify(hocTapTot))
    }, [hocTapTot])

    const checkSelected = (value) => {
        if (hocTapTot.KhongNoMon.includes(value)) {
            return true
        }
        return false
    }

    const onSelectChange = (event) => {
        setHocTapTot({ ...hocTapTot, KhongNoMon: event.target.value })
    }

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div id="hoc-tap-tot">
                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn bắt buộc</strong></h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.1. Không nợ môn, học phần hoặc tín chỉ trong năm học 2022 - 2023 (không rớt môn trong năm học):</legend>
                    <div className='form-check'>
                        <div className='p-2'>
                            <input className='form-check-input' type="radio"
                                id="HocTapTot-khong-no-mon" name="HocTapTot-no-mon" value="Không nợ môn."
                                checked={checkSelected('Không')}
                                onChange={onSelectChange} />
                            <label className='form-check-label' htmlFor="HocTapTot-khong-no-mon">Không nợ môn</label>
                        </div>
                        <div className='p-2'>
                            <input className='form-check-input' type="radio"
                                id="HocTapTot-co-no-mon" name="HocTapTot-no-mon" value="Có nợ môn."
                                checked={checkSelected('Có')}
                                onChange={onSelectChange} />
                            <label className='form-check-label' htmlFor="HocTapTot-co-no-mon">Có nợ môn</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.2. Tham gia đóng ý ít nhất 01 tưởng sáng tạo và được duyệt ý tưởng trên Cổng ý tưởng sáng tạo YOUTH HCMUTE của Đoàn Thanh niên - Hội Sinh viên trường:</legend>
                    <p><em>Vui lòng ghi </em><strong><em>số lượng</em></strong> ý tưởng đóng góp. Nếu chưa có, vui lòng gửi ý tưởng <a href="HocTapTotps://youth.hcmute.edu.vn" target="_blank" rel='noreferrer'>tại đây</a>.</p>
                    <input className="form-control" type="number"
                        id="HocTapTot-1" autoComplete="on" required={true}
                        min={0} placeholder="VD: 2"
                        value={hocTapTot.YTuongSangTao}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, YTuongSangTao: event.target.value })} />
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1.3. Điểm trung bình chung học tập cả năm 2022 - 2023 (đạt từ 7.5/10 trở lên):</legend>
                    <p>
                        <strong><em>Lưu ý:&nbsp;</em></strong>
                        <span className="">Điểm trung bình tính theo hệ số tín chỉ (lấy đến 2 chữ số sau dấu chấm thập phân).</span>
                    </p>
                    <input className="form-control" type="text"
                        id="HocTapTot-101" autoComplete="on" required={true} placeholder="VD: 8.00"
                        value={hocTapTot.DiemTbTichLuy}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, DiemTbTichLuy: event.target.value })} />
                </fieldset>

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chí khác</strong></h5>
                <h5 className="text-danger bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.1. Đạt điểm tiểu luận chuyên ngành hoặc đồ án tốt nghiệp (từ 7.0/10 trở lên):</legend>
                    <input className="form-control" type="text"
                        id="HocTapTot-201" autoComplete="on" required={true} placeholder="VD: 8.00"
                        value={hocTapTot.Khac.K201_TlcnDatn}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K201_TlcnDatn: event.target.value } })} />
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.2. Tham gia dự thi hoặc tổ chức ít nhất 01 cuộc thi học thuật các cấp (từ cấp LCH trở lên và tương đương):</legend>
                    <div>
                        <div><em>Ghi rõ tên chương trình, đơn vị tổ chức, xếp hạng, giải thưởng đạt được, vai trò tham gia.</em></div>
                        <div><strong> <em>Lưu ý: </em></strong><em>Chỉ chấp nhận các chương trình, cuộc thi về học thuật.</em></div>
                    </div>
                    <textarea className="form-control"
                        id="HocTapTot-202" rows="3" required={true} spellCheck="true" wrap="soft"
                        placeholder="VD: BTC cuộc thi học thuật Hackathon 2020, khoa Công nghệ Thông tin."
                        value={hocTapTot.Khac.K202_CuocThiHocThuat}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K202_CuocThiHocThuat: event.target.value } })} >
                    </textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.3. Tham gia dự thi hoặc tổ chức cuộc thi “Ý tưởng sáng tạo sinh viên toàn thành” hoặc các cuộc thi, hoạt động về khác Ý tưởng sáng tạo từ cấp Trường trở lên:</legend>
                    <span><em>Ghi rõ tên chương trình, đơn vị tổ chức, xếp hạng, giải thưởng đạt được, vai trò tham gia.</em></span>
                    <textarea className="form-control"
                        id="HocTapTot-203" spellCheck="true" wrap="soft" required={true} rows="3"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K203_CuocThiYTuongSangTao}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K203_CuocThiYTuongSangTao: event.target.value } })} >
                    </textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.4. Tham gia các cuộc thi học thuật, lớp học do doanh nghiệp tổ chức đạt giấy chứng nhận:</legend>
                    <div>
                        <div><em>Ghi rõ tên chương trình/ cuộc thi học thuật, tên doanh nghiệp tổ chức.</em></div>
                        <div><strong>Lưu ý:</strong> Phải có giấy chứng nhận từ đơn vị tổ chức.</div>
                    </div>
                    <textarea className="form-control"
                        id="HocTapTot-204" rows="3" required={true} wrap="soft" spellCheck="true"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K204_LopHocDoanhNghiep}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K204_LopHocDoanhNghiep: event.target.value } })} >
                    </textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.5. Tham gia sinh hoạt định kỳ tại các Câu lạc bộ (CLB) học thuật, Nghiên cứu Khoa học (NCKH) từ cấp Liên Chi Hội trở lên và tương đương:</legend>
                    <div>
                        <div><em>Chỉ chấp nhận các CLB sinh hoạt về chuyên ngành, khoa học, sáng tạo theo danh sách đăng ký với Hội Sinh viên trường và các đơn vị trong trường.</em></div>
                        <div><strong>Lưu ý:</strong> <em>Có giấy xác nhận của BCH LCH (hoặc chủ nhiệm CLB) hoặc được cộng điểm trong bảng điểm rèn luyện.</em></div>
                    </div>
                    <textarea className="form-control"
                        id="HocTapTot-205" required={true} wrap="soft" spellCheck="true" rows="3"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K205_ClbHocThuat}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K205_ClbHocThuat: event.target.value } })}>
                    </textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.6. Tham gia đề tài Nghiên cứu Khoa học các cấp với tư cách là chủ nhiệm đề tài hoặc thành viên nhóm nghiên cứu đề tài:</legend>
                    <p><em>Ghi rõ tên đề tài, cấp tổ chức, vai trò, điểm đánh giá, xếp loại, giải thưởng và thông tin liên hệ của người hướng dẫn.</em></p>
                    <textarea className="form-control"
                        id="HocTapTot-206" rows="3" required={true} wrap="soft" spellCheck="true"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K206_Nckh}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K206_Nckh: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.7. Thành viên nhóm nghiên cứu trọng điểm:</legend>
                    <textarea className="form-control"
                        id="HocTapTot-207" required={true} rows="3" spellCheck="true" wrap="soft"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K207_NghienCuuTrongDiem}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K207_NghienCuuTrongDiem: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.8. Tham gia Giải thưởng sinh viên nghiên cứu khoa học Euréka từ cấp Trường trở lên (hoặc tương đương):</legend>
                    <p><em>Ghi rõ tên đề tài, cấp tổ chức, vai trò, điểm đánh giá, xếp loại, giải thưởng và thông tin liên hệ của người hướng dẫn.</em></p>
                    <textarea className="form-control"
                        id="HocTapTot-208" required={true} wrap="soft" spellCheck="true"
                        placeholder="VD: Không." rows="3"
                        value={hocTapTot.Khac.K208_Eureka}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K208_Eureka: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.9. Tham gia các cuộc thi học thuật, sáng tạo, Nghiên cứu Khoa học do doanh nghiệp tổ chức và đạt giấy chứng nhận:</legend>
                    <div>
                        <div><em>Ghi rõ tên chương trình/ cuộc thi, tên doanh nghiệp tổ chức.</em></div>
                        <div><strong>Lưu ý:</strong> Phải có giấy chứng nhận từ đơn vị tổ chức.</div>
                    </div>
                    <textarea className="form-control"
                        id="HocTapTot-209" rows="3" required={true} wrap="soft" spellCheck="true"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K209_HocThuatDoanhNghiep}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K209_HocThuatDoanhNghiep: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.10. Có bài viết đăng trên tạp chí chuyên ngành hoặc có bài tham luận tham gia các hội thảo khoa học chuyên ngành (được bảo trợ nội dung bởi các cơ quan chuyên môn) từ cấp trường trở lên:</legend>
                    <div>
                        <div><strong><em>- Nếu là bài viết:</em></strong><em>&nbsp;ghi rõ tên bài viết - số báo (hoặc tên - số tạp chí), ngày phát hành, link bài viết.</em></div>
                        <div><strong><em>- Nếu là bài tham luận tham gia các hội thảo khoa học: </em></strong><em>ghi rõ tên tham luận, tên hội thảo, cấp tổ chức, thời gian tổ chức, link (nếu có).</em></div>
                    </div>
                    <textarea className="form-control"
                        id="HocTapTot-210" rows="3" required={true} wrap="soft" spellCheck="true"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K210_BaiVietThamLuan}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K210_BaiVietThamLuan: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.11. Có sản phẩm sáng tạo được cấp bằng sáng chế, cấp giấy phép xuất bản hoặc được các giải thưởng trong cuộc thi ý tưởng sáng tạo từ trường trở lên:</legend>
                    <span><em>Ghi rõ tên sản phẩm, đơn vị chứng nhận, giải thưởng đạt được, cấp nào.</em></span>
                    <textarea className="form-control"
                        id="HocTapTot-211" required={true} rows="3" wrap="soft" spellCheck="true"
                        placeholder="VD: Không."
                        value={hocTapTot.Khac.K211_SanPhamSangTao}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K211_SanPhamSangTao: event.target.value } })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.12. Là thành viên các đội tuyển tham gia các kỳ thi học thuật cấp quốc gia, quốc tế:</legend>
                    <span><em>Ghi rõ tên cuộc thi, đội tuyển, cấp tổ chức của cuộc thi, giải thưởng đạt được.</em></span>
                    <textarea className="form-control"
                        id="HocTapTot-212" required={true} rows="3" spellCheck="true" wrap="soft"
                        placeholder="VD: Thành viên đội tuyển tham gia dự thi cuộc thi học thuật &quot;Sinh viên với An toàn thông tin ASEAN 2023&quot;."
                        value={hocTapTot.Khac.K212_DoiTuyenQG}
                        onChange={(event) => setHocTapTot({ ...hocTapTot, Khac: { ...hocTapTot.Khac, K212_DoiTuyenQG: event.target.value } })}></textarea>
                </fieldset>
            </div>
        </section>
    )

}
