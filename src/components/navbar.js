import styles from "@/soora/styles/hello.module.css";
import Button from "./button";

function Navbar() {
  return (
    <div className="body">
      <h1>TRIGGER</h1>
      <div className={`${styles.fnav}`}>
        <nav className={`${styles.container}`}>
          <div className={`${styles.navl}`}>
            <h3>SOORA</h3>
            <h5>Indonesia</h5>
          </div>
          <div className={styles.navm}>
            <div className={styles.input}>
                <input type="text" />
            </div>
            <div>
                <p>2</p>
                <p>4</p>
                <p>6</p>
                <p>8</p>
                <p>10</p>
            </div>
          </div>
          <div className={styles.navr}>
            <Button />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
