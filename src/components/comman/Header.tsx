 "use client";
import { AppstoreFilled, DownOutlined, MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Dropdown, MenuProps, Row, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
    {
        key: "/doctor/dashboard",
        label: "Dashboard",
        icon: <AppstoreFilled />,
    },
    {
        label: 'Appointment',
        key: '1',
    },
];

const Header = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            {/* Main Header */}
            <Row justify={'space-between'} align="middle" className="p-5 bg-slate-300">
                <Col className="text-2xl font-bold">
                    <h1 className="text-lg md:text-2xl">Doctor</h1>
                </Col>

                {/* Desktop Navigation */}
                <Col className="hidden md:flex md:text-xl">
                    <div className="flex gap-5 items-center">
                        <Col className="text-xl">
                            <a href="#">Home</a>
                        </Col>
                        <Col>
                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className="text-xl">
                                        Doctor
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className="text-xl">
                                        Patient
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </div>
                </Col>

                {/* Right Section: Cart, Avatar, Buttons */}
                <Col>
                    <div className="flex gap-4 items-center">
                        {/* Sign In and Register */}
                        <button
                            type="button"
                            onClick={() => router.push("/signin")}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:hidden lg:block dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push("/signup")}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:hidden lg:block dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Register
                        </button>

                        {/* Cart and Avatar */}
                        <div className="hidden md:block" style={{ fontSize: '25px' }}>
                            <ShoppingCartOutlined />
                        </div>
                        <div className="hidden md:block">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </div>

                        {/* Hamburger Icon (Mobile only) */}
                        <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <MenuOutlined className="text-2xl" />
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <Row justify="center" className="md:hidden bg-slate-300 py-3">
                    <Col span={24} className="text-center">
                        <a href="#" className="block py-2 text-lg">Home</a>
                    </Col>
                    <Col span={24} className="text-center">
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()} className="block py-2 text-lg">
                                Doctor
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={24} className="text-center">
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()} className="block py-2 text-lg">
                                Patient
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={24} className="text-center">
                        <button
                            type="button"
                            onClick={() => router.push("/signin")}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign in
                        </button>
                    </Col>
                    <Col span={24} className="text-center">
                        <button
                            type="button"
                            onClick={() => router.push("/signup")}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Register
                        </button>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default Header;
