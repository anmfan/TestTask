import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import VideoRoomStreams from "@/components/video-room-streams/VideoRoomStreams";

const VideoRoom = () => {
    const [muted, setIsMuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const { id } = useParams()

    const toggleMute = () => {
        const stream = videoRef.current.srcObject as MediaStream;
        if (stream) {
            stream.getAudioTracks().forEach(track => track.enabled = muted)
            setIsMuted(prev => !prev)
        }
    }

    return (
        <main className="min-h-screen flex justify-center flex-col items-center">
            <div className="h-full text-center">
                <h1 className="text-3xl font-semibold mb-4">Видео-комната задачи #{id}</h1>
                <div className="mb-4">
                    <VideoRoomStreams videoRef={videoRef} />
                </div>
                <button
                    onClick={toggleMute}
                    className={`px-4 py-2 rounded-lg font-medium text-white shadow-md transition-colors
                duration-200 ${muted ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
                >
                    {muted ? "Включить микрофон" : "Выключить микрофон"}
                </button>
            </div>
        </main>
    );
};

export default VideoRoom;