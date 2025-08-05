import cn from "classnames";

import { Container } from "./ui/Container";
import { Link } from "react-router";

import logo from "assets/logo.png";
import { ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
}

const NAVIGATION_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
];

const LINKS_ITEMS = [
  {
    icon: <ShoppingCart size={28} />,
    href: "/cart",
  },
];

export const Header = ({ className }: HeaderProps) => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleChangeMenuStatus() {
    if (!menuIsActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    setMenuIsActive((prevState) => !prevState);
  }

  function handleCloseMenu() {
    setMenuIsActive(false);
    document.body.style.overflow = "auto";
  }

  return (
    <header
      className={cn(
        className,
        "fixed top-0 left-0 right-0 pt-[50px] max-md:pt-[30px] z-50 pb-[50px]",
        scrolled && "bg-white"
      )}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="w-[94px] h-[32px]" src={logo} alt="Slick" />
          </Link>

          <nav
            className={cn(
              "max-md:absolute max-md:top-[0px] max-md:right-[-100%] max-md:pt-25 max-md:w-[300px] max-md:h-[100vh] max-md:bg-[var(--color-primary-opacity)] max-md:backdrop-blur-[10px] max-md:p-5 transition-all z-100",
              menuIsActive && "max-md:right-[0%]"
            )}
          >
            <X
              className="md:hidden text-[var(--color-secondary)] mb-5 absolute top-[30px] right-5"
              width={30}
              height={30}
              onClick={handleChangeMenuStatus}
            />
            <ul className="flex items-center gap-[55px] max-md:flex-col max-md:items-start max-md:gap-6">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-[24px] max-lg:text-[18px] max-md:text-[var(--color-secondary)]"
                    to={item.href}
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-[50px] max-md:gap-8">
            {LINKS_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.icon}</Link>
              </li>
            ))}

            <button className="md:hidden w-[30px] h-[20px] text-right" onClick={handleChangeMenuStatus}>
              <span className="block w-full h-[2px] bg-[var(--color-primary)] rounded-[2px]"></span>
              <span className="inline-block w-[70%] h-[2px] bg-[var(--color-primary)] rounded-[2px]"></span>
            </button>
          </ul>
        </div>
      </Container>
    </header>
  );
};
