const Header = () => {
  return (
    <header className="bg-slate-300 h-10">
      <nav className="float-right w-1/3 h-full">
        <ul className="list-none flex justify-between items-center mr-4 h-full font-bold font-sans">
          <li className=" hover:border-2 hover:bg-white hover:border-green-500 px-2">
            Home
          </li>
          <li className=" hover:border-2  hover:bg-white hover:border-green-500 px-2">
            Contact
          </li>
          <li className="">
            <select
              className="px-9 duration-700 transition-all py-1 bg-slate-600 text-white outline-none"
              name=""
              id=""
            >
              <option value="">Sports</option>
              <option value="">World</option>
              <option value="">Lochal</option>
            </select>
          </li>
          <li className=" hover:border-2 hover:bg-white px-2 hover:border-green-500">
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
