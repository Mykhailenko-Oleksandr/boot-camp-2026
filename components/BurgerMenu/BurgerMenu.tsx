"use client";

import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import { useEffect } from "react";
import Link from "next/link";
import NavItem from "../NavItem/NavItem";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", onEsc);
      document.body.classList.add("noScroll");
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.classList.remove("noScroll");
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) onClose();
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <div className={clsx(css.backdrop)}>
      <div className={css.topBox}>
        <Link
          href="/"
          className={css.logoLink}>
          <svg
            width={86}
            height={18}>
            <use href="/sprite.svg#logo-text"></use>
          </svg>
        </Link>
        <div className={css.topRightBox}>
          <button
            type="button"
            aria-label="Search button"
            className={css.searchBtn}>
            <svg
              width={24}
              height={24}>
              <use href="/sprite.svg#searchWithStar"></use>
            </svg>
          </button>

          <button
            className={css.closeBtn}
            type="button"
            aria-label="Close menu"
            onClick={onClose}>
            <svg
              width={14}
              height={14}>
              <use href="/sprite.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>

      <nav>
        <ul className={css.menuNavigation}>
          <NavItem
            label="Дані"
            subLabel={["Банк даних", "Описи показників", "Основні показники"]}
          />
          <NavItem label="Публікації" />
          <NavItem label="Календар" />
          <NavItem label="Новини" />
          <NavItem
            label="Респондентам"
            subLabel={[
              "Подати звітність",
              "Моя звітність",
              "Опитування населення",
            ]}
          />
          <NavItem
            label="Про нас"
            subLabel={[
              "Місія",
              "Керівництво",
              "Діяльність",
              "Структура",
              "Нормативно-правова база",
              "Вакансії та кадрові питання",
              "Контакти та розпорядок роботи",
              "Методологія та класифікації",
            ]}
          />
        </ul>

        <ul className={clsx(css.languageList, css.menuNavigation)}>
          <NavItem
            label="Укр"
            subLabel={["Eng"]}
          />
        </ul>
      </nav>
    </div>
  );
}
