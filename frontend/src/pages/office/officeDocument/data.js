import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Badge, Button } from 'react-bootstrap';

export default function OfficeDocumentData() {

    const COLUMNS = [
        {
            label: 'STT',
            field: 'no',
            width: 100,
        },
        {
            label: 'Tên',
            field: 'name',
            width: 300,
        },
        {
            label: 'Số văn bản',
            field: 'number',
            width: 100,
        },
        {
            label: 'Loại',
            field: 'type',
            width: 200,
        },
        {
            label: 'Ngày ban hành',
            field: 'date',
            sort: 'asc',
            width: 100,
        },
        {
            label: 'Link',
            field: 'url',
            sort: 'disabled',
            width: 150,
        },
        {
            label: 'Trạng thái',
            field: 'status',
            width: 100,
        },
    ]

    const ROWS = [
        {
            no: 1,
            name: 'KẾ HOẠCH Tổ chức chương trình Thiết kế CV “CV Contest” năm 2022 Khoa Công nghệ Thông tin',
            number: 6,
            type: 'KH-HSV-CNTT',
            date: '2022/02/04',
            url: 'https://docs.google.com/document/d/1ge1iHfXM1c_wwTpMSSX49wDJzgSbkDJj/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 2,
            name: 'KẾ HOẠCH Tổ chức cuộc thi học thuật Hackathon mở rộng năm 2022 Khoa Công nghệ Thông tin',
            number: 5,
            type: 'KH/ĐTN-CNTT',
            date: '2022/02/22',
            url: 'https://docs.google.com/document/d/1lJXEWdb9yyQoEuYTVKG119NhYn55ryrt/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 3,
            name: 'KẾ HOẠCH Tổ chức Trại tập huấn kỹ năng và chương trình giao lưu Cán bộ Đoàn - Hội Khoa Công nghệ Thông Tin',
            number: 11,
            type: 'KH-HSV-CNTT',
            date: '2022/03/03',
            url: 'https://docs.google.com/document/d/1uN2gzIeoLmtaenM1EpPl9lEDQO5j17B5/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 4,
            name: 'KẾ HOẠCH Tổ chức chương trình “Noel ấm áp” năm 2021 Khoa Công nghệ Thông tin',
            number: 4,
            type: 'KHLT-ĐTN-HSV',
            date: '2021/12/20',
            url: 'https://docs.google.com/document/d/18prwHNYCsg7VL4vxrD-MHKG7m00NQpOK/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 5,
            name: 'KẾ HOẠCH Tổ chức chương trình “ IT SÁNG TẠO” năm 2021 Kỷ niệm 39 năm ngày Nhà giáo Việt Nam (20/11/1982 - 20/11/2021) Khoa Công nghệ Thông tin',
            number: 3,
            type: 'KH-HSV-CNTT',
            date: '2021/10/28',
            url: 'https://docs.google.com/document/d/1HrEqcLhoB8oFYyCoPfw_CEFRUN72VMdq/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 6,
            name: 'KẾ HOẠCH Tổ chức chương trình “Thể dục Online - Say bye Covid” Khoa Công nghệ Thông tin năm 2021',
            number: 8,
            type: 'KHLT-ĐTN-HSV-CNTT',
            date: '2021/08/05',
            url: 'https://docs.google.com/document/d/14YXNbenuuBiOJzJ9gSLPZVbzLAUnUL8i/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 7,
            name: 'KẾ HOẠCH Tổ chức chương trình “Trung thu yêu thương” năm 2021 Khoa Công nghệ Thông tin',
            number: 4,
            type: 'KHLT-ĐTN-HSV',
            date: '2021/08/30',
            url: 'https://docs.google.com/document/d/1gXmeQN6_JaK8DdKhu43Aa1hi1_x97n6t/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
    ]

    const exportData = (columns, rows) => {
        const rowsData = rows.map(data => {
            const getLink = (url) => {
                return (
                    <Button
                        size="sm" variant="outline-success"
                        href={url} target="_blank">
                        Xem
                    </Button>
                )
            }

            const getStatus = (status) => {
                return (
                    <Badge
                        pill
                        bg={status.toLowerCase() === 'active' ? 'primary' : 'danger'}
                    >
                        {status}
                    </Badge>
                )
            }
            return {
                ...data,
                url: getLink(data.url),
                status: getStatus(data.status),
            }
        })

        return {
            columns: columns,
            rows: rowsData
        }
    }

    return (
        <MDBDataTableV5
            hover fullPagination
            searchTop searchBottom={false}
            entriesOptions={[5, 10, 20, 50, 100]}
            entries={5}
            pagesAmount={4}
            data={exportData(COLUMNS, ROWS)} />
    );
}