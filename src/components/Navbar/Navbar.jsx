import Button from '../ui/Button';
import SearchInput from '../ui/SearchInput';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold">NewList</div>

      <div className="hidden md:flex flex-1 mx-4">
        <SearchInput className="w-full max-w-xl" />
      </div>

      <div className="flex items-center gap-4">
        <Button className="hidden md:block">Sign In</Button>
        <Button className="hidden md:block">Cart</Button>
      </div>

      <div className="md:hidden">
        {/* Add hamburger menu icon for mobile */}
        <button className="text-xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
