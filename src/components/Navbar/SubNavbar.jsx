const SubNavbar = () => {
    const categories = ['All', 'Electronics', 'Books', 'Fashion', 'Home', 'Deals'];
  
    return (
      <div className="bg-yellow-400 px-4 py-2 text-black text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex gap-4">
          {categories.map((cat) => (
            <li key={cat} className="cursor-pointer hover:underline">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SubNavbar;
  