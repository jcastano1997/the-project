import { Auth } from "@supabase/auth-ui-react"
import { useSelector } from "react-redux"

export const SupabaseLayout = (props) => {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme)
  return (
    <div className={`flex w-full h-full bg-${selectedTheme}-bg-body`}>
        <div className={`mx-auto my-auto w-96 p-4 rounded bg-${selectedTheme}-bg`}>
            <Auth supabaseClient={props.supabaseClient} theme={props.theme} appearance={props.appearance} />
        </div>
    </div>
  )
}
