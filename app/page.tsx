import LogoBanner from "@/components/LogoBanner/LogoBanner";
import css from "./Home.module.css";
import SearchBlock from "@/components/SearchBlock/SearchBlock";
import clsx from "clsx";

export default function Home() {
  return (
    <section className={css.section}>
      <div className={clsx("container", css.container)}>
        <LogoBanner />
        <SearchBlock />
      </div>
    </section>
  );
}
