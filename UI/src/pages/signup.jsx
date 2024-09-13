import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="max-w-lg mx-auto ">
        <div>
          <h1 className="text-3xl text-center font-semibold mt-5 mb-7">Sign Up</h1>
        </div>
        <div>
          <form action="" className="flex flex-col justify-center gap-5  ">
            <input type="text" name="username" id="username" placeholder="username" className="outline-none border-2 rounded-xl p-2 " />
            <input type="email" name="email" id="email" placeholder="email" className="outline-none border-2 rounded-xl p-2" />
            <input type="password" name="password" id="password" placeholder="password" className="outline-none border-2 rounded-xl p-2" />
            <input type="submit" value="Sign Up" className="bg-zinc-800 p-3 rounded-xl text-indigo-300 uppercase font-bold hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" />
          </form>
        </div>
        <div className="m-2">
          <p>Have an account ? <Link to={'/signin'}> <span className="text-blue-800 font-bold">Sign In</span></Link> </p>
        </div>

      </div>
    </>
  )
}

export default Signup;
