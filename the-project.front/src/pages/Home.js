import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { LightBulb } from "../components/LightBulb"

export default function Home() {
    return (<>
        <div className="relative w-full h-full">
            <div className="relative w-full h-full" style={{"z-index": "1"}}>
                <div className="flex justify-center">
                    <FontAwesomeIcon className="pt-2 pr-2" icon={faCoffee} />
                    <h1 className="text-xl">The project</h1>
                </div>
                <div className="flex pt-16">
                    <div className="w-auto">
                        <p>To continue with the setup, you need a WhatsApp Business account.</p>
                        <a className="text-blue-500" target="blank" href="https://business.whatsapp.com/">Click here to read about Whatsapp Business</a>
                    </div>
                    <div className="">
                        <button>Configure</button>
                    </div>
                </div>
            </div>
            <div className="p-20" style={{"background-color": "#fff"}}>
                <FontAwesomeIcon size="60px" style={{"color": "#bd3f2e"}} className="text-white fa-2xl" icon={faLanguage} />
            </div>
            <div className="absolute top-0 flex w-full h-full select-none" style={{"z-index": "0"}}>
                <div className="mx-auto my-auto">
                    <LightBulb />
                </div>
            </div>
        </div>
    </>)
}
