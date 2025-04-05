import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TopDestinations from "@/components/TopDestinations";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Companies from "@/components/Companies";
import SubscribeSection from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.mainBody}>
      <img alt="Decor" className={styles.decorImg} src="images/Decore.png" />
      <div className={styles.container}>
        <Head>
          <title>Travelo - Travel Agency</title>
          <meta name="description" content="Your dream vacation awaits" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className={styles.main}>
          <HeroSection />
          <Services />
          <TopDestinations />
          <Booking />
          <Testimonials />
          <Companies />
          <SubscribeSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
