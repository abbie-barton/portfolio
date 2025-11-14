import Layout from "./components/layout/Layout";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans ">
      <Layout>
        <main className="flex-1 flex items-center justify-center py-32 px-16 bg-white">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
        </main>
      </Layout>
    </div>
  );
}
