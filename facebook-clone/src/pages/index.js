import { getSession } from "next-auth/react";
import Head from "next/head";
import Login from "../../components/Login";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
