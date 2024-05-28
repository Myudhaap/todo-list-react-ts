import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  return (
    <div className="flex justify-between items-center p-4 rounded-md bg-yellow-100">
      <span className="text-yellow-500 font-semibold">
        Dashboard is under construction!
      </span>
      <FontAwesomeIcon icon={faWarning} className="text-yellow-500"/>
    </div>
  )
}
