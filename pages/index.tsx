import Header from "@/components/Header";
import PostBox from "@/components/PostBox";
import Head from "next/head";

export default function Home() {
  return (
    <main className="  min-h-screen">
      <Head>
        <title>Reddit-Clone</title>
      </Head>
      {/* Postbox */}
      <PostBox />
      <div>
        {/* Feed */}
        
      </div>
    </main>
  );
}
