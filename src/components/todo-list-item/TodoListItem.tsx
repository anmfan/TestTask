import { TodoListItemProps } from "@/components/todo-list-item/types";

const TodoListItem = (props: TodoListItemProps) => {
    const { id, status, onClick, title, buttonLabel } = props

    return (
        <li
            key={id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
        >
            <section className="flex">
                <div className="flex-1">
                    <h3 className="text-gray-900 font-normal">{title}</h3>
                    <div className="flex gap-3 mt-1">
                        <span className="text-xs text-gray-500">ID: {id}</span>
                        <span className={`text-xs ${status ? "text-green-500" : "text-amber-500"}`}
                        >
                            {status ? "Завершено" : "В процессе"}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => onClick(id)}
                    type="button"
                    title={buttonLabel}
                    aria-label={buttonLabel}
                    className="btn-primary"
                >
                    Видео-комната
                </button>
            </section>
        </li>
    );
};

export default TodoListItem;