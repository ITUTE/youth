import React, { useEffect, useState } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

const SectionTitle = '⭐ Đạo đức tốt';

export default function DaoDucTotSV5T() {

    const [ddt, setDdt] = useState({
        DRL: 0,
        UuTien: [
            "", // MacLenin
            "", // ThamLuan
            "", // SvTieuBieu
        ]
    });

    useEffect(() => {
        const ddt = JSON.parse(localStorage.getItem('ddt'))
        console.log('ddt: ', ddt)
        if (ddt) {
            setDdt(ddt)
        }
    }, [])
    
    useEffect(() => {
        console.log(ddt)
        localStorage.setItem('ddt', JSON.stringify(ddt))
    }, [ddt])
    
    const setMacLenin = (event) => {
        let temp = ddt.UuTien
        console.log(temp)
        temp[0] = event.target.value
        setDdt({ ...ddt, UuTien: temp })
    }

    const setThamLuan = (event) => {
        let temp = ddt.UuTien
        temp[1] = event.target.value
        setDdt({ ...ddt, UuTien: temp })
    }

    const setSvTieuBieu = (event) => {
        let temp = ddt.UuTien
        temp[2] = event.target.value
        setDdt({ ...ddt, UuTien: temp })
    }

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
                        value={ddt.DRL}
                        onChange={(event) => setDdt({ ...ddt, DRL: event.target.value })} />
                </fieldset>

                <h5 className="text-black-50" style={{ margin: "20px" }}><strong># Tiêu chuẩn ưu tiên</strong></h5>
                <div className="text-danger bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</div>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.1. Là thành viên chính thức của đội thi tìm hiểu về chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp Trường trở lên:</legend>
                    <span><em>Nếu không, vui lòng điền "Không".</em></span>
                    <textarea className="form-control" 
                        id="ddt-1" rows="3" spellCheck="true" wrap="soft" required={true} placeholder="VD: Không."
                        value={ddt.UuTien[0]}
                        onChange={setMacLenin}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.2. Có tham luận, bài viết được trình bày tại các diễn đàn học thuật về các môn khoa học Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp Trường trở lên:</legend>
                    <span><em>Ghi rõ tên tham luận, diễn đàn nào, cấp tổ chức, thời gian tổ chức.</em></span>
                    <textarea className="form-control" 
                        id="ddt-2" required={true} wrap="soft" spellCheck="true" rows="3" placeholder="VD: Không."
                        value={ddt.UuTien[1]}
                        onChange={setThamLuan}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">2.3. Là thanh niên/ sinh viên tiêu biểu trong các lĩnh vực, thanh niên tiên tiến làm theo lời Bác, gương người tốt, việc tốt, có hành động dũng cảm cứu người được các cấp ghi nhận, biểu dương, khen thưởng hoặc nêu gương qua các phương tiện thông tin đại chúng:</legend>
                    <span><em>Ghi rõ danh hiệu, cấp tổ chức và thời gian tuyên dương hoặc đường dẫn đến phương tiện thông tin đại chúng đăng bài biểu dương.</em></span>
                    <textarea className="form-control" 
                        id="ddt-3" rows="3" spellCheck="true" wrap="soft" required={true} placeholder="VD: Không."
                        value={ddt.UuTien[2]}
                        onChange={setSvTieuBieu}></textarea>
                </fieldset>
            </div>
        </section>
    )

}
