import Circleband from "../assets/svg/Circleband"
import Circlebask from "../assets/svg/Circlebask"

const Circles = () => {
    return(
        <div className="rounded-full w-[140px] h-[140px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-gray-4 flex items-center justify-center bg-[white] gap-[20px]">
        <Circleband />
        <Circlebask />
        <div className="rounded-full w-[340px] h-[340px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2"></div>
        <div className="rounded-full w-[540px] h-[540px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2"></div>
        <div className="rounded-full w-[940px] h-[940px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2">
          {" "}
        </div>
      </div>
    )
} 
export default Circles