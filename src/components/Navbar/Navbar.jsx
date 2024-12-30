
const Navbar = () => {
  return (
    <div className="bg-defaultBg px-4 py-3 default-border flex justify-between items-center ">

        <div className="">
            <img src="./images/logoLight.png" alt="logo image" className="h-8"/>
        </div>

        <div className="flex">
            <form className="flex items-center input-width">
                <span className=" flex-1 items-center default-border p-2 rounded-sm bg-inputBg">
                    <div className="flex items-center">
                        <img className="h-5" src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000" alt="search" />
                        <input type="text" className="bg-transparent w-full"/>
                        <img className="h-5" src="https://img.icons8.com/?size=100&id=LVIUymoeqXae&format=png&color=000000" alt="command" />
                    </div>
                </span>
                <a>
                    <img className="h-5" src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000" alt="search" />
                </a>
                <a>
                    <img className="h-5" src="https://img.icons8.com/?size=100&id=s5NUIabJrb4C&format=png&color=000000" alt="settings" />
                </a>
            </form>
        </div>

        <div className="">
            <button>
                <img className="h-5" src="https://img.icons8.com/?size=100&id=Y56jZNPHTK0X&format=png&color=000000" alt="theme" />
            </button>

            <button>
                <img className="h-5" src="https://img.icons8.com/?size=100&id=15263&format=png&color=000000" alt="profile" />
            </button>
        </div>
    </div>
  )
}

export default Navbar
