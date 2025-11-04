import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"

export const FmPlenitudApp = () => {
  return (
    <RouterProvider router={appRoutes} />
  )
}
