import React from "react";
import { Breadcrumb } from "react-bootstrap";
import './officeBreadcrumb.scss';

export default function OfficeBreadcrumb({currentField}) {
    return (
        <Breadcrumb className="office-breadscrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Office</Breadcrumb.Item>
            <Breadcrumb.Item active>
                {currentField}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}