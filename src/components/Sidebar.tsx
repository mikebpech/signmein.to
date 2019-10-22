import React, { Component } from 'react';
import styled from 'styled-components';

class Sidebar extends Component<{}, {}> {
    render() {
        return (
            <SidebarWrapper>
                <SidebarInterior>
                    <Menu>
                        <li className="menu-item selected">
                            <i className="fad fa-home-lg"></i>
                            <a>
                            Dashboard
                            </a>
                        </li>
                        <li className="menu-item">
                            <i className="fad fa-calendar-check"></i>
                            <a>
                            Event Management
                            </a>
                        </li>
                        <li className="menu-item">
                            <i className="fad fa-chart-line"></i>
                            <a>
                            Analytics
                            </a>
                        </li>
                        <li className="menu-item">
                            <i className="fad fa-credit-card"></i>
                            <a>
                            Billing
                            </a>
                        </li>
                        <li className="menu-item">
                            <i className="fad fa-cogs"></i>
                            <a>
                            Settings
                            </a>
                        </li>
                    </Menu>
                </SidebarInterior>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;

const SidebarWrapper = styled.div`
    position: relative;
    z-index: 99999;
    width: 260px;
    height: calc(100vh - 56px);
    background-color: #FFFFFF;
    box-shadow: 1px 0 0 0 #EBEFF1;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: auto;
`

const SidebarInterior = styled.div`
    padding: 0.5rem 0;
    color: #637381;
`

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    li.selected {
        a,i {
            color: #4367F7 !important;
        }
    }
    li.menu-item {
        cursor: pointer;
        i {
            width: 10px;
            height: 10px;
            margin-left: 2rem;
            margin-right: 20px;
        }
        a {
            font-family: "Muli", sans-serif;
            font-weight: 600;
            color: #637381;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            text-rendering: geometricPrecision;
            display: inline-block;
            padding: 0.5rem 0;
            user-select: none;
            overflow-wrap: break-word;
            white-space: pre-wrap;
        }

        &:hover {
            i {
                color: #4367F7 !important;
            }
        }
    }
`