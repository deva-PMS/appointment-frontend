import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Avatar, Button, Carousel } from 'antd'
import React from 'react'



// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: '400px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',

// };
const cardData = [
  {
    title: "Diagnostic Testing",
    description: "Cardiologists use various diagnostic tests to assess heart health and function.",
    imgSrc: "/img1.jpg",
  },
  {
    title: "Heart Health Monitoring",
    description: "Regular monitoring is essential to ensure that your heart is functioning properly.",
    imgSrc: "/img2.jpg",
  },
  {
    title: "Treatment Plans",
    description: "Personalized treatment plans are created based on diagnostic results.",
    imgSrc: "/img3.jpg",
  },
];


function HomePage() {
  return (
    <>



      <div className=" bg-no-repeat bg-[url('https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-05.png')]  md:bg-cover p-0 m-0">


        <div className=' md:py-20 lg:py-40 py-12 lg:pl-20 px-5 lg:w-[60%] flex flex-col gap-7 '>
          <div className="">
            <span className="bg-white text-nowrap  px-5 py-3  rounded-full ">Every Beat, Every Moment</span>
          </div>
          <div className="gap-2  flex flex-col  animate__bounce animate__slower 3s ">

            <h1 className="lg:text-4xl text-xl  font-bold  leading-relaxed">Preventive care is essential for <span className="font-bold lg:text-5xl text-2xl">Healthy Heart</span>
            </h1>
            <h1 className=" font-medium text-lg">
              We can guide you through issues like Cardiac arrest, Heart Failure, Peripheral Artery Disease, Arrhythmia, Atrial Fibrillation, Cholesterol and High BP.
            </h1>
          </div>


          <div className=" bg-white  p-5 lg:rounded-full rounded-lg gap-5 grid grid-cols-1 md:flex lg:flex justify-between  ">
            <div className="  flex items-center justify-between lg:gap-40 md:gap-40  ">
              <p className="">Loaction</p>
              <EnvironmentOutlined className='hover:bg-blue-400 bg-blue-100 p-2 border rounded-full' />
            </div>
            <div className="flex items-center justify-between lg:gap-40 md:gap-40  ">
              <p className="">Select Date</p>
              <CalendarOutlined className='hover:bg-blue-400 bg-blue-100 p-2 border rounded-full' />
            </div>
            <div className="flex  lg:justify-end md:justify-end ">
              <Button type="primary" shape="round" block >
                Search Doctor
              </Button>
            </div>
          </div>


        </div>
      </div>
      <div className=" bg-gradient-to-t from-blue-300  via-blue-400   to-transparent">
        <div className="md:py-28 md:px-48 px-5 py-10">
          <p className="md:text-5xl text-2xl  font-bold text-center">We Provide a Best Service For You</p>
          <p className="text-xl text-center mt-9 text-gray-600">Cardiology services encompass a wide range of medical services related to diagnosis, treatment, and management of heart conditions & diseases.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-14 md:px-20 px-5  ">
          {cardData.map((card, index) => (
            <div key={index} className="relative h-[100%] w-[100%] rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="bg-gradient-to-t from-black via-gray-800 to-transparent p-4 rounded-b-xl">
                  <p className="text-xl text-white font-bold mb-2">{card.title}</p>
                  <p className="text-white">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

<div className="flex  items-center justify-center pb-10">
<button className="bg-sky-500 hover:bg-sky-700 hover:text-white rounded-full  border py-3 px-10">
  View All Services
</button>
</div>
      </div>







    </>
  )
}



export default HomePage
