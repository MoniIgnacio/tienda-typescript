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
      <button>Login</button>
    </div>
  );
}

export default Header;