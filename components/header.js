import React from "react";
import Image from "next/image";
import Link from "next/link";
import mushPic from "../public/mushroom.png";

class Header extends React.Component {
  render() {
    return (
      <header className="w-full px-6 bg-Desert-Sand">
        <div className="container mx-auto md:flex justify-between items-center">
          <Link href="/">
            <a className="block py-2 w-full text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center items-center">
              Maple Market
            </a>
          </Link>
          <Image src={mushPic} alt="Maplemarket logo" height="32" width="32" />
          <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
            <a
              href="#"
              className="inline-block no-underline bg-Ebony text-white text-sm py-2 px-3"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
