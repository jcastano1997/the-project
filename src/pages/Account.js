import { supabase } from "../App"

const logout = async () => {
    const { error } = await supabase.auth.signOut()
}

export default function Account() {
    return (<div className="w-full h-full">
        <div className="w-full max-w-xl mx-auto shadow h-full bg-white p-10 overflow-y-auto">
            <h1 className="text-xl">Account</h1>
            <button onClick={logout} className="btn btn-primary">Logout</button>
        </div>
    </div>)
}
