
const Navbar = () => {
  return (
    <div className="bg-defaultBg px-4 py-3 default-border flex justify-between items-center ">

        <div className="">
            <img src="./images/logoLight.png" alt="logo image" className="h-8"/>
        </div>

        <div className="flex">
            <form className="flex items-center input-width">
                <span className=" flex-1 items-center default-outline py-2 px-3 rounded-4 bg-inputBg">
                    <div className="flex items-center">
                        <img className="h-5" src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000" alt="search" />
                        <input type="text" className="bg-transparent w-full font-extralight indent-1"/>
                        <img className="h-5" src="https://img.icons8.com/?size=100&id=aSQnLFjBXx6b&format=png&color=000000" alt="command" />
                    </div>
                </span>
                <a className="link-style">
                    <img className="h-5" src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000" alt="search" />
                </a>
                <a className="link-style">
                    <img className="h-5" src="https://img.icons8.com/?size=100&id=s5NUIabJrb4C&format=png&color=000000" alt="settings" />
                </a>
            </form>
        </div>

        <div className="">
            <button className="link-style">
                <img className="h-5" src="https://img.icons8.com/?size=100&id=Y56jZNPHTK0X&format=png&color=000000" alt="theme" />
            </button>

            <button className="link-style">
                <img className="h-5" src="https://img.icons8.com/?size=100&id=15263&format=png&color=000000" alt="profile" />
            </button>
        </div>
    </div>
  )
}

export default Navbar
