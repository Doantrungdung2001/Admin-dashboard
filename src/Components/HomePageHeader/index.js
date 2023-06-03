import classNames from 'classnames/bind';
import styles from './HomePageHeader.module.scss';
import React from 'react';
import { Button, Input, Layout, Menu, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { BellOutlined, DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function HomePageHeader() {
    return (
        <>
            <Header className={cx('header')}>
                <div className={cx('header-block')}>
                    <div className={cx('input-area')}>
                        <Input addonBefore={<SearchOutlined />} className={cx('input-search')} />
                    </div>
                    <div className={cx('information')}>
                        <Space size={60}>
                            <Button type="primary" className={cx('header-btn')}>
                                客
                            </Button>
                            <BellOutlined className={cx('header-icon')} />
                            <div className={cx('profile', 'header-icon')}>
                                <UserOutlined />
                                <DownOutlined className={cx('down-icon')} />
                            </div>
                        </Space>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default HomePageHeader;
