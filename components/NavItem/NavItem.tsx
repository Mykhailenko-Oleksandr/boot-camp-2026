"use client";

import { useState } from "react";
import css from "./NavItem.module.css";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  label: string;
  subLabel?: string[];
}

export default function NavItem({ label, subLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={css.navItem}>
      {subLabel ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={css.navBtn}>
          {label}

          <svg
            width={16}
            height={16}
            className={clsx(isOpen && css.iconArrowOpen)}>
            <use href="/sprite.svg#arrow-down"></use>
          </svg>
        </button>
      ) : (
        <Link
          href="#"
          className={css.navLink}>
          {label}
        </Link>
      )}

      {subLabel && (
        <ul className={clsx(css.subList, isOpen && css.open)}>
          {subLabel.map((title, index) => {
            return (
              <li key={index}>
                <Link
                  href="#"
                  className={css.subListLink}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
