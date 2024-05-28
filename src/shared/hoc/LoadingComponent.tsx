import Lottie from "lottie-react"

interface ILoading{
    animation: any
}

export default function LoadingComponent(props: ILoading) {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <Lottie animationData={props.animation} loop className="w-full"/>
    </div>
  )
}
