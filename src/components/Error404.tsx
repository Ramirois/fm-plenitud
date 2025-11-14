import { CustomHeader } from "@/home/components/CustomHeader"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export const Error404 = () => {
    return (
        <div className="overflow-hidden">
            <CustomHeader />
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
                <div className="w-full h-1/2">
                    <DotLottieReact
                        src="/404-not-found.json"
                        loop
                        autoplay
                    />
                </div>
            </section>
        </div>
    )
}