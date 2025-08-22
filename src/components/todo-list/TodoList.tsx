import mocksTodos from "@/mocks/todos.mocks"
import { useNavigate } from "react-router-dom";
import TodoListItem from "@/components/todo-list-item/TodoListItem";
import {ROUTES_ENDPOINTS} from "@/components/routers/consts";

const TodoList = () => {
    const navigate = useNavigate();

    const handleRedirectToVideoRoom = (id: number) => {
        navigate(ROUTES_ENDPOINTS.VideoRoom + id)
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="max-w-2xl w-full     flex flex-col max-h-[70vh]">
                <h1 className="text-3xl font-light text-gray-800 my-4 text-center">
                    Список задач
                </h1>
                <ul className="overflow-y-auto">
                    {mocksTodos.map((todo) => (
                        <TodoListItem
                            key={todo.id}
                            {...todo}
                            buttonLabel="Перейти к видео-комнате"
                            onClick={handleRedirectToVideoRoom}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default TodoList;