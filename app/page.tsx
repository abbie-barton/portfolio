import Layout from "./components/layout/Layout";
import About from "./components/about/About";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans ">
      <Layout>
        <main className="flex-1 flex items-center justify-center py-32 px-16 bg-white">
          <About />
        </main>
      </Layout>
    </div>
  );
}
