import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Listify | Home</title>
        <meta name="keywords" content="listify" />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to my world!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro
          quaerat quasi perferendis consequuntur velit dolores possimus ullam
          nulla modi odit, pariatur sapiente tenetur consectetur quae. Quidem a
          ipsum natus!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro
          quaerat quasi perferendis consequuntur velit dolores possimus ullam
          nulla modi odit, pariatur sapiente tenetur consectetur quae. Quidem a
          ipsum natus!
        </p>
        <div>
          <Link href="/list">
            <a className={styles.btn}> Go to List</a>
          </Link>
        </div>
      </div>
    </>
  );
}
