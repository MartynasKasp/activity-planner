import React from 'react';
import './styles.scss';
import { CalendarViewDay, CalendarViewDayOutlined, Group, GroupOutlined, WorkspacesOutlined } from '@mui/icons-material';

function BottomNavigation() {
    return (
        <div className='BottomNavigation__Container'>
            <a
                href='#'
                className='BottomNavigation__Item BottomNavigation__Item--active'
            >
                <div className='BottomNavigation__ItemIcon'>
                    {/* <GroupOutlined /> */}
                    <Group />
                </div>
                <div className='BottomNavigation__ItemLabel'>
                    Groups
                </div>
            </a>
            <a
                href='#'
                className='BottomNavigation__Item'
            >
                <div className='BottomNavigation__ItemIcon'>
                    <CalendarViewDayOutlined />
                    {/* <CalendarViewDay /> */}
                </div>
                <div className='BottomNavigation__ItemLabel'>
                    Upcoming
                </div>
            </a>
            <a
                href='#'
                className='BottomNavigation__Item'
            >
                <div className='BottomNavigation__ItemIcon'>
                    <WorkspacesOutlined />
                </div>
                <div className='BottomNavigation__ItemLabel'>
                    Placeholder
                </div>
            </a>
        </div>
    );
}

export default BottomNavigation;