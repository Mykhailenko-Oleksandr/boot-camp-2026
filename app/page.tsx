import LogoBanner from "@/components/LogoBanner/LogoBanner";
import css from "./Home.module.css";

export default function Home() {
  return (
    <section className={css.section}>
      <div className="container">
        <LogoBanner />
      </div>
    </section>
  );
}
