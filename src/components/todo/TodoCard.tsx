import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
// import { useAppDispatch } from "@/redux/hook";
// import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import EditTodoModal from "./EditTodoModal";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();

  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggleState = () => {
    // dispatch(toggleComplete(id));
    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
  };

  const deleteTodoServer = (id) => {
    deleteTodo(id);
    // console.log(id);
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        onChange={handleToggleState}
        type="checkbox"
        name="complete"
        id="complete"
        className=""
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1 ml-3">{title}</p>

      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full 
          ${priority === "high" ? "bg-red-500" : ""}
          ${priority === "medium" ? "bg-yellow-500" : ""}
          ${priority === "low" ? "bg-green-500" : ""}
          `}
        ></div>
        <p>{priority}</p>
      </div>

      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500 font-medium">Done</p>
        ) : (
          <p className="text-pink-600 font-medium">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button className="bg-red-500" onClick={() => deleteTodoServer(_id)}>
          <Trash2 className="size-5" />
        </Button>
        <EditTodoModal
          _id={_id}
          title={title}
          description={description}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default TodoCard;
