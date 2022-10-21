import React, { useState } from "react";

// Packages
import { Link } from "react-router-dom";

// Services
import { ArrayHaveValue, IsArray, IsTrue } from "../../Services/Helper";

// Constant
import { HEADER } from "../../Config/Constant";

// CSS
import "../../Css/style.css";

/**
 * Header with Logo, Paths, profile view Button and Cart Details Button
 * @returns Node
 */
const Header = () => {
  // Display slide menu in Mobile view
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  /**
   * Display menubar on click of hamburg button
   */
  const showMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  /**
   * Active current Tabs
   * @param {number} currentIndex
   */
  const handleTabs = (currentIndex) => {
    setActiveTab(currentIndex);
  };
  return (
    <nav id="header" className="w-full z-30 top-0 ">
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-4 py-4">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            onClick={showMenu}
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <div
          className={`${
            isVisibleMenu && "hidden"
          } md:flex md:items-center md:w-auto w-full order-3  `}
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 font-bold">
              {IsArray(HEADER) &&
                ArrayHaveValue(HEADER) &&
                HEADER.map(({ name, path, dropdown, dropdownArray }, index) => {
                  return IsTrue(dropdown) ? (
                    <li key={index}>
                      <div className="dropdown inline-block">
                        <li
                          className={`bg-white font-semibold py-2 px-4 ${
                            activeTab !== index &&
                            " hover:bg-gray-300 hover:bg-opacity-20"
                          } rounded-lg inline-flex items-center ${
                            activeTab === index && "bg-gray-300 bg-opacity-30"
                          }`}
                        >
                          <span className="mr-1">{name}</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </li>
                        <ul className="dropdown-menu w-24  absolute ml-4 hidden text-gray-700 pt-1 z-10">
                          {IsArray(dropdownArray) &&
                            ArrayHaveValue(dropdownArray) &&
                            dropdownArray.map(({ name, path }, i) => {
                              return (
                                <li
                                  key={i}
                                  className="rounded-lg"
                                  onClick={() => handleTabs(index)}
                                >
                                  <Link
                                    className="bg-white hover:bg-gray-100 py-2 w-32 px-3 block whitespace-no-wrap"
                                    to={path}
                                  >
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li key={index}>
                      <Link
                        className={`inline-block no-underline  ${
                          activeTab !== index &&
                          " hover:bg-gray-300 hover:bg-opacity-20"
                        } rounded-lg py-2 px-4 ${
                          activeTab === index && "bg-gray-300 bg-opacity-30"
                        } `}
                        to={path}
                        onClick={() => handleTabs(index)}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        <div className="order-1 md:order-2 ">
          <a
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="/"
          >
            <svg
              className="fill-current text-gray-800 mr-2 "
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            E-Shop
          </a>
        </div>
        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <a className="inline-block no-underline hover:text-black" href="/">
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <circle fill="none" cx={12} cy={7} r={3} />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
          </a>
          <a
            className="pl-3 inline-block no-underline hover:text-black"
            href="/"
          >
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Header };
