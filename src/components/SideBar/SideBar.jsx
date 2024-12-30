import { SideBarData } from "../../data"

const SideBar = () => {
  return (
    <div className="fixed left-0 top-custom-65 h-full bg-defaultBg px-4">
        {
            SideBarData.map((item) => (
                <div key={item.icon} className="py-3 font-extralight">
                    <a href="" className="flex flex-col justify-center items-center gap-2">
                        <img className="h-5" src={item.icon} alt="icon" />
                        <p className="text-sm">{item.name}</p>
                    </a>
                </div>
            ))
        }
    </div>
  )
}

export default SideBar
