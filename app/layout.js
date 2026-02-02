import Link from "next/link";
import style from "./layout.module.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className='p-6'>
        <header className={style.header}>
          <Link href="/">홈</Link> <Link href="/write">글 작성</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
