import { Inter } from 'next/font/google'

import "../styles/global.css";
import styles from "./styles.module.css";
import Header from '@/components/header';
import Footer from '@/components/footer';

 
export const metadata = {
  title: 'Next.js 13 | Blog',
}
 
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.container}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
