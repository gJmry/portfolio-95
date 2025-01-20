import React from 'react';
import {
    Button,
    Frame,
    Toolbar,
    Window,
    WindowContent,
    WindowHeader,
} from 'react95';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';

const Wrapper = styled.div`
    padding: 5rem;

    .window-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .close-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: -1px;
        margin-top: -1px;
        transform: rotateZ(45deg);
        position: relative;

        &:before,
        &:after {
            content: '';
            position: absolute;
            background: ${({ theme }) => theme.materialText};
        }

        &:before {
            height: 100%;
            width: 3px;
            left: 50%;
            transform: translateX(-50%);
        }

        &:after {
            height: 3px;
            width: 100%;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .window {
        width: 400px;
        min-height: 200px;
    }

    .footer {
        display: block;
        margin: 0.25rem;
        height: 31px;
        line-height: 31px;
        padding-left: 0.25rem;
    }
`;

export function WindowsComponent({
                                     title = 'Window',
                                     defaultPosition = { x: 100, y: 100, width: 400, height: 300 },
                                     onClose,
                                     headerButtons = [],
                                     toolbarButtons = [],
                                     children,
                                     footerContent,
                                 }) {
    return (
        <Wrapper>
            <Rnd
                default={defaultPosition}
                dragHandleClassName="window-title"
                enableResizing={false}
            >
                <Window resizable={false} className="window">
                    <WindowHeader className="window-title">
                        <span>{title}</span>
                        <div>
                            {headerButtons.map((btn, idx) => (
                                <Button key={idx} onClick={btn.onClick}>
                                    {btn.icon || <span className="close-icon" />}
                                </Button>
                            ))}
                            {onClose && (
                                <Button onClick={onClose}>
                                    <span className="close-icon" />
                                </Button>
                            )}
                        </div>
                    </WindowHeader>
                    <Toolbar>
                        {toolbarButtons.map((btn, idx) => (
                            <Button key={idx} variant="menu" size="sm" {...btn.props}>
                                {btn.label}
                            </Button>
                        ))}
                    </Toolbar>
                    <WindowContent>{children}</WindowContent>
                    {footerContent && (
                        <Frame variant="well" className="footer">
                            {footerContent}
                        </Frame>
                    )}
                </Window>
            </Rnd>
        </Wrapper>
    );
}
