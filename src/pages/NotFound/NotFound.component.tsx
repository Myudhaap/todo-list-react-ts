import {notfoundImg} from "../../assets/images/images"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='h-screen max-h-screen flex justify-center items-center'>
        <div className="min-w-52 text-center">
            <img src={notfoundImg} alt="Not Found" className="w-full"/>
            <button
             onClick={() => navigate(-1)}
             className='p-2 px-6 bg-accent hover:bg-accent/90 transition-colors duration-150 text-white font-semibold rounded-md'>
                Bact to previous page
            </button>
        </div>

    </div>
  )
}
