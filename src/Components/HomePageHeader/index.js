import classNames from 'classnames/bind';
import styles from './HomePageHeader.module.scss';
import React, { useContext } from 'react';
import { Button, Input, Space, Badge } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink, useSearchParams } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../AuthContext';

const cx = classNames.bind(styles);
const { Search } = Input;
function HomePageHeader() {
    const authContext = useContext(AuthContext);

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

                            <Tippy
                                render={(attrs) => (
                                    <div className="" tabIndex="-1" {...attrs}>
                                        <div className="card" style={{ width: '10rem' }}>
                                            <ul className="list-group list-group-flush">
                                                <NavLink exact to="/user/information">
                                                    <li
                                                        className="list-group-item pt-0 pb-0"
                                                        style={{ color: '#000', textDecoration: 'none' }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faIdBadge}
                                                            className="mr-1"
                                                            style={{ width: '16px' }}
                                                        />
                                                        <span>Profile</span>
                                                    </li>
                                                </NavLink>
                                                <li
                                                    className="list-group-item pt-0 pb-0"
                                                    onClick={() => authContext.logOut()}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faArrowRightFromBracket}
                                                        className="mr-1"
                                                        style={{ width: '16px' }}
                                                    />{' '}
                                                    <span>Log out</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                interactive="true"
                                delay={[0, 1000]}
                                // placement="bottom-end"
                            >
                                <div className={cx('profile', 'header-icon')}>
                                    <UserOutlined />
                                    <DownOutlined className={cx('down-icon')} />
                                </div>
                            </Tippy>
                        </Space>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default HomePageHeader;
