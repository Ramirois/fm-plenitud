import { CustomFooter } from "@/home/components/CustomFooter"
import { CustomHeader } from "@/home/components/CustomHeader"
import { Outlet } from "react-router"

export const RadioLayout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </>
  )
}