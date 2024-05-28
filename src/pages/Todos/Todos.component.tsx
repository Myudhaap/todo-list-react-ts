import { faCheck, faFilter, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form"

interface filterForm{
    filterBy: string,
    keyword: string | boolean
}

const defaultValues: filterForm = {
    filterBy: 'all',
    keyword: ''
}

export default function Todos() {
    const {
        handleSubmit,
        register
    } = useForm({
        defaultValues,
    })

    const onSubmit = (data: filterForm) => {
        console.log(data)
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Todos</h2>

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
                            <h3 className="text-xl font-semibold text-accent mb-2">Progress</h3>
                            <div className="">
                                <ul className="flex justify-between flex-wrap w-full gap-2 p-2 bg-primary/20 rounded-sm">
                                    <li className="w-full max-w-[49%] flex-1 bg-white p-2 rounded-md shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-semibold">Title</h4>
                                            <span className="bg-gray-300 rounded-full text-[.825rem] text-black/80 py-1 px-4">Progress</span>
                                        </div>
                                        <p className="text-gray-500 truncate w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur quaerat! Ullam optio, illum at incidunt sequi soluta rerum est corporis commodi laborum numquam fuga quidem totam quas veniam, placeat quod ratione?</p>
                                        <div className="flex gap-2 mt-2 justify-end">
                                            <button className="bg-red-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faTrash}/>
                                                <span>Delete</span>
                                            </button>
                                            <button className="bg-green-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faCheck}/>
                                                <span>Done</span>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="w-full max-w-[49%] flex-1 bg-white p-2 rounded-md shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-semibold">Title</h4>
                                            <span className="bg-gray-300 rounded-full text-[.825rem] text-black/80 py-1 px-4">Progress</span>
                                        </div>
                                        <p className="text-gray-500 truncate w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur quaerat! Ullam optio, illum at incidunt sequi soluta rerum est corporis commodi laborum numquam fuga quidem totam quas veniam, placeat quod ratione?</p>
                                        <div className="flex gap-2 mt-2 justify-end">
                                            <button className="bg-red-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faTrash}/>
                                                <span>Delete</span>
                                            </button>
                                            <button className="bg-green-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faCheck}/>
                                                <span>Done</span>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-accent mb-2">Completed</h3>
                            <div className="">
                                <ul className="flex justify-between flex-wrap w-full gap-2 p-2 bg-green-500/20 rounded-sm">
                                    <li className="w-full max-w-[49%] flex-1 bg-white p-2 rounded-md shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-semibold">Title</h4>
                                            <span className="bg-gray-300 rounded-full text-[.825rem] text-black/80 py-1 px-4">Progress</span>
                                        </div>
                                        <p className="text-gray-500 truncate w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur quaerat! Ullam optio, illum at incidunt sequi soluta rerum est corporis commodi laborum numquam fuga quidem totam quas veniam, placeat quod ratione?</p>
                                        <div className="flex gap-2 mt-2 justify-end">
                                            <button className="bg-red-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faTrash}/>
                                                <span>Delete</span>
                                            </button>
                                            <button className="bg-green-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faCheck}/>
                                                <span>Done</span>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="w-full max-w-[49%] flex-1 bg-white p-2 rounded-md shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-semibold">Title</h4>
                                            <span className="bg-gray-300 rounded-full text-[.825rem] text-black/80 py-1 px-4">Progress</span>
                                        </div>
                                        <p className="text-gray-500 truncate w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur quaerat! Ullam optio, illum at incidunt sequi soluta rerum est corporis commodi laborum numquam fuga quidem totam quas veniam, placeat quod ratione?</p>
                                        <div className="flex gap-2 mt-2 justify-end">
                                            <button className="bg-red-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faTrash}/>
                                                <span>Delete</span>
                                            </button>
                                            <button className="bg-green-500 py-1 px-4 text-[.825rem] flex gap-1 items-center text-white rounded-full">
                                                <FontAwesomeIcon icon={faCheck}/>
                                                <span>Done</span>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
