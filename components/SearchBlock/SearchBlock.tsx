"use client";

import { useState } from "react";
import css from "./SearchBlock.module.css";
import clsx from "clsx";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";

export default function SearchBlock() {
  const [tabs, setTabs] = useState<"search" | "searchAI">("search");

  return (
    <div className={css.box}>
      <div className={css.tabsBox}>
        <button
          type="button"
          onClick={() => setTabs("search")}
          className={clsx(css.tabBtn, tabs === "search" && css.currentTab)}>
          <svg
            width={24}
            height={24}>
            <use href="/sprite.svg#search"></use>
          </svg>
          Пошук
        </button>
        <button
          type="button"
          onClick={() => setTabs("searchAI")}
          className={clsx(css.tabBtn, tabs === "searchAI" && css.currentTab)}>
          <svg
            width={24}
            height={24}
            className={css.starIcon}>
            <use href="/sprite.svg#star"></use>
          </svg>
          ШІ Асистент
        </button>
      </div>

      {tabs === "searchAI" ? (
        <SearchInput placeholder="Запитайте, що вас цікавить" />
      ) : (
        <div className={css.searchBox}>
          <SearchInput placeholder="Пошук даних" />

          <div className={css.exampleBox}>
            <p className={css.text}>Наприклад:</p>
            <ul className={css.exampleList}>
              <li>
                <Link
                  href="#"
                  className={css.link}>
                  Населення
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={css.link}>
                  Ціни
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={css.link}>
                  Експорт
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={css.link}>
                  Імпорт
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
