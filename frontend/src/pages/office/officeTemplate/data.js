import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Badge, Button } from 'react-bootstrap';

export default function OfficeTemplateData() {

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
            name: 'MẪU KẾ HOẠCH LIÊN TỊCH ĐOÀN THANH NIÊN - HỘI SINH VIÊN',
            number: null,
            type: 'KHLT-ĐTN-HSV',
            date: '2021/04/??',
            url: 'https://docs.google.com/document/d/1JTP6gx4NKScpiz1B3KbSQtgNoDKGeqf3/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 2,
            name: 'MẪU DỰ TRÙ KINH PHÍ',
            number: null,
            type: 'DTKP',
            date: '2021/04/??',
            url: 'https://docs.google.com/document/d/1TM6zEb7mtTs9Ytv8H42ch6_VAT22c5ni/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 3,
            name: 'MẪU KẾ HOẠCH HỘI SINH VIÊN',
            number: null,
            type: 'KH-HSV',
            date: '2021/01/??',
            url: 'https://docs.google.com/document/d/13PQH3rqoS72GpjqybMKsPQ553oGieW_E/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
            status: 'Active',
        },
        {
            no: 4,
            name: 'MẪU KẾ HOẠCH ĐOÀN THANH NIÊN',
            number: null,
            type: 'KH-ĐTN',
            date: '2021/12/??',
            url: 'https://docs.google.com/document/d/1urU9_9CBl3DEYNC1j8nNmrcgTtWVPpqL/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
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