import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Badge, Button } from 'react-bootstrap';
import { DOC_ROWS, DOC_COLUMNS } from './data';

export default function OfficeDocumentData() {

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
                        bg={status.toLowerCase() === 'đã ký' ? 'primary' : 'danger'}
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
            hover 
            searchTop searchBottom={false}
            info={false}
            pagesAmount={10}
            entriesOptions={[5, 10, 20, 50, 100]}
            entries={10}
            paginationLabel={["Trước", "Sau"]}
            
            data={exportData(DOC_COLUMNS, DOC_ROWS)} />
    );
}