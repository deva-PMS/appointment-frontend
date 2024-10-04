import LayoutPage from '@/components/doctor/LayoutPage';
import React from 'react'
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <LayoutPage>
      {children}
    </LayoutPage>
  )
}
export default layout