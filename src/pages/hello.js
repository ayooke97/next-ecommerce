import styles from "@/soora/styles/hello.module.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import HomeLayout from "../layouts/homeLayout";

const montserrat = Montserrat({subsets: ['latin']});
function hello() {
  return (
    <>
    <Head>
      <title>HAHAHAHAHAHA</title>
    </Head>
    <div className={`${styles.body} ${montserrat.className}`}  >
     <HomeLayout />
    </div>
    </>
  );
}




export default hello;
