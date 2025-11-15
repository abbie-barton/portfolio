import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Employment from "./components/employment/Employment";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans ">
      <Layout>
        <main className="flex flex-col items-center justify-center py-32 px-16 bg-white">
          <About />
          <Employment />
          <Projects />
        </main>
      </Layout>
    </div>
  );
}
