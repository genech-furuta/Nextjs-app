export const dynamic = 'force-static'; // 👈 明示的にSSGとして指定



export default function AboutPage() {
  return (
    <main>
      <h1>About (SSG)</h1>
      <p>This page is statically generated at build time.</p>
    </main>
  );
}
