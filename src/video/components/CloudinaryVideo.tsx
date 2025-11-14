import { useEffect, useMemo, useRef, type FC } from "react"

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import type { VideoPlayerProps } from "../type/types"
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
})

export const CloudinaryVideo: FC<VideoPlayerProps> = ({
    id,
    options,
    controls = false,
    autoPlay = true,
    muted = true,
    loop = false
}) => {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const cldVid = useMemo(() => {
        const video = cld.video(id);

        if (options?.width || options?.height) {
            let resizeAction = fill();

            if (options.width) resizeAction = resizeAction.width(options.width)
            if (options.height) resizeAction = resizeAction.height(options.height)


            video.resize(resizeAction);
        }

        if (options?.roundCorners) {
            video.roundCorners(byRadius(options.roundCorners));
        }

        return video;
    }, [id, options?.width, options?.height, options?.roundCorners]);


    // Intentar reproducir apenas monta
    useEffect(() => {
        if (!videoRef.current) return;

        const p = videoRef.current.play();
        if (p && p.catch) {
            p.catch((err) => {
                // Si llega acá, el navegador bloqueó el autoplay
                console.warn("Autoplay bloqueado por el navegador:", err);
            });
        }
    }, []);

    return (
        <AdvancedVideo
            cldVid={cldVid}
            controls={controls}
            autoPlay={autoPlay}
            playsInline
            muted={muted}
            loop={loop}
            innerRef={videoRef}
            style={{ pointerEvents: "none" }}
        />
    )
}