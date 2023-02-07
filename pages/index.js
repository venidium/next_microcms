// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from "next/link";
import { client } from "../libs/client";

import Image from 'next/image';




export default function Home({ blog }) {
  return (
    <>
    <Header />
    <div>
      
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{' '}
      <Image
        src="/img.jpg"
        alt="Vercel Logo"
      
        width={1000}
        height={240}
        priority
      />
    </a>

    <Footer />
    </>
    
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};



