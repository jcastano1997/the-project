import { supabase } from "../../SupabaseClient"

export class BlogServices {
    static async fetchPosts() {
        return new Promise(async (resolve, reject) => {
            const { data, error } = await supabase
            .from('posts')
            .select()
            return error ? reject(error) : resolve(data)
        })
    }
    static newPost({title, body, isPublic}) {
        return new Promise(async (resolve, reject) => {
            const { data, error } = await supabase
            .from('posts')
            .insert({ title: title, body: body, is_public: isPublic })
            .select()
            return error ? reject(error) : resolve(data)
        })
    }
    static async editPost({postId, title, body, isPublic}) {
        return new Promise(async (resolve, reject) => {
            const { data, error } = await supabase
            .from('posts')
            .update({ title: title, body: body, is_public: isPublic })
            .eq('id', postId)
            .select()
            return error ? reject(error) : resolve(data)
        })
    }
    static async deletePost({postId}) {
        return new Promise(async (resolve, reject) => {
            const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', postId)
            return error ? reject(error) : resolve()
        })
    }
    static async newComment({postId, message}) {
        return new Promise(async (resolve, reject) => {
            const { data, error } = await supabase
            .from('comments')
            .insert({ post_id: postId, message: message })
            .select()
            return error ? reject(error) : resolve(data)
        })
    }
}