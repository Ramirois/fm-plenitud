
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { STREAM_URL } from "@/api/radio.api";

export function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTogglePlay = async () => {
    setError(null);

    // 2) Crear el objeto Audio si no existe
    if (!audioRef.current) {
      audioRef.current = new Audio(STREAM_URL);

      audioRef.current.addEventListener("playing", () => {
        setIsPlaying(true);
      });

      audioRef.current.addEventListener("pause", () => {
        setIsPlaying(false);
      });

      audioRef.current.addEventListener("error", () => {
        setError("Error al reproducir el stream.");
      });
    }

    // 3) Play / Pause
    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
      } catch (e) {
        console.error(e);
        setError("El navegador bloqueó la reproducción automática.");
      }
    } else {
      audioRef.current.pause();
    }
  };

  // Limpiar el audio al desmontar el componente
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Button
        size="icon"
        className="rounded-full"
        onClick={handleTogglePlay}
        disabled={isChecking}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
        <span className="sr-only">
          {isPlaying ? "Pausar radio" : "Reproducir radio"}
        </span>
      </Button>

      <div className="flex flex-col text-sm">
        {isChecking && <span>Conectando...</span>}
        {!isChecking && !error && (
          <span>{isPlaying ? "En vivo ahora mismo" : "Listo para reproducir"}</span>
        )}
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
}