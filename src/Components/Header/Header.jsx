import React, { useRef, useState } from "react";
import {
  FaSearch,
  FaUser,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import SolutionMenus from "../MegaMenus/SolutionMenus";
import ProductMenus from "../MegaMenus/ProductMenus";
import TechnologyMenus from "../MegaMenus/TechnologyMenus";
import CompanyMenus from "../MegaMenus/CompanyMenus";
import ResourcesMenus from "../MegaMenus/ResourcesMenus";
import logo from "../../assets/GLPNG.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null); // Track which menu is open
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [timeoutId, setTimeoutId] = useState(null); // Track the timeout ID
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const headerRef = useRef(null);
  const megaMenuRef = useRef(null);
  const closeMenu = () => {
    setIsMenuOpen(null);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseEnter = (menuType) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const headerRect = headerRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    setMenuPosition({
      top: headerRect.bottom + window.scrollY - 15,
      left: windowWidth / 2,
      transform: "translateX(-40%)",
    });

    setIsMenuOpen(menuType);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuOpen(null);
    }, 800);
    setTimeoutId(id);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuOpen(null);
    }, 800);
    setTimeoutId(id);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className="bg-white flex justify-between items-center px-4 lg:px-24 h-16 sticky top-0 z-50 shadow-md"
      >
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            alt="grotthloop Logo"
            className="h-14 w-16 bg-transparent"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-4 font-medium text-base">
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}
          >
            <Link to={"/solutions"} className="flex items-center gap-1">
              Solutions <FaChevronDown size={10} />
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}
          >
            <Link to={"/products"} className="flex items-center gap-1">
              Products <FaChevronDown size={10} />
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("technology")}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}
          >
            <Link to={"/technology"} className="flex items-center gap-1">
              Technology <FaChevronDown size={10} />
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}
          >
            <Link to={"/resources"} className="flex items-center gap-1">
              Resources <FaChevronDown size={10} />
            </Link>
          </li>
          <li
            className="relative flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}
          >
            <Link to={"/company"} className="flex items-center gap-1">
              Company <FaChevronDown size={10} />
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="block lg:hidden text-xl text-gray-700"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md fixed top-16 left-0 w-full z-40">
          <ul className="flex flex-col items-start gap-4 p-4 font-medium text-base">
            <li>
              <Link
                className=""
                to="/solutions"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => setIsMobileMenuOpen(false)}>
                Technology
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/company" onClick={() => setIsMobileMenuOpen(false)}>
                Company
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mega Menus */}
      {isMenuOpen === "solutions" &&
        createPortal(
          <div
            ref={megaMenuRef}
            className="absolute z-50 transform -translate-x-1/2"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <SolutionMenus closeMenu={closeMenu} />
          </div>,
          document.body
        )}
      {isMenuOpen === "products" &&
        createPortal(
          <div
            ref={megaMenuRef}
            className="absolute z-50 transform -translate-x-1/2"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <ProductMenus closeMenu={closeMenu} />
          </div>,
          document.body
        )}
      {isMenuOpen === "technology" &&
        createPortal(
          <div
            ref={megaMenuRef}
            className="absolute z-50 transform -translate-x-1/2"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <TechnologyMenus closeMenu={closeMenu} />
          </div>,
          document.body
        )}
      {isMenuOpen === "resources" &&
        createPortal(
          <div
            ref={megaMenuRef}
            className="absolute z-50 transform -translate-x-1/2"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <ResourcesMenus closeMenu={closeMenu} />
          </div>,
          document.body
        )}
      {isMenuOpen === "company" &&
        createPortal(
          <div
            ref={megaMenuRef}
            className="absolute z-50 transform -translate-x-1/2"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <CompanyMenus closeMenu={closeMenu} />
          </div>,
          document.body
        )}
    </>
  );
};

export default Header;
