import classNames from 'classnames/bind';
import styles from './HomePageHeader.module.scss';
import React from 'react';
import { Button, Input, Space, Badge } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);
const { Search } = Input;
function HomePageHeader() {
    const [, setSearchParams] = useSearchParams();
    const onSearch = (value) => setSearchParams({ search: value });
    return (
        <>
            <Header className={cx('header')}>
                <div className={cx('header-block')}>
                    <div className={cx('input-area')}>
                        <Search placeholder="喫茶店の名前を探す" onSearch={onSearch} />
                    </div>
                    <div className={cx('information')}>
                        <Space size={60}>
                            <Button type="primary" className={cx('header-btn')}>
                                客
                            </Button>
                            <Badge count={15}>
                                <BellOutlined className={cx('header-icon')} />
                            </Badge>

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
