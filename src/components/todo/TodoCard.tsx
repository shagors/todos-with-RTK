import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ id, title, description, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const handleToggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        onChange={handleToggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className="text-green-500 font-medium">Done</p>
        ) : (
          <p className="text-pink-600 font-medium">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div className="space-x-5">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <Trash2 className="size-5" />
        </Button>
        <Button className="bg-[#5C53FE]">
          <FilePenLine className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
