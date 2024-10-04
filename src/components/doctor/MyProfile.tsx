
"use client"

import React from 'react';
import { Row, Col, Card, Image, Typography, Tag } from 'antd';

const { Title, Text } = Typography;

const MyProfile = () => {
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      style={{ backgroundColor: '#e11bc94d', padding: '20px' }}
    >
      {/* Profile Image Section */}
      <Col xs={24} md={12} lg={8}>
        <Card

          bordered={false}
          style={{ backgroundColor: '#92ee70', borderRadius: '10px' }}
          bodyStyle={{ padding: 0 }}
        >

          <img
            className='h-96 w-full object-cover rounded-t-lg' // Tailwind classes for 70% height, full width, cover the image, and top rounded corners
            src="/name.jpg"
            alt="Dr. RV Singh"

          />
          <div style={{ padding: '16px' }}>
            <Title level={3} style={{ textAlign: 'center' }}>Dr. RV Singh</Title>
            <Text style={{ display: 'block', textAlign: 'center', fontWeight: '500' }}>
              Paediatric Surgeon
            </Text>
          </div>
        </Card>
      </Col>

      {/* Profile Information Section */}
      <Col xs={24} md={12} lg={12}>
        <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
          {/* Profile Details */}
          <div style={{ marginBottom: '16px' }}>
            <Title level={4} style={{ color: '#60A5FA' }}>Profile</Title>
            <Title level={5}>Dr. RV Singh</Title>
            <Text>M.S, M.CH (Paediatric Surgeon)</Text>
            <br />
            <Text>Medic General Medical Hospital, Lucknow (UP), INDIA</Text>
          </div>

          {/* Specialities */}
          <div style={{ marginBottom: '16px' }}>
            <Title level={4} style={{ color: '#60A5FA' }}>Speciality</Title>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <Tag color="blue">Paediatric</Tag>
              <Tag color="blue">Endoscopic</Tag>
              <Tag color="blue">Laparoscopy</Tag>
              <Tag color="blue">Thoracoscopy</Tag>
            </div>
          </div>

          {/* Experience, Languages, Type */}
          <div>
            <Title level={4} style={{ color: '#60A5FA' }}>Details</Title>
            <Text>
              <strong style={{ color: '#60A5FA' }}>Experience: </strong>22 Years+
            </Text>
            <br />
            <Text>
              <strong style={{ color: '#60A5FA' }}>Languages: </strong>English, Hindi
            </Text>
            <br />
            <Text>
              <strong style={{ color: '#60A5FA' }}>Type: </strong>Full-Time Physician+
            </Text>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default MyProfile;
