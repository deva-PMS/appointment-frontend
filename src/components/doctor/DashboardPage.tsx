"use client"
import { ArrowUpOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Flex, Row } from "antd";


const DashboardPage = () => {
    return (<>
        <Row gutter={[16,16]} className="  gap-5" >
            <Col xs={24} sm={24} md={24} lg={8} className="gap-5">
            <Flex vertical gap={10}>

                <Card className=" ">
                    <div className="flex justify-between">

                        <div className="leading-10">
                            <h1 className="text-xl ">Total Patient</h1>
                            <p className="font-bold text-2xl">129</p>
                            <p className="text-green-400"> <ArrowUpOutlined />15% From Last Week</p>
                        </div>

                        <div className="">
                            <Avatar shape="square" size={64} icon={<UserSwitchOutlined /> } className="bg-green-300" />


                        </div>
                    </div>
                </Card>
                <Card className=" ">
                    <div className="flex justify-between">

                        <div className="leading-10">
                            <h1 className="text-xl ">Patients Today</h1>
                            <p className="font-bold text-2xl">122</p>
                            <p className="text-red-400"><ArrowUpOutlined /> 15% From Yesterday</p>
                        </div>

                        <div className="">
                            <Avatar shape="square" size={64} icon={<UserAddOutlined />} className="bg-green-300" />


                        </div>
                    </div>

                </Card>
                <Card className="leading-10">
                    <div className="flex items-center justify-between">

                        <div className="">
                            <h1 className="text-xl ">Appointments Today</h1>
                            <p className="font-bold text-2xl">125</p>
                            <p className="text-green-400"> <ArrowUpOutlined />20% From Yesterday</p>
                        </div>

                        <div className="">
                            <Avatar shape="square" size={64} icon={<CalendarOutlined />} className="bg-green-300" />


                        </div>
                    </div>
                </Card>
                </Flex>

            </Col>

            <Col xs={24} sm={24} md={24} lg={15}>
                <Card>
                    <div className="">
                        <h1 className="text-4xl font-medium mb-5">Appointment</h1>

                    </div>
                    <hr />

                    <div className="overflow-scroll md:overflow-hidden lg:overflow-hidden ">
                        <div className="mt-5  flex  items-center  justify-between hover:bg-green-100 p-4 rounded-lg gap-10 shadow-md">
                            <div className="flex items-center gap-x-3">
                                <Avatar shape="square" size={70} src="/name.jpg" />
                                <div className="">
                                    <span>#2465655</span>
                                    <h1 className="text-xl">abhi</h1>
                                </div>
                            </div>
                            <div className="text-nowrap">
                                <p className="">11 nov 2024 10.20 AM</p>
                                <span className="bg-green-800 px-3 py-1 rounded-xl text-white ">General</span>
                            </div>
                            
                                <div className="flex gap-3 text-3xl ">
                                    <CloseCircleOutlined className="text-red-500"/>
                                    <CheckCircleOutlined className="text-green-500"/>
                                </div>
                        

                        </div>
                        <div className="mt-5 flex items-center  justify-between hover:bg-green-100 p-4 rounded-lg gap-10 shadow-md">
                            <div className="flex items-center gap-x-3">
                                <Avatar shape="square" size={70} src="/name.jpg" />
                                <div className="">
                                    <span>#2465655</span>
                                    <h1 className="text-xl">abhi</h1>
                                </div>
                            </div>
                            <div className="text-nowrap">
                                <p className="">11 nov 2024 10.20 AM</p>
                                <span className="bg-green-800 px-3 py-1 rounded-xl text-white ">General</span>
                            </div>
                           
                                <div className="flex gap-3 text-3xl">
                                    <CloseCircleOutlined className="text-red-500"/>
                                    <CheckCircleOutlined className="text-green-500"/>
                                </div>
                             

                        </div>
                        <div className="mt-5 flex items-center  justify-between hover:bg-green-100 p-4 rounded-lg gap-10 shadow-md">
                            <div className="flex items-center gap-x-3">
                                <Avatar shape="square" size={70} src="/name.jpg" />
                                <div className="">
                                    <span>#2465655</span>
                                    <h1 className="text-xl">abhi</h1>
                                </div>
                            </div>
                            <div className="text-nowrap">
                                <p className="">11 nov 2024 10.20 AM</p>
                                <span className="bg-green-800 px-3 py-1 rounded-xl text-white ">General</span>
                            </div>
                            
                                <div className="flex gap-3 text-3xl">
                                    <CloseCircleOutlined className="text-red-500" />
                                    <CheckCircleOutlined className="text-green-500"/> 
                                </div>
                            

                        </div>


                    </div>
                </Card>

            </Col>
        </Row>





    </>

    );
}
export default DashboardPage