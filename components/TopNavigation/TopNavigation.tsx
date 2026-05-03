"use client";

import clsx from "clsx";
import NavItem from "../NavItem/NavItem";
import css from "./TopNavigation.module.css";

export default function TopNavigation() {
  return (
    <nav className={css.nav}>
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
  );
}
