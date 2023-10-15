import React, { useState, useEffect } from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

export const SectionTitle = '⭐ Thể lực tốt';
export const DataKey = 'TheLucTot';

export default function TheLucTotSV5T() {

    const [theLucTot, setTheLucTot] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(DataKey));
        // console.log('TheLucTot: ', data)
        if (data) {
            setTheLucTot(data);
        }
    }, [])

    useEffect(() => {
        // console.log(theLucTot);
        localStorage.setItem(DataKey, JSON.stringify(theLucTot));
    }, [theLucTot])

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

            <div className="row" id="the-luc-tot" >
                <h5 className="text-danger bg-info text-white ml-3 mr-3">Đạt ít nhất 01 trong các tiêu chí sau:</h5>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">3.1. Đạt danh hiệu "Thanh niên khỏe" trong năm học 2022 - 2023:</legend>
                    <span><em>Ghi rõ thời gian nhận chứng nhận. Nếu không có, vui lòng ghi "</em><strong>Không</strong>.<em>"</em></span>
                    <textarea className="form-control"
                        id="tlt-1" required={true} wrap="soft" spellcheck="true" rows="3"
                        placeholder="VD: Đạt danh hiệu Thanh niên khỏe cấp trường năm 2023."
                        value={theLucTot.ThanhNienKhoe}
                        onChange={(event) => setTheLucTot({ ...theLucTot, ThanhNienKhoe: event.target.value })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">3.2. Tham gia các hoạt động thể dục thể thao, giải chạy, hội thao sinh viên (trừ thể thao điện tử) từ cấp Trường trở lên và đạt giấy chứng nhận:</legend>
                    <span><em>Ghi rõ thời gian nhận chứng nhận. Nếu không có, vui lòng ghi "</em><strong>Không</strong>.<em>"</em></span>
                    <textarea className="form-control"
                        id="tlt-2" required={true} wrap="soft" spellcheck="true" rows="3"
                        placeholder="VD: Không."
                        value={theLucTot.HoiThaoTdtt}
                        onChange={(event) => setTheLucTot({ ...theLucTot, HoiThaoTdtt: event.target.value })} ></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">3.3. Là thành viên đội tuyển cấp trường, thành phố các môn thể dục thể thao:</legend>
                    <span><em>Ưu tiên những sinh viên là vận động viên đạt huy chương trong các giải thi đấu cấp quốc gia, khu vực và quốc tế.</em></span>
                    <textarea className="form-control"
                        id="tlt-3" required={true} wrap="soft" spellcheck="true" rows="3"
                        placeholder="VD: Không."
                        value={theLucTot.DoiTuyenTheThao}
                        onChange={(event) => setTheLucTot({ ...theLucTot, DoiTuyenTheThao: event.target.value })}></textarea>
                </fieldset>

                <fieldset style={{ margin: "10px" }}>
                    <legend className="fw-bold">3.4. Đối với những sinh viên khuyết tật có giấy xác nhận được miễn tiêu chuẩn này:</legend>
                    <span><em>Nếu không có, vui lòng ghi "</em><strong><em>Không.</em></strong><em>"</em></span>
                    <textarea className="form-control"
                        id="tlt-4" required={true} rows="3" wrap="soft" spellcheck="true"
                        placeholder="VD: Không."
                        value={theLucTot.SvKhuyetTat}
                        onChange={(event) => setTheLucTot({ ...theLucTot, SvKhuyetTat: event.target.value })}></textarea>
                </fieldset>

            </div>
        </section>
    )

}
