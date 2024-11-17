import { useDispatch, useSelector } from "react-redux";
import { deleteTodo} from "../redux/Todoslice";

function Todo() {
    const todos = useSelector(state => state.Todos); 
    const dispatch = useDispatch();

    

    // Handle deleting a todo
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="mt-8 max-w-2xl mx-auto">
            <ul className="space-y-4">
                {todos && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li 
                            key={todo.id} 
                            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                        >
                             (
                                <div className='text-black'>{todo.text}</div>
                            )

                                                     

                            <button 
                                onClick={() => handleDelete(todo.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete Todo
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No todos available.</p>
                )}
            </ul>
        </div>
    );
}

export default Todo;
