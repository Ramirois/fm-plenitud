import { CloudinaryVideo } from "@/video/components/CloudinaryVideo"
import type { VideoPlayerProps } from "@/video/type/types"
import type { FC } from "react"



export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
    return (
        <CloudinaryVideo {...props} />
    )
}