import css from "./LogoBanner.module.css";

export default function LogoBanner() {
  return (
    <div className={css.logo}>
      <svg
        width={56}
        height={56}
        className={css.iconTop}>
        <use href="/sprite.svg#logo-ua"></use>
      </svg>
      <svg
        width={180}
        height={48}
        className={css.iconBottom}>
        <use href="/sprite.svg#logo-text"></use>
      </svg>
    </div>
  );
}
