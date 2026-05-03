import css from "./SearchInput.module.css";

interface Props {
  placeholder: string;
}

export default function SearchInput({ placeholder }: Props) {
  return (
    <div className={css.box}>
      <input
        type="text"
        placeholder={placeholder}
        className={css.input}
      />
      <button
        type="button"
        className={css.btn}>
        <svg
          width={16}
          height={13}>
          <use href="/sprite.svg#arrow-right"></use>
        </svg>
      </button>
    </div>
  );
}
