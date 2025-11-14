import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Waves } from "lucide-react"
import { RadioPlayer } from "../components/RadioPlayer"
import logo from "../../assets/logo_radio_plenitud.png"
import { VideoPlayer } from "../../components/VideoPlayer"
import { useEffect, useState } from "react"
import { RadioPlayerDesktop } from "../components/RadioPlayerDesktop"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { programs } from "@/data/programs.radio"

export const RadioPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    //  mt-20 ml-5 mr-5 lg:sticky lg:top-32
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
            <div className="flex justify-items-center justify-between ">
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors m-5">
                    <CardHeader >
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Ahora en vivo</CardTitle>
                                <CardDescription>87.7 MHz - En Vivo</CardDescription>
                            </div>
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <Waves className="w-6 h-6 text-primary animate-pulse" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>

                        {
                            isDesktop ? (
                                <div className="m-5">
                                    <RadioPlayerDesktop />
                                </div>
                            ) : (
                                <h1>Vista mobil</h1>
                            )
                        }
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
                        {/* Grilla programas */}

                    </CardContent>
                </Card>
                <div className="w-1/2 m-5">
                    <h3>Grilla de programas</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Nombre</TableHead>
                                <TableHead className="text-right">Horario</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {programs.map(program => (
                                <TableRow key={program.name}>
                                    <TableCell>{program.name}</TableCell>
                                    <TableCell className="text-right">{program.hour}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}