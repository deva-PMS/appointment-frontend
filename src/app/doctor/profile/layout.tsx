import LayoutPage from '@/components/doctor/LayoutPage';
import React from 'react'
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <LayoutPage children={children} />
  )
}
export default layout