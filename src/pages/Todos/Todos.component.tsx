import { faFilter, faPencil, faPlus, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import { deleteTodo, getAllTodos } from "../../store/reducers/todosReducer";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { todo } from "../../type";
import { loadingAnimation } from "../../assets";
import LoadingComponent from "../../shared/hoc/LoadingComponent";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface filterForm{
    filterBy: string,
    keyword: string | boolean
}

const defaultValues: filterForm = {
    filterBy: 'all',
    keyword: ''
}

const Todos = () => {
    const {
        handleSubmit,
        register
    } = useForm({
        defaultValues,
    })

    const dispatch = useDispatch<AppDispatch>()
    const {
        todos,
        isLoading,
        error
    } = useSelector((state: RootState) => state.todos)

    useEffect(() => {
        dispatch(getAllTodos(null))
    }, [])

    const onSubmit = (data: filterForm) => {
        console.log(data)
    }

    const onDelete = (id: number | null) => {
        try{
            dispatch(deleteTodo(id))
            toast.success(`Deleted todo ${id}`)
        }catch(e: any){
            toast.error(e.message)
        }
    }

    if(error) toast.error(error)

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Todos</h2>
                    <Link to={"form"} className="flex items-center gap-2 bg-accent text-white font-semibold p-2 px-4 rounded-md hover:bg-accent/90 transition-colors duration-150">
                        <FontAwesomeIcon icon={faPlus}/>
                        Create Todo
                    </Link>
                </div>

                <div className="p-2 rounded-sm bg-white shadow-md">
                    <form className="flex gap-2 items-center bg-gray-50 p-2 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center border-r-2 px-4 max-w-fit">
                            <label htmlFor="filterBy">
                                <FontAwesomeIcon icon={faFilter} className="text-secondary"/>
                            </label>
                            <select {...register("filterBy")} className="bg-transparent p-1 outline-none font-light">
                                <option value="all">All Keyword</option>
                                <option value="todo">Todo</option>
                                <option value="category">Category</option>
                                <option value="status">Status</option>
                            </select>
                        </div>
                        <div className="flex-1 flex items-center">
                            <label htmlFor="keyword">
                                <FontAwesomeIcon icon={faSearch} className="text-secondary"/>
                            </label>
                            <input
                             type="text" {...register("keyword")} 
                             className="w-full bg-transparent p-2 outline-none"
                             placeholder="Enter keyword..."
                            />
                        </div>
                        <div className="w-20">
                            <button type="submit" className="bg-accent p-2 px-4 text-white rounded-md hover:bg-accent/90 transition-colors duration-150">Filter</button>
                        </div>
                    </form>

                    <div className="p-2 flex flex-col gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-accent mb-2">Todos List</h3>
                            {isLoading ? <LoadingComponent animation={loadingAnimation}/> :
                            (
                                <>
                                    {!todos ? (
                                        <div className="flex justify-center items-center">
                                            <h2>Todos not found</h2>
                                        </div>
                                    ): (
                                        <div className="">
                                            <ul className="flex justify-between flex-wrap w-full gap-4 p-2 bg-primary/20 rounded-sm">
                                                {todos.map((todo: todo, id: number) => (
                                                    <li key={id} draggable className="min-w-full max-w-full lg:min-w-[49%] lg:max-w-[49%] flex-1 bg-white p-2 rounded-md shadow-sm">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <p className="text-black truncate w-full">
                                                                {todo.title}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between gap-2 mt-2">
                                                            <span className={`rounded-full text-[.825rem] text-black/80 font-semibold py-1 px-4 ${todo.completed ? "bg-green-300" : "bg-gray-300"}`}>{todo.completed ? "Completed" : "Progress"}</span>
                                                            <div className="flex gap-2">
                                                                <button className="bg-red-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full"
                                                                onClick={() => onDelete(todo.id)}>
                                                                    <FontAwesomeIcon icon={faTrash}/>
                                                                    <span>Delete</span>
                                                                </button>
                                                                <Link
                                                                 to={`form/${todo.id}`}
                                                                 className="bg-blue-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                                    <FontAwesomeIcon icon={faPencil}/>
                                                                    <span>Edit</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos