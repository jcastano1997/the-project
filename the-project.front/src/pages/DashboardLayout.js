import { Outlet } from "react-router-dom"
import DashboardSidebar from "../components/DashboardSidebar"
import { useSelector } from "react-redux"

export default function Layout() {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme)
  return (
    <div className={`flex w-full h-full text-${selectedTheme}-text bg-${selectedTheme}-bg-body`}>
      <DashboardSidebar />
      <div className={`w-full h-full pl-20`}>
        <div className={`relative w-full h-full`}>
          <div className={`w-full h-full max-w-xl mx-auto shadow p-10 overflow-y-auto bg-${selectedTheme}-bg `}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
