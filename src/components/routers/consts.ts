import { lazy } from "react";

const VideoRoom = lazy(() => import("@/components/video-room/VideoRoom"))
const TodoList = lazy(() => import("@/components/todo-list/TodoList"))

export const ROUTES_ENDPOINTS = {
    Todos: "/",
    VideoRoom: "video-room/"
}

export const ROUTES = [
    { path: ROUTES_ENDPOINTS.Todos, element: TodoList },
    { path: ROUTES_ENDPOINTS.VideoRoom + ":id", element: VideoRoom }
]