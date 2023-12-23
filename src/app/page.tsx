import Image from 'next/image'
import styles from './page.module.css'
import Header from "@/components/header/header";
import Movie from "@/components/movie/movie";
import Booking from "@/components/booking/booking";
import Program from "@/components/program/program";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Movie></Movie>
      <Booking ></Booking>
      <Program></Program>
      <Footer></Footer>
    </main>
  )
}
