import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // data get from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server command
  const { data: todos, error, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-10">
        Loading....
      </p>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between mb-6">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((todo) => (
            <TodoCard key={todo._id} {...todo} />
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
