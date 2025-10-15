import React, { useState } from "react";

export default function PortfolioSite() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "travel", "wildlife", "people"];

  const images = [
    { id: 1, title: "Old Harbour", category: "travel", src: "https://via.placeholder.com/1200x800?text=Travel+1" },
    { id: 2, title: "Forest Owl", category: "wildlife", src: "/mnt/data/©_Luca_Lorenz__courtesy_Wildlife_Photographer_of_the_Year__5_.jpeg" },
    { id: 3, title: "Market Portrait", category: "people", src: "https://via.placeholder.com/1200x800?text=People+1" },
    { id: 4, title: "Coastal Road", category: "travel", src: "https://via.placeholder.com/1200x800?text=Travel+2" },
    { id: 5, title: "Night Reef", category: "wildlife", src: "https://via.placeholder.com/1200x800?text=Wildlife+2" },
    { id: 6, title: "Elderly Shoes", category: "people", src: "https://via.placeholder.com/1200x800?text=People+2" },
  ];

  const filtered = filter === "all" ? images : images.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Mike O'Connor</h1>
          <p className="text-sm text-gray-600">Editor of <em>Australian Photography</em> — Personal photography portfolio</p>
        </div>

        <nav className="flex items-center space-x-4">
          <a href="#portfolio" className="text-sm hover:underline">Portfolio</a>
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-64 sm:h-96 bg-gray-100 flex items-center justify-center">
            <img src="https://via.placeholder.com/1600x900?text=Hero+Image" alt="hero" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Personal Stories in Light & Place</h2>
                <p className="mt-2 text-gray-700">Travel. Wildlife. People — work from around the region and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <div className="flex gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-sm px-3 py-1 rounded-full border ${filter === c ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-200"}`}
                >
                  {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <figure key={img.id} className="group">
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-gray-700">{img.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-gray-50 p-6 rounded-lg">
          <div className="md:flex md:gap-8">
            <div className="md:w-1/3">
              <img src="https://via.placeholder.com/600x800?text=Mike+O'Connor" alt="Mike" className="w-full rounded-lg object-cover" />
            </div>
            <div className="mt-4 md:mt-0 md:w-2/3">
              <h4 className="text-lg font-semibold">Mike O'Connor</h4>
              <p className="mt-2 text-gray-700">Editor of <em>Australian Photography</em>. This portfolio showcases my personal work across travel, wildlife and portraiture — images fired by curiosity and shaped by narrative. I live and work in New Zealand and travel regularly for assignments and personal projects.</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li><strong>Specialties:</strong> Travel, wildlife, people</li>
                <li><strong>Available for:</strong> Assignments, collaborations, talks</li>
                <li><strong>Equipment:</strong> Mirrorless systems, selection of primes and telephotos</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 p-6 rounded-lg">
          <h5 className="text-lg font-semibold">Contact</h5>
          <p className="mt-2 text-gray-700">For commissions, press, and prints please get in touch.</p>
          <div className="mt-4">
            <a href="mailto:mike@example.com" className="inline-block rounded-md px-4 py-2 border border-gray-900 text-sm hover:bg-gray-900 hover:text-white transition">Email me</a>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mike O'Connor — Editor, Australian Photography</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-sm hover:underline">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="text-sm hover:underline">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="text-sm hover:underline">X</a>
          </div>
        </div>
      </footer>

      <a href="mailto:mike@example.com" className="fixed right-6 bottom-6 bg-white border border-gray-300 rounded-full shadow px-4 py-2 text-sm">Email</a>
    </div>
  );
}
