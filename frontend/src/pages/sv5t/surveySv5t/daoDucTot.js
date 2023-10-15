import React, { useEffect, useState } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Đạo đức tốt';
export const DataKey = 'DaoDucTot';

export default function DaoDucTotSV5T() {

    const [daoDucTot, setDaoDucTot] = useState({
        DRL: 0,
        UuTien: {}
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(DataKey))
        // console.log('DaoDucTot: ', data)
        if (data) {
            setDaoDucTot(data)
        }
    }, [])
    
    useEffect(() => {
        // console.log(daoDucTot)
        localStorage.setItem(DataKey, JSON.stringify(daoDucTot))
    }, [daoDucTot])

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div className="row" id="dao-duc-tot" >
                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn bắt buộc</strong></h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">1. Điểm rèn luyện:</legend>
                    <span><em>Điểm rèn luyện trung bình của năm học 2020 - 2021.</em></span>
                    <input className="form-control" type="number" min="0" max="100" step="0.1"
                        id="drl" autoComplete="on" required={true} placeholder="VD: 95.0"
                        value={daoDucTot.DRL}
                        onChange={(event) => setDaoDucTot({ ...daoDucTot, DRL: event.target.value })} />
                </fieldset>

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn ưu tiên</strong></h5>
                <div className="text-danger bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</div>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.1. Là thành viên chính thức của đội thi tìm hiểu về chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp Trường trở lên:</legend>
                    <span><em>Nếu không, vui lòng điền "Không".</em></span>
                    <textarea className="form-control" 
                        id="DaoDucTot-1" rows="3" spellCheck="true" wrap="soft" required={true} placeholder="VD: Không."
                        value={daoDucTot.UuTien.DoiTuyenMacLenin}
                        onChange={(event) => setDaoDucTot({ ...daoDucTot, UuTien: { ...daoDucTot.UuTien, DoiTuyenMacLenin: event.target.value } })}
                        ></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.2. Có tham luận, bài viết được trình bày tại các diễn đàn học thuật về các môn khoa học Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp Trường trở lên:</legend>
                    <span><em>Ghi rõ tên tham luận, diễn đàn nào, cấp tổ chức, thời gian tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="DaoDucTot-2" required={true} wrap="soft" spellCheck="true" rows="3" placeholder="VD: Không."
                        value={daoDucTot.UuTien.ThamLuanMacLenin}
                        onChange={(event) => setDaoDucTot({ ...daoDucTot, UuTien: { ...daoDucTot.UuTien, ThamLuanMacLenin: event.target.value } })}
                        ></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.3. Là thanh niên/ sinh viên tiêu biểu trong các lĩnh vực, thanh niên tiên tiến làm theo lời Bác, gương người tốt, việc tốt, có hành động dũng cảm cứu người được các cấp ghi nhận, biểu dương, khen thưởng hoặc nêu gương qua các phương tiện thông tin đại chúng:</legend>
                    <span><em>Ghi rõ danh hiệu, cấp tổ chức và thời gian tuyên dương hoặc đường dẫn đến phương tiện thông tin đại chúng đăng bài biểu dương.</em></span>
                    <textarea className="form-control" 
                        id="DaoDucTot-3" rows="3" spellCheck="true" wrap="soft" required={true} placeholder="VD: Không."
                        value={daoDucTot.UuTien.GuongTuyenDuong}
                        onChange={(event) => setDaoDucTot({ ...daoDucTot, UuTien: { ...daoDucTot.UuTien, GuongTuyenDuong: event.target.value } })}></textarea>
                </fieldset>
            </div>
        </section>
    )

}
