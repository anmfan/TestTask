import { useEffect, useState } from "react";
import { openMediaDevices, getAllDevices } from "@/components/video-room/api";
import { VideoRoomStreamsProps } from "@/components/video-room-streams/types";

const VideoRoomStreams = ({ videoRef }: VideoRoomStreamsProps) => {
    const [devices, setDevices] = useState({ video: false, audio: false })

    useEffect(() => {
        const openStream = async () => {
            const allDevices = await getAllDevices();

            const hasVideo = allDevices.some(device => device.kind === "videoinput")
            const hasAudio = allDevices.some(device => device.kind === "audioinput")

            setDevices({ video: hasVideo, audio: hasAudio })

            if (!hasVideo && !hasAudio) return;

            try {
                videoRef.current.srcObject = await openMediaDevices({ video: hasVideo, audio: hasAudio });
            } catch (error) {
                console.error("Ошибка доступа к устройствам", error)
            }
        }
        openStream()

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach(track => track.stop())
            }
        }
    }, []);

    return (
        <div className="relative w-150 h-80 bg-black rounded-lg shadow-md overflow-hidden flex items-center justify-center">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
            />
            {!devices.video && (
                <span className="absolute text-white text-lg font-semibold bg-black/50 px-3 py-1 rounded">Камера не найдена</span>
            )}
        </div>
    );
};

export default VideoRoomStreams;