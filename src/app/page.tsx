import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-16">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-br from-primary/10 to-base-100 w-full">
        <div className="hero-content flex-col lg:flex-row gap-12 w-full">
          <div className="avatar">
            <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <Image src="/gambar/potogua.jpeg" alt="Foto Diri" width={160} height={160} />
            </div>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold mb-4 text-primary">Welcome To My Portfolio</h1>
            <p className="py-4 text-lg text-base-content">Saya Denis Firdaus, seorang programmer yang siap membantu project kamu.<br/>Lihat skill, tentang saya, dan project yang sudah saya kerjakan!</p>
            <div className="flex gap-4 mt-6">
              <a className="btn btn-primary" href="/projects">View Project</a>
              <a className="btn btn-outline" href="/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">What People Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-base-200 shadow-md p-4">
            <p className="italic">Kerja sama dengan Denis luar biasa, hasilnya selalu tepat waktu dan berkualitas tinggi!</p>
            <span className="mt-2 block text-right font-semibold text-primary">- Alex</span>
          </div>
          <div className="card bg-base-200 shadow-md p-4">
            <p className="italic">Denis sangat profesional dan responsif, benar-benar merekomendasikan jasanya.</p>
            <span className="mt-2 block text-right font-semibold text-primary">- Sarah</span>
          </div>
          <div className="card bg-base-200 shadow-md p-4">
            <p className="italic">Dia sangat berbakat dalam coding, proyek kami menjadi lebih efisien berkat bantuannya.</p>
            <span className="mt-2 block text-right font-semibold text-primary">- John</span>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Fun Facts</h2>
        <div className="stats stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Proyek Selesai</div>
            <div className="stat-value text-primary">6+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Jam Coding</div>
            <div className="stat-value text-primary">110+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Bahasa Pemrograman</div>
            <div className="stat-value text-primary">3+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Framework</div>
            <div className="stat-value text-primary">1</div>
          </div>
          <div className="stat">
            <div className="stat-title">Game Engine</div>
            <div className="stat-value text-primary">1  </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="flex gap-4 justify-center items-center mt-8">
        <a href="https://www.instagram.com/dnisfrdaus?igsh=bm9vajh5bzR5c3Qx" target="_blank" rel="noopener" className="btn btn-circle btn-outline text-xl"></a>
        <a href="https://www.tiktok.com/@denisfirdaus713?_t=8nqRJkum3MX&_r=1" target="_blank" rel="noopener" className="btn btn-circle btn-outline text-xl"></a>
        <a href="https://github.com/DenisXDaus" target="_blank" rel="noopener" className="btn btn-circle btn-outline text-xl"></a>
      </section>
    </div>
  );
}

