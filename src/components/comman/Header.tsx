"use client"
import { AppstoreFilled, DownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar,Col, Dropdown, Flex,MenuProps, Row, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const items: MenuProps['items'] = [
    {
            key: "/doctor/dashboard",
            label: "Dashboard ",
            icon: <AppstoreFilled />,
      },
      {
        label: 'Appointment',
        key: '1',
      },
];
const Header = () => {
    const router = useRouter();
    return (
        <div>
            <Row justify={'space-around'} className=' p-5 items-center bg-slate-300' >
                <Col className='text-2xl font-bold'>
                    <h1 className="">Doctor</h1>
                </Col>
                <Col className='text-xl'>
                    <Flex className='flex gap-5 '>
                        <Col className='text-xl'><a href="#">Home</a></Col>
                        <Col>  <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='text-xl'>
                                    Doctor
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        </Col>
                        <Col span={2}>  <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='text-xl'>
                                    Patient
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        </Col>
                    </Flex>
                </Col>
                <Col>
                    <Flex className=" gap-4 ">
                    <button type="button" onClick={()=>router.push(" /signin")} className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    <button type="button" onClick={()=>router.push("/signup")} className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                        <div style={{ fontSize: '25px' }}>
                            <ShoppingCartOutlined />
                        </div>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}
export default Header