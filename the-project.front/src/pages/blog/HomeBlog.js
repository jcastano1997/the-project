import { BlogServices } from "../../services/supabase/BlogServices"
import { useState } from 'react'
import { useSelector } from "react-redux"
import parse from 'html-react-parser'

export const HomeBlog = () => {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)
    const [posts, setPosts] = useState([])

    BlogServices.fetchPosts()
    .then(data => {
        console.log(data)
        setPosts(data)})
    .catch(error => console.error(error))

    return(<>
        <h1 className="pb-4">Blog Articles</h1>
        {posts.length === 0 && 
        <div className="flex content-center justify-center h-52">
            <div className="my-auto text-xl text-center">
                No find Posts, please try again later...
            </div>
        </div>}
        <div className="flex flex-col gap-4">
            {posts.map(post => <div className={`relative p-2 border-2 border-${selectedTheme}-primary rounded-lg bg-white text-black`} key={post.id} >
                <div className="flex">
                    <h2 className="text-xl">{post.title}</h2>
                    <span className="mt-auto mb-0 ml-2 text-sm text-gray-500 cursor-pointer">by {post.user_id}</span>
                </div>
                <hr/>
                <div className="p-4">
                    {parse(post.body)}
                </div>
                <hr className="mb-3"/>
                <div className="absolute bottom-0 right-0 text-sm text-gray-500">
                    {post.created_at}
                </div>
            </div>)}
        </div>
    </>)
}