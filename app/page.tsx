
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-white">
      <header className="fixed top-0 left-0 w-full bg-black z-10 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-impact">Charlie Parker</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-[#E31C25]">Home</a>
          <a href="#" className="hover:text-[#E31C25]">About</a>
          <a href="#" className="hover:text-[#E31C25]">Services</a>
          <a href="#" className="hover:text-[#E31C25]">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center pt-20">
        <section className="w-full bg-[#001F3F] text-center p-16 min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-6xl font-bold font-impact tracking-tight mb-4">Charlie Parker AI Consulting</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Transform your business with AI agents for growth and efficiency.</p>
          <button className="bg-[#E31C25] text-white px-8 py-4 rounded font-bold hover:bg-red-700">Get Started</button>
        </section>
        <section className="w-full p-16 bg-black">
          <h2 className="text-4xl font-bold font-impact text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-white p-8 rounded">
              <h3 className="text-2xl font-bold mb-4">AI Growth Strategies</h3>
              <p>Custom plans to scale your business using AI.</p>
            </div>
            <div className="border border-white p-8 rounded">
              <h3 className="text-2xl font-bold mb-4">Agent Implementation</h3>
              <p>Build and deploy intelligent AI agents.</p>
            </div>
            <div className="border border-white p-8 rounded">
              <h3 className="text-2xl font-bold mb-4">Consulting & Training</h3>
              <p>Expert advice and training on AI integration.</p>
            </div>
          </div>
        </section>
        <section className="w-full p-16 bg-[#001F3F] text-center">
          <h2 className="text-4xl font-bold font-impact mb-8">Contact Us</h2>
          <p className="text-xl mb-8">Ready to get started? Reach out.</p>
          <a href="mailto:support@charlieparker.com" className="bg-[#E31C25] text-white px-8 py-4 rounded font-bold hover:bg-red-700">Send Email Request</a>
        </section>
      </main>
      <footer className="w-full p-8 bg-black text-center border-t border-white/20">
        <p>&copy; 2025 Charlie Parker AI Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
