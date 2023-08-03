import Image from "next/image";
import iiitdmLogo from "public/iiitdm.webp";

const NavBar = () => {
  const user = "s";
  return (
    <nav className="flex items-center justify-between h-20 px-4 border-b md:h-40 bg-app-header-bg dark:bg-dark-app-header-bg sm:px-6 md:px-8 dark:border-app-header-bg border-app-header-bg">
      <div className="flex items-center gap-4">
        <Image
          src={iiitdmLogo}
          className="w-10 h-10 md:w-auto md:h-auto"
          alt="IIITDM Logo"
        />
        <span className="text-lg font-bold tracking-wide sm:text-2xl md:text-3xl">
          IIITDM Kancheepuram
        </span>
      </div>
      {!user && (
        <button className="px-6 py-3 text-xl font-medium bg-red-600 rounded-md hover:opacity-90 active:opacity-80 text-gray-50">
          Log out
        </button>
      )}
      {user && (
        <button className="px-6 py-3 text-xl font-medium bg-blue-600 rounded-md hover:opacity-90 active:opacity-80 text-gray-50">
          Login
        </button>
      )}
    </nav>
  );
};

export default NavBar;
