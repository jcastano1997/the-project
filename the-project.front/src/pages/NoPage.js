import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons"

export default function NoPage() {
    return (<div className="absolute top-0 left-0 flex justify-center w-full h-full text-white bg-black">
        <div className="my-auto text-center">
            <div className="mb-4 text-9xl">
                <span className="pr-4">4</span>
                <span className="-mt-4 text-8xl"><FontAwesomeIcon icon={faClipboardQuestion} /></span>
                <span className="pl-4">4</span>
            </div>
            <span className="text-3xl">Page not found</span>
        </div>
    </div>)
}
