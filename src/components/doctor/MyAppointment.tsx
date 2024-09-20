
"use client"
import { CheckCircleOutlined, CloseCircleOutlined, EyeOutlined, WechatOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, DatePicker, DatePickerProps, Flex, Row } from 'antd'
import Search from 'antd/es/input/Search';
import React from 'react'




const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const MyAppointment = () => {
    return (
        <>


            <Row className="flex items-center justify-between ">
                <Col>
                    <h1 className="text-4xl font-medium mb-5">Appointment</h1>

                </Col>
                <Col
                    className="">    <Search placeholder="text search " style={{ width: 300 }} />
                </Col>
            </Row>
            <hr />

            <Row gutter={[16, 16]} className=" mt-5 ">
                <Col xs={24} sm={24} md={20} lg={20} >
                    <Row gutter={[16, 16]} >
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div className="flex items-center justify-center gap-5 bg-blue-100 rounded-lg py-1 px-3 hover:bg-green-300 hover:text-white">
                                <h1 className="text-lg font-medium ">Upcoming</h1>
                                <p className="text-lg font-medium bg-white rounded-lg px-5 text-black">21</p>
                            </div>


                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} className="gap-5">
                            <div className="flex items-center justify-center gap-5 bg-blue-100 rounded-lg py-1 px-3 hover:bg-green-300 hover:text-white">
                                <h1 className="text-lg font-medium ">Cancelled</h1>
                                <p className="text-lg font-medium bg-white rounded-lg px-5 text-black">23</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} className="gap-5">
                            <div className="flex items-center justify-center gap-5 bg-blue-100 rounded-lg py-1 px-3 hover:bg-green-300 hover:text-white">
                                <h1 className="text-lg font-medium ">Completed</h1>
                                <p className="text-lg font-medium bg-white rounded-lg px-5 text-black">212</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} className="">
                    <DatePicker onChange={onChange} />
                </Col>
            </Row>





            <div className="overflow-scroll md:overflow-hidden lg:overflow-hidden  ">
                <div className="mt-5  flex  items-center  justify-between lg:hover:bg-green-100 lg:shadow-md p-4 gap-10">

                    <div className="flex items-center gap-x-3">
                        <Avatar shape="square" size={70} src="/name.jpg" />
                        <div className="font-medium">
                            <span>#2465655</span>
                            <h1 className="text-xl">Abhi</h1>
                        </div>
                    </div>

                    <div className="text-nowrap font-medium">
                        <p className="">11 nov 2024 10.20 AM</p>
                        <p className="  ">General Visit | Audio Coll</p>
                    </div>
                    <div className="font-medium text-nowrap">
                        <p className="">kiya@sk.com</p>
                        +1212 3223 3232
                    </div>

                    <div className="flex gap-3 text-2xl ">
                        <EyeOutlined />
                        <WechatOutlined />
                        <CheckCircleOutlined className="text-green-500" />
                    </div>

                    <a href="#" className='underline text-lg font-medium '>Start Now</a>

                </div>
                <div className="mt-5  flex  items-center  justify-between lg:hover:bg-green-100 p-4 rounded-lg gap-10 lg:shadow-md">
                    <div className="">
                        <div className="flex items-center gap-x-3">
                            <Avatar shape="square" size={70} src="/name.jpg" />
                            <div className="font-medium">
                                <span>#2465655</span>
                                <h1 className="text-xl"> Ranu</h1>
                            </div>
                        </div>
                    </div>
                    <div className="text-nowrap font-medium">
                        <p className="">11 nov 2024 10.20 AM</p>
                        <p className="  ">General Visit | Audio Coll</p>
                    </div>
                    <div className="font-medium">
                        <p className="">kiya@sk.com</p>
                        +1212 3223 3232
                    </div>

                    <div className="flex gap-3 text-2xl ">
                        <EyeOutlined />
                        <WechatOutlined />
                        <CheckCircleOutlined className="text-green-500" />
                    </div>

                    <a href="#" className='underline text-lg font-medium '>Start Now</a>

                </div>
                <div className="mt-5  flex  items-center  justify-between lg:hover:bg-green-100 p-4 rounded-lg gap-10 lg:shadow-md">
                    <div className="">
                        <div className="flex items-center gap-x-3">
                            <Avatar shape="square" size={70} src="/name.jpg" />
                            <div className="font-medium">
                                <span>#2465655</span>
                                <h1 className="text-xl">Amit</h1>
                            </div>
                        </div>
                    </div>
                    <div className="text-nowrap font-medium">
                        <p className="">11 nov 2024 10.20 AM</p>
                        <p className="  ">General Visit | Audio Coll</p>
                    </div>
                    <div className="font-medium">
                        <p className="">kiya@sk.com</p>
                        +1212 3223 3232
                    </div>

                    <div className="flex gap-3 text-2xl  ">
                        <EyeOutlined />
                        <WechatOutlined />
                        <CheckCircleOutlined className="text-green-500" />
                    </div>

                    <a href="#" className='underline text-lg font-medium '>Start Now</a>

                </div>
                <div className="mt-5  flex  items-center  justify-between lg:hover:bg-green-100 p-4 rounded-lg gap-10 lg:shadow-md">
                    <div className="">
                        <div className="flex items-center gap-x-3">
                            <Avatar shape="square" size={70} src="/name.jpg" />
                            <div className="font-medium">
                                <span>#2465655</span>
                                <h1 className="text-xl">Amit</h1>
                            </div>
                        </div>
                    </div>
                    <div className="text-nowrap font-medium">
                        <p className="">11 nov 2024 10.20 AM</p>
                        <p className="  ">General Visit | Audio Coll</p>
                    </div>
                    <div className="font-medium">
                        <p className="">kiya@sk.com</p>
                        +1212 3223 3232
                    </div>

                    <div className="flex gap-3 text-2xl ">
                        <EyeOutlined />
                        <WechatOutlined />
                        <CheckCircleOutlined className="text-green-500" />
                    </div>

                    <a href="#" className='underline text-lg font-medium '>Start Now</a>

                </div>



            </div>



        </>
    )
}

export default MyAppointment