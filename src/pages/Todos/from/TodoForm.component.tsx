import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { createTodo, selectedTodo, updateTodo } from "../../../store/reducers/todosReducer";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface IForm {
    id?: number | null
    userId: number
    title: string
    completed: boolean
}

const defaultValues: IForm = {
    id: null,
    userId: 1,
    title: '',
    completed: false
}

export default function TodoCreate() {
    const schema = yup.object({
        id: yup.number().nullable(),
        title: yup.string().required("Title required"),
        completed: yup.boolean(),
        userId: yup.number(),
    })

    const {
        handleSubmit,
        register,
        setValue,
        formState: {errors},
        reset
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    })

    const {id} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const {
        error,
        isLoading,
        todo
    } = useSelector((state: RootState) => state.todos)
    const navigate = useNavigate()

    useEffect(() => {
        if(id != undefined){
            console.log(id)
            dispatch(selectedTodo(parseInt(id)))
        }
    },[id])

    if(todo) {
        setValue('id', todo.id)
        setValue('title', todo.title)
        setValue('completed', todo.completed)
    }

    const onSubmit = (data: any) => {
        try{
            console.log(data)
            if(data.id == null){
                dispatch(createTodo(data))
    
                toast.success("Successfullt add todo")
                navigate(-1)
            }else{
                dispatch(updateTodo(data))

                toast.success("Update todo successfull")
                navigate(-1)
            }
            reset()
        }catch(e: any){
            toast.error(e.message)
        }
    }

    const onReset = () => {
        reset()
    }

    if(error) toast.error(error)

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">
                    <Link to={"/todos"} className="hover:text-primary">Todos</Link> {'>'} Created
                </h2>

            <div className="bg-white p-2 rounded-sm shadow-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex flex-col">
                        <label className="text-black/70 text-sm mb-1 font-semibold" htmlFor="title">Title</label>
                        <input
                         type="text" {...register('title')} 
                         className={`w-full bg-transparent border-2 ${errors.title ? "border-red-500" : ""} focus:border-accent border-gray-100 rounded-md p-1 px-2 outline-none`}
                        />
                        {errors.title && (
                            <span className="text-red-500 text-[.825rem] mt-1">{errors.title.message}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center gap-2 text-black/70 text-sm mb-1 font-semibold" htmlFor="completed">
                            <input type="checkbox" {...register("completed")} id="completed"/>
                            Complete
                        </label>
                    </div>

                    <div className="text-end">
                        <button
                         disabled={isLoading}
                         type="submit"
                         className={'w-32 me-2 text-sm disabled:cursor-not-allowed disabled:bg-accent/70 bg-accent hover:bg-accent/90 rounded-md transition-colors duration-150 p-2 text-white font-semibold'}>
                            {isLoading ? <FontAwesomeIcon className="animate-spin" icon={faSpinner}/> : 'Submit'}
                        </button>
                        <button type="reset"
                        onClick={onReset}
                        className="w-32 text-sm bg-red-500 hover:bg-red-500/90 rounded-md transition-colors duration-150 p-2 text-white font-semibold">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
