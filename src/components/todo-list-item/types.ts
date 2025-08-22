import { Todo } from "@/mocks/types";

export interface TodoListItemProps extends Todo {
    onClick: (id: number) => void;
    buttonLabel: string;
}