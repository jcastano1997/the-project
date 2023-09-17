import { supabase } from "../App"
import { useSelector } from "react-redux"

export default function Account() {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
    }

    return (<div className="w-full h-full">
        <div className={`w-full max-w-xl mx-auto shadow h-full bg-${selectedTheme}-bg p-10 overflow-y-auto`}>
            <h1 className="text-xl">Account</h1>
            <button onClick={logout} className="btn btn-primary">Logout</button>
        </div>
    </div>)
}
