import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderSearch from "./HeaderSearch";

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 flex items-center px-4 py-2 
      shadow-md bg-white"
    >
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </header>
  );
};

export default Header;
