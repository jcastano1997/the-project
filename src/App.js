import "./index.css"
import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { SupabaseTheme } from "./SupabaseTheme"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Account from "./pages/Account";
import NoPage from "./pages/NoPage";
import { useSelector } from "react-redux"
import { FixedSelectors } from "./components/FixedSelectors"
import { SupabaseLayout } from "./pages/SupabaseLayout"

export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

export default function App() {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme)
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<>
              <FixedSelectors />
              <SupabaseLayout supabaseClient={supabase} theme={selectedTheme} appearance={{ theme: SupabaseTheme }} />
            </>)
  }
  else {
    return (<>
      <div className="bg-theme-light-bg bg-theme-light-bg-body bg-theme-dark-bg bg-theme-dark-bg-body text-theme-light-text text-theme-dark-text" />
      <FixedSelectors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>)
  }
}
