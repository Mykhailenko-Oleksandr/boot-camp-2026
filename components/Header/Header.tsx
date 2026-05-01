"use client";

import { useState } from "react";
import css from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className="container">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className={css.burgerBtn}>
          <svg
            width={16}
            height={12}>
            <use href="/sprite.svg#burger"></use>
          </svg>
        </button>

        {isMenuOpen && (
          <BurgerMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
