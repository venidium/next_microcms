import Link from 'next/link';

 function Header() {
     return <header>
             <h1>Next.js勉強</h1>
             <menu>Menu：
                 <Link href="/">トップ</Link>｜
                 <Link href="/blog">ブログ</Link>
             </menu>
       </header>;
   }

   export default Header;