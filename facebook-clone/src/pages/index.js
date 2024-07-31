import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Home({ session }) {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
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
