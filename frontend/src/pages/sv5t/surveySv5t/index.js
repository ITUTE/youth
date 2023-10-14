import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import ProfileSV5T from './profile'
import HocTapTotSV5T from './hocTapTot'
import DaoDucTotSV5T from './daoDucTot'
import TheLucTotSV5T from './theLucTot'
import TinhNguyenTotSV5T from './tinhNguyenTot'
import HoiNhapTotSV5T from './hoiNhapTot'
import { useEffect } from 'react';

const surveySv5tContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem',
    borderRadius: '1vw',
    background: 'rgba(230,210,160,0.3)',
    boxShadow: '4px 4px rgb(166,86,20)'
}

export default function SurveySV5T() {

    const [activePageNumber, setActivePageNumber] = useState(1);
    let items = [
        <ProfileSV5T />,
        <DaoDucTotSV5T />,
        <HocTapTotSV5T />,
        <TheLucTotSV5T />,
        <TinhNguyenTotSV5T />,
        <HoiNhapTotSV5T />,
    ];
    const AllPages = []
    for (let number = 1; number <= items.length; number++) {
        AllPages.push(
            <Pagination.Item key={number} active={number === activePageNumber} onClick={() => setActivePageNumber(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const [activePage, setActivePage] = useState(<ProfileSV5T />);

    useEffect(() => {
        setActivePage(items[activePageNumber - 1])
    }, [activePageNumber]);

    return (
        <div>
            <div style={surveySv5tContainer}>
                {activePage}
            </div>
            <Pagination size="lg" className='d-flex justify-content-center p-3'>{AllPages}</Pagination>
        </div>
    )

}
