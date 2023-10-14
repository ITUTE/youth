import React from 'react'


const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

const SectionTitle = '⭐ Hội nhập tốt';

export default function HoiNhapTotSV5T() {

    return (
        <section className='container' style={sectionStyle}>
            <div className='row'>
                <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>
                <hr />
            </div>

        </section>
    )

}
