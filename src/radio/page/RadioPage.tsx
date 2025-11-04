import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Waves } from "lucide-react"
import { RadioPlayer } from "../components/RadioPlayer"
import logo from "../../assets/logo_radio_plenitud.png"

export const RadioPage = () => {
    return (
        <div className="lg:sticky lg:top-32">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Ahora en vivo</CardTitle>
                            <CardDescription>87.7 MHz - En Vivo</CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Waves className="w-6 h-6 text-primary animate-pulse" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Album Art */}
                    <div className="aspect-square bg-linear-to-br from-primary to-primary/50 rounded-xl overflow-hidden">
                        <img
                            src={logo}
                            alt="Album cover"
                            // className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Song Info */}
                    <div className="space-y-1">
                        <h3 className="font-bold text-lg">Radio Plenitud</h3>
                        <p className="text-muted-foreground">Contra la corriente</p>
                    </div>

                    {/* Progress Bar */}
                    {/* <div className="space-y-2">
                        <div className="w-full bg-secondary rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: "42%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>--:--</span>
                            <span>--:--</span>
                        </div>
                    </div> */}

                    {/* Controls */}
                    {/* <div className="flex items-center justify-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <SkipBack className="w-4 h-4" />
                                        </Button>
                                        <Button onClick={() => setIsPlaying(!isPlaying)} size="lg" className="rounded-full w-12 h-12">
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <SkipForward className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="ml-auto">
                                            <Volume2 className="w-4 h-4" />
                                        </Button>
                                    </div> */}
                    <RadioPlayer />
                </CardContent>
            </Card>
        </div>

    )
}