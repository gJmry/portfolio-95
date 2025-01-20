import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import cv from "../../assets/images/cv.png"
import {Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow} from "react95";

export function WindowsRecycleBin() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.RecycleBin) return null;

    return (
        <WindowsComponent
            title="Recycle Bin"
            onClose={() => toggleWindow('RecycleBin')}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Type</TableHeadCell>
                        <TableHeadCell>Total Size</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableDataCell>Old CV</TableDataCell>
                        <TableDataCell>PDF Document</TableDataCell>
                        <TableDataCell>1.2 MB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>DeanTUI</TableDataCell>
                        <TableDataCell>Rust File</TableDataCell>
                        <TableDataCell>2.8 MB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>Old Portfolio</TableDataCell>
                        <TableDataCell>HTML File</TableDataCell>
                        <TableDataCell>850 KB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>Project Backup</TableDataCell>
                        <TableDataCell>ZIP Archive</TableDataCell>
                        <TableDataCell>15 MB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>ChOdeJoue</TableDataCell>
                        <TableDataCell>Text Document</TableDataCell>
                        <TableDataCell>620 KB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>12</TableDataCell>
                        <TableDataCell>WAV Audio</TableDataCell>
                        <TableDataCell>254 MB</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell>Zikette</TableDataCell>
                        <TableDataCell>Executable File</TableDataCell>
                        <TableDataCell>12 MB</TableDataCell>
                    </TableRow>
                </TableBody>
            </Table>
        </WindowsComponent>
    );
}
