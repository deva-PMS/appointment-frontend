import { Card, Col, Row } from 'antd'
import React from 'react'

const MyProfile = () => {
    return (
        <>
            
                <Row className='flex justify-around bg-blue-700 p-10'>

                    <div className='bg-blue-300 rounded-lg shadow-inner p'>
                        <div className='h-96 w-96 shadow-2xl'>
                            <img src="/name.jpg" alt="" className='sm:h-full md:h-full sm:w-full md:w-full rounded-t-lg ' />
                        </div>
                        <h1 className="text-3xl font-bold pt-5  px-5">Dr.RV Singh</h1>
                        <p className="font-medium px-5 pb-5">Paediatric Surgeon</p>
                    </div>
                    <div className=''>
                        <div className="leading-6 my-5">
                            <h1 className="text-blue-400 font-bold">Profile</h1>
                            <h1 className="font-bold text-xl">Dr.RV Singh</h1>
                            <p className="mt-4">M.S,M.CH(Paediatric Surgeon)</p>
                            <p className="">Medic General Madicol Hospital Lucknow (up) INDIA</p>
                        </div>

                        <h1 className="text-lg font-bold text-blue-300">SPECIALITY</h1>
                        <div className="flex gap-5 mt-2">
                            <p className=" px-2 rounded-full border border-indigo-600 text-center">Paediatric</p>
                            <p className=" px-2 rounded-full border border-indigo-600 text-center">Endoscopic</p>
                        </div>
                        <div className="flex gap-5 mt-3">
                            <p className="px-2 rounded-full border border-indigo-600 text-center">Laparoscopy</p>
                            <p className="px-2 rounded-full border border-indigo-600 text-center">Thoracoscopy</p>
                        </div>
                        <div className="mt-8 ">
                            <p className="font-medium"><span className='font-bold text-blue-300 mr-5'>EXPERIENCE</span>22Years+</p>
                            <p className="font-medium"><span className='font-bold text-blue-300 mr-5'>LANGUAGES</span>Engilsh,Hindi</p>
                            <p className="font-medium"><span className='font-bold text-blue-300 mr-5'>TYPES OF</span>Full Time Physician+</p>
                        </div>
                    </div>


                </Row>
            



        </>
    )
}

export default MyProfile