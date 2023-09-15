<template>
  <main class="w-screen h-screen">
    <div class="w-full px-4 pt-10">
        <div class="shadow bg-skin-background">
            <div class="flex flex-wrap p-8 gap-y-4">
                <div v-for="post in posts" :key="post.id" class="w-full">
                    <PostCard :title="post.title" :body="post.body" :created_at="post.created_at" :user_name="post.user_id"/>
                </div>
                <div class="w-full">
                    <PostCard :title="'segundo post'" :body="'no mucho la verdad'" :created_at="'Agosto 4'" :user_name="'Juan'"/>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import supabase from '@/services/supabase'
import PostCard from '../../components/blog/PostCard.vue'

const posts = ref([])

onMounted(async () => {
    const { data, error } = await supabase.from('posts').select()
    posts.value = data
    console.log(data)
    console.log(error)
    // const { error_insert } = await supabase.from('posts').insert({ id: 1, title: 'Denmark', body: 'Paso por acá' })
})
</script>
