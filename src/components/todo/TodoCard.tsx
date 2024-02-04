import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
};

const TodoCard = ({ id, title, description }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
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
