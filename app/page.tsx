import Image from "next/image";
import '@fontsource/impact';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="bg-[#001F3F] text-white p-12 text-center min-h-[50vh]">
  <h1 className="text-5xl font-bold font-sans tracking-tight">Your Bold Headline Here</h1>
  <p className="text-lg mt-4">Subtext for AI consulting transformation.</p>
  <button className="bg-[#E31C25] text-white px-6 py-3 mt-6 rounded">Get Started</button>
</div>
<section className="p-12 bg-black text-white">
  <h2 className="text-4xl font-bold text-center">Our Services</h2>
  <div className="grid grid-cols-3 gap-5 mt-8">
    <div className="border border-white p-5">AI Growth Consulting</div>
    <div className="border border-white p-5">Agent Implementation</div>
    <div className="border border-white p-5">Testimonials</div>
  </div>
  <section className="p-12 bg-[#001F3F] text-white text-center">
  <h2 className="text-3xl font-bold">Contact Us</h2>
  <a href="mailto:support@charlieparker.com" className="bg-[#E31C25] text-white px-6 py-3 mt-6 rounded inline-block">Send Email Consultation Request</a>
</section>
</section>
      </main>
    </div>
  );
}
