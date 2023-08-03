import React from "react";

const Header = ({ clubName, picName }) => {
  return (
    <header className="flex items-end justify-between h-16 px-4 pb-2 border-b border-club-previous-requests-header-text dark:border-dark-club-previous-requests-header-text sm:px-6 md:px-8 md:gap-20 md:justify-normal text-club-previous-requests-header-text dark:text-dark-club-previous-requests-header-text">
      <h2 className="text-lg sm:text-xl md:text-3xl">{clubName}</h2>
      <h2 className="text-lg sm:text-xl md:text-3xl">{picName}</h2>
    </header>
  );
};

export default Header;
