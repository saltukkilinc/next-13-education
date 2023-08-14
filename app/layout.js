import "../styles/global.css";
import styles from "./styles.module.css";
import { Inter } from 'next/font/google'

 
export const metadata = {
  title: 'Next.js 13 | Blog',
}
 
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.container}>
        <header>
          <p>Header</p>
        </header>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
