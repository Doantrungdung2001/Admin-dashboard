import classNames from 'classnames/bind';
import styles from './HomePageNavBar.module.scss';
import React from 'react';
import { useState } from 'react';
import { Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { DownOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function HomePageNavBar({ onFilterChange }) {
    const [filter, setFilter] = useState({
        isOpen: false,
        isFree: false,
    });

    const handleFilter = (type) => {
        setFilter((prevStatus) => ({
            ...prevStatus,
            [type]: !prevStatus[type],
        }));

        onFilterChange(type);
    }
    return (
        <>
            <header className={cx('nav')}>
                <div className={cx('nav-area')}>
                    <div>
                        <Button size="small" className={cx('history-btn')}>
                            喫茶店の歴史
                        </Button>
                        <DownOutlined className={cx('down-icon')} />
                    </div>

                    <div>
                        <Space size="large">
                            <Button className={cx('list-btn', { [cx('active')]: filter.isOpen === true})} onClick={() => handleFilter('isOpen')}>営業時開</Button>
                            <Button className={cx('list-btn')}>最寄り</Button>
                            <Button className={cx('list-btn', { [cx('active')]: filter.isFree === true})} onClick={() => handleFilter('isFree')}>混雑状況</Button>
                            <Button className={cx('list-btn')}>日本人の評価</Button>
                        </Space>
                    </div>
                    <div>
                        <Space>
                            <Button icon={<FontAwesomeIcon icon={faSort} />} className={cx('arrange-btn')}>
                                Sort
                            </Button>
                            <Button icon={<FontAwesomeIcon icon={faFilter} />} className={cx('arrange-btn')}>
                                All filters
                            </Button>
                        </Space>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HomePageNavBar;
