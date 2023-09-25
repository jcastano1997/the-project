import "./index.css"
import { useState, useEffect } from "react"
import { supabase } from "./SupabaseClient"
import { SupabaseTheme } from "./SupabaseTheme"

import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import { HomeBlog } from "./pages/blog/HomeBlog";
import { FormBlog } from "./pages/blog/FormBlog";
import Account from "./pages/Account";
import NoPage from "./pages/NoPage";
import { useSelector } from "react-redux"
import { FixedSelectors } from "./components/FixedSelectors"
import { SupabaseLayout } from "./pages/SupabaseLayout"

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
      <FixedSelectors />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<HomeBlog />} />
          <Route path="blogs/new" element={<FormBlog />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>)
  }
}
