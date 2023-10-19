
import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Button } from "../../components/common/Button"
import { HtmlEditor } from "../../components/common/HtmlEditor"
import React, { useRef } from 'react'
import { BlogServices } from "../../services/supabase/BlogServices"
import { useNavigate } from 'react-router-dom'

export const FormBlog = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const editorRef = useRef(null)
    const [errorMessage, setErrorMessage] = React.useState('')

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        if (editorRef.current) {
            BlogServices.newPost({title: watch('Title'), body: editorRef.current.getContent(), isPublic: watch('Public')})
            .then(data => {
                console.log(data)
                navigate('/blogs', { replace: true })})
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)})
        }
    }

    return (<>
        <h1>New Post</h1>
        <form className="flex flex-col gap-4">
            <Input label="Title" register={register} errors={errors} required />
            <HtmlEditor editorRef={editorRef} />
            <Select label="Public" register={register} errors={errors} required options={[{value: true, label: 'Yes'}, {value: false, label: 'No'}]} defaultValue={false} />
            <Button onClick={handleSubmit(onSubmit)}>Publish post</Button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>)
}