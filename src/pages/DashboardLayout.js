import { Outlet } from "react-router-dom"
import DashboardSidebar from "../components/DashboardSidebar"

export default function Layout() {
  return (
    <div className="w-full h-full">
      <DashboardSidebar />
      <div className="w-full h-full pl-20">
        <Outlet />
      </div>
    </div>
  )
}
