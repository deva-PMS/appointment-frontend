import { redirect } from 'next/navigation'

const page = () => {
  return redirect("/doctor/dashboard")
}

export default page