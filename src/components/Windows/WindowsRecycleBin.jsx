import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from 'react95';

const recycleBinItems = [
    { name: 'Old CV', type: 'PDF Document', size: '1.2 MB' },
    { name: 'DeanTUI', type: 'Rust File', size: '2.8 MB' },
    { name: 'Old Portfolio', type: 'HTML File', size: '850 KB' },
    { name: 'Project Backup', type: 'ZIP Archive', size: '15 MB' },
    { name: 'ChOdeJoue', type: 'Text Document', size: '620 KB' },
    { name: '12', type: 'WAV Audio', size: '254 MB' },
    { name: 'Zikette', type: 'Executable File', size: '12 MB' },
];

export function WindowsRecycleBin() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.RecycleBin) return null;

    return (
        <WindowsComponent
            title="Recycle Bin"
            onClose={() => toggleWindow('RecycleBin')}
            windowName="RecycleBin"
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
                    {recycleBinItems.map((item) => (
                        <TableRow key={item.name}>
                            <TableDataCell>{item.name}</TableDataCell>
                            <TableDataCell>{item.type}</TableDataCell>
                            <TableDataCell>{item.size}</TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </WindowsComponent>
    );
}
