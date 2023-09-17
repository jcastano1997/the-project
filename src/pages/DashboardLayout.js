import { Outlet } from "react-router-dom"
import DashboardSidebar from "../components/DashboardSidebar"
import { useSelector } from "react-redux"

export default function Layout() {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme)
  return (
    <div className={`flex w-full h-full text-${selectedTheme}-text bg-${selectedTheme}-bg-body`}>
      <DashboardSidebar />
      <div className={`w-full h-full pl-20`}>
        <Outlet />
      </div>
    </div>
  )
}
