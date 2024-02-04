import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div className="">
      <div className="flex justify-between mb-6">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p className="">There is No Task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
