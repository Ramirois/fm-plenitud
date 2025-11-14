import { RadioPlayer } from "./RadioPlayer"
import { VideoPlayer } from "../../components/VideoPlayer"

export const RadioPlayerDesktop = () => {
    return (
        <div className="relative group w-full h-full">

            {/* Album Art */}
            <div className=" bg-linear-to-br from-primary to-primary/50 rounded-xl overflow-hidden">
                <VideoPlayer
                    id="video-radio_vkrugv"
                    controls={false}
                    loop={true}
                    options={{ width: 1920, height: 1080, roundCorners: 2 }}
                    muted={true}
                    autoPlay={true} />
            </div>

            {/* Song Info */}
            <div className="
                absolute bottom-0 left-0 w-full
                p-4
                backdrop-blur-md bg-black/40
                text-white
                opacity-0 group-hover:opacity-100
                translate-y-4 group-hover:translate-y-0 transition-all duration-500
                overflow-hidden
                rounded-b-xl
            ">
                <h3 className="font-bold text-lg">Radio Plenitud</h3>
                {/* <p className="text-muted-foreground">Contra la corriente</p> */}
                <p className="text-gray-300 mt-3 mb-3">Contra la corriente</p>
                <RadioPlayer />
            </div>

{/* transition-opacity duration-300 */}
        </div>
    )
}


// ">

//             {/* Album Art */}
//             <div className=" bg-linear-to-br from-primary to-primary/50 rounded-xl overflow-hidden">
//                 <VideoPlayer
//                     id="video-radio_vkrugv"
//                     controls={false}
//                     loop={true}
//                     options={{ width: 1920, height: 1080, roundCorners: 2 }}
//                     muted={true}
//                     autoPlay={true} />
//             </div>

//             {/* Song Info */}
//             <div className="">
//                 <h3 className="font-bold text-lg">Radio Plenitud</h3>
//                 <p className="text-muted-foreground">Contra la corriente</p>
//             </div>

//             <RadioPlayer />

//         </div>
