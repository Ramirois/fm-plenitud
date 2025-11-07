import { Play, Radio, Waves, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router"


export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="w-fit bg-green-700">
                                    <Radio className="w-3 h-3" />
                                    FM 87.7 MHz - En Vivo
                                </Badge>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                                    Tu radio <span className="text-primary">FM favorita</span>
                                </h1>
                            </div>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                Escucha FM Plenitud en 87.7 MHz. Música, noticias y entretenimiento en un solo lugar. Totalmente gratuito, siempre
                                en vivo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="text-base" onClick={() => navigate("/radio")}>
                                    <Play className="w-4 h-4" />
                                    Escuchar Ahora
                                </Button>
                                {/* <Button size="lg" variant="outline" className="text-base bg-transparent">
                                    Información de Frecuencia
                                </Button> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="">

            </section>
            <section className="py-24 bg-secondary/30 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">¿Por qué escucharnos?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            La mejor experiencia de radio FM en tu ciudad, totalmente gratuita
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Radio,
                                title: "100% Gratuito",
                                desc: "Acceso ilimitado sin suscripciones. Escucha todo el contenido sin costo",
                            },
                            {
                                icon: Waves,
                                title: "Transmisión en Vivo",
                                desc: "Sintoniza 87.7 MHz. Conexión directa con tus canciones y programas favoritos",
                            },
                            {
                                icon: Users,
                                title: "Comunidad Activa",
                                desc: "Únete a miles de oyentes. Participa en concursos y eventos especiales",
                            },
                        ].map((feature, i) => {
                            const Icon = feature.icon
                            return (
                                <Card key={i} className="border-border/50 hover:border-primary/50 transition-all duration-300 group">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-linear-to-r from-primary/10 to-primary/5 border-primary/20">
                        <CardHeader className="text-center">
                            <CardTitle className="text-4xl mb-4">Sintoniza RadioMax FM 87.7</CardTitle>
                            <CardDescription className="text-lg">
                                Escucha en línea o en tu radio. Música 24/7. Completamente gratis.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Button size="lg">
                                <Play className="w-4 h-4" />
                                Escuchar Ahora
                            </Button>
                            <Button size="lg" variant="outline">
                                Descargar App
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}