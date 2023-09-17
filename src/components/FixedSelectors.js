import React from "react"
import { ThemeSelector } from "../features/theme/ThemeSelector"
import "./DashboardSidebar.css"

export const FixedSelectors = () => {
    return (<div className="absolute top-0 right-0 flex h-full">
        <ThemeSelector />
    </div>)
}
