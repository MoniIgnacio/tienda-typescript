import { BsCart } from "react-icons/bs";

interface HeaderProps {
  name: string;
}

function Header({ name }: HeaderProps): JSX.Element {
  return (
    <div className="flex bg-slate-100 p-4 h-20 items-center justify-between">
      <h1 className="text-blue-600 text-2xl font-semibold flex gap-2 items-center">
        <BsCart className="text-3xl"/>
        {name}
      </h1>
      <div className="">
      <button className="text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-s px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
      <button className="text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-s px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
      </div>
    </div>
  );
}

export default Header;
