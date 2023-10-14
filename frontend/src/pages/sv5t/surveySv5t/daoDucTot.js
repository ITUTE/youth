import React from 'react'

const titleStyle = {
    borderBottomStyle: 'groove',
}

const sectionStyle = {
    padding: '1rem 0',
}

const SectionTitle = '⭐ Đạo đức tốt';

export default function DaoDucTotSV5T() {

    return  (
         <section className='container' style={sectionStyle}>
         <div className='row'>
             <h2 className='fw-bold text-uppercase text-warning' style={titleStyle}>{SectionTitle}</h2>  
             <hr />
         </div>
           
     </section>
    )
    
}
