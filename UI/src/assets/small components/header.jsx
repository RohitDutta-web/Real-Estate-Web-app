//importing FaSearch for search icon
import { FaSearch } from "react-icons/fa"; 
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-zinc-800 shadow-lg px-2 py-2">
        <div className="flex justify-between items-center max-">
          <Link to='/'>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-indigo-300">Easy</span>
              <span className="text-indigo-400">Estate</span>
            </h1>
          </Link>

          <form className="bg-zinc-200 p-3 rounded-xl text-zinc-950 flex items-center w-24 sm:w-64">
            <input type="text" placeholder="Search.." className="bg-transparent outline-none w-full" />
            <FaSearch className="text-zinc-950" />
          </form>

          <ul className="flex gap-4 text-indigo-300">
            <Link to='/'><li className="hidden sm:inline hover:text-indigo-200 cursor-pointer">Home</li></Link>
            <Link to='/about'><li className="hidden sm:inline hover:text-indigo-200 cursor-pointer">About</li></Link>
            <Link to='/signIn'><li className=" hover:text-indigo-200 cursor-pointer">Sign In</li></Link>
          </ul>
        </div>

      </header>

    </>
  )
}
