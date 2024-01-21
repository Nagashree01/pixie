const Header = () => {
  return (
    <header className="flex justify-between items-center mx-4 my-3 text-white bg-[rgba(217, 217, 217, 0.12)] rounded-md font-semibold px-4 py-3 text-lg border-white border-2 backdrop-blur-lg">
      <div className="text-2xl">Free Pixie</div>
      <div className="flex space-x-4 items-center">
        <div className="cursor-pointer">Login</div>
        <button className="cursor-pointer border-white border-2 p-1 rounded-sm">
          Create Account
        </button>
      </div>
    </header>
  );
};

export default Header;
