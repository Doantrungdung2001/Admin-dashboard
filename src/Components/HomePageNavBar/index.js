import classNames from 'classnames/bind';
import styles from './HomePageNavBar.module.scss';
import React from 'react';
import { Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { DownOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function HomePageNavBar() {
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
                            <Button className={cx('list-btn')}>日本人の評価</Button>
                            <Button className={cx('list-btn')}>日本人の評価</Button>
                            <Button className={cx('list-btn')}>日本人の評価</Button>
                            <Button className={cx('list-btn')}>日本人の評価</Button>
                        </Space>
                    </div>
                    <div>
                        <Space>
                            <Button icon={<FontAwesomeIcon icon={faSort} />} className={cx('arrange-btn')}>
                                Sort
                            </Button>
                            <Button icon={<FontAwesomeIcon icon={faFilter} />} className={cx('arrange-btn')}>
                                Filter
                            </Button>
                        </Space>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HomePageNavBar;
