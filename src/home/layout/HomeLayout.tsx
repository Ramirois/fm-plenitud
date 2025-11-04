import { Outlet } from "react-router"
import { CustomHeader } from "../components/CustomHeader"
import { CustomFooter } from "../components/CustomFooter"

export const HomeLayout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </>
  )
}
