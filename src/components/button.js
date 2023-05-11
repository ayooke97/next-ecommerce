import styles from "@/soora/styles/hello.module.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
function Button() {

  return (
    <>
        <div className={`${montserrat.className}`}>
            <button>Trigger!</button>
        </div>
    </>
  )
}

export default Button;