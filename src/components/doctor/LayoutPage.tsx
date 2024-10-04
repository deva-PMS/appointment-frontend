"use client";
import {
  AppstoreFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Menu, MenuProps, Rate, Row } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/doctor/dashboard",
    label: "Dashboard ",
    icon: <AppstoreFilled />,
  },

  {
    key: "/doctor/appointment",
    label: "My appointment",
    icon: <UserOutlined />,
  },
  {
    key: "/doctor/profile",
    label: "My Profile",
    icon: <UserOutlined />,
  },


];

const LayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    router.push(e.key);
  };

  return (


    <>
 
      <Row className="mt-10  gap-5" justify="center">
        <Col xs={24} md={6}>
          <div className="sticky ">
            <Card className="relative z-10 h-64" styles={{ body: { padding: 5 } }}>
              <div className="h-32 bg-[var(--theme-color)] bg-green-500">

              </div>

              <div className="  font-bold absolute top-[25%] left-[34%] ">
                <Avatar
                  size={110}
                  className=""
                  src="/doctor.jpg"
                />
                <div className="   font-bold text-center ">
                  <h1 className="text-2xl mt-4">DEVA</h1>
                  <p>Doctor</p>
                </div>
              </div>


            </Card>

            <Card className="font-semibold !mt-5" classNames={{ body: "!px-0" }}>
              <h1 className="text-2xl text-black px-5 my-5">Dashboard</h1>
              <Menu
                onClick={onClick}
                // style={{ width: 256 }}
                defaultSelectedKeys={["/docter/dashboard"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
            </Card>
          </div>
        </Col>

        <Col xs={24} md={16}>
          <Card>{children}</Card>
        </Col>
      </Row>
    </>
  );
};

export default LayoutPage;
