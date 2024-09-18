"use client"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'
function Signup() {
    const route = useRouter();
    return (
        <>
            <div className=' flex items-center justify-center'>
                <div className='mt-10'>
                    <button><ArrowLeftOutlined />
                        Back to Signup</button>
                    <h1 className='text-2xl font-bold mt-5'>Signup</h1>
                    <Row>
                        <Col >
                            <Card className=' bg-gray-200 mt-5 mb-5 w-96 ' >
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-3 items-center'>
                                        <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/doctor-icon.svg" alt="" />
                                        <div>
                                            <h1>Doctor</h1>
                                            <p>Welcome to Doctor Signup</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ArrowRightOutlined onClick={() => route.push("/doctor/signup")} className=' w-8 h-8 border rounded-full place-content-center bg-white hover:cursor-pointer hover:bg-blue-700 hover:text-white' />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className=' bg-gray-200 w-96 '>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-3 items-center'>
                                        <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/patient-icon.svg" alt="" />
                                        <div>
                                            <h1>Patient</h1>
                                            <p>Welcome to Patient Signup</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ArrowRightOutlined onClick={() => route.push("/patient/signup")} className=' w-8 h-8 border rounded-full place-content-center bg-white hover:cursor-pointer hover:bg-blue-700 hover:text-white' />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Signup