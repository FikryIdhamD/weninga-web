import { client } from "@/sanity/lib/client";

// Fungsi untuk mengambil data produk dari Sanity secara dinamis
async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    shopeeLink
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-weninga-cream">
      {/* 1. NAVBAR SECTION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-weninga-cream/70 backdrop-blur-xl border-b border-weninga-forest/5">
        {/* Logo Branding */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-weninga-forest tracking-tighter leading-none">
            WENINGA
          </span>
          <span className="text-[10px] tracking-[0.3em] text-weninga-sage font-bold">
            INDONESIA
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-weninga-forest/80">
          <a href="#" className="hover:text-weninga-sage transition-colors">
            Home
          </a>
          <a
            href="#katalog"
            className="hover:text-weninga-sage transition-colors"
          >
            Katalog Produk
          </a>
          <a
            href="#manfaat"
            className="hover:text-weninga-sage transition-colors"
          >
            Manfaat
          </a>
          <a
            href="#tentang"
            className="hover:text-weninga-sage transition-colors"
          >
            Tentang Kami
          </a>
          <a
            href="#kontak"
            className="hover:text-weninga-sage transition-colors"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://s.shopee.co.id/2Vo8jF4cwm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-weninga-forest text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-weninga-sage transition-all duration-300 shadow-md active:scale-95"
          >
            BELI DI SHOPEE
          </a>

          {/* Mobile Menu Toggle (Hanya visual untuk sekarang) */}
          <button className="md:hidden text-weninga-forest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Spacing agar Hero tidak tertutup Navbar yang fixed */}
      <div className="h-20"></div>

      {/* 2. HERO SECTION */}
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-20 md:py-28">
        {/* Dekorasi Latar Belakang (Aksen Organik) */}
        <div className="absolute top-0 right-0 -z-10 opacity-10 translate-x-1/4 -translate-y-1/4">
          <div className="w-[600px] h-[600px] rounded-full bg-weninga-sage blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Teks & CTA (Kolom Kiri) */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-weninga-sage/10 border border-weninga-sage/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-weninga-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-weninga-sage"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-weninga-forest">
                Premium Essential Oil Blend
              </span>
            </div>

            <h1 className="text-5xl md:text-[84px] font-serif text-weninga-forest leading-[1.1] tracking-tight">
              Kehangatan <br />
              <span className="italic font-light text-weninga-sage">
                Menenangkan.
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Cara modern menikmati khasiat Minyak Kayu Putih murni. Hadir
              dengan aroma{" "}
              <span className="font-semibold text-weninga-forest">
                Jasmine, Pandan, dan Berry
              </span>{" "}
              untuk kenyamanan elegan sepanjang hari.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#katalog"
                className="px-10 py-4 bg-weninga-forest text-white rounded-full font-bold shadow-xl shadow-weninga-forest/20 hover:bg-weninga-sage transition-all duration-300 hover:-translate-y-1"
              >
                Lihat Koleksi
              </a>
              <a
                href="#tentang"
                className="px-10 py-4 border-2 border-weninga-forest/10 text-weninga-forest rounded-full font-bold hover:bg-white transition-all duration-300"
              >
                Kenal Weninga
              </a>
            </div>

            {/* Social Proof Sederhana */}
            <div className="flex items-center gap-4 pt-6 justify-center md:justify-start opacity-70">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-weninga-cream bg-weninga-almond"
                  ></div>
                ))}
              </div>
              <p className="text-xs font-medium text-weninga-forest/60">
                Dipercaya oleh <span className="font-bold">500+</span> pelanggan
                setia.
              </p>
            </div>
          </div>

          {/* Visual Produk (Kolom Kanan) */}
          <div className="flex-1 relative w-full max-w-[500px] md:max-w-none">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] bg-gradient-to-br from-weninga-almond/20 to-weninga-sage/10 overflow-hidden border border-white/50 backdrop-blur-sm shadow-2xl flex items-center justify-center group">
              {/* Placeholder Image */}
              <div className="text-center p-12 transition-transform duration-700 group-hover:scale-105">
                <div className="text-7xl mb-6">🧴</div>
                <h3 className="font-serif text-2xl text-weninga-forest italic">
                  Your Daily Comfort
                </h3>
                <p className="text-sm text-weninga-sage mt-2 font-medium">
                  Coming soon: High Resolution Product Shot
                </p>
              </div>

              {/* Floating Tag */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-weninga-sage/20 animate-bounce-slow">
                <p className="text-[10px] uppercase font-bold text-weninga-sage">
                  Varian Terpopuler
                </p>
                <p className="text-sm font-bold text-weninga-forest uppercase tracking-tighter">
                  Weninga Jasmine
                </p>
              </div>
            </div>

            {/* Aksen Lingkaran Belakang */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-weninga-almond rounded-full -z-0 opacity-20 blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-weninga-sage rounded-full -z-0 opacity-30 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG SECTION (DINAMIS DARI SANITY) */}
      {/* 3. PRODUCT CATALOG SECTION */}
      <section
        id="katalog"
        className="bg-white py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]"
      >
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-weninga-forest leading-tight">
                Koleksi Varian <br />
                <span className="text-weninga-sage italic font-light">
                  Weninga Essential.
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Setiap tetes dirancang untuk memberikan kehangatan yang pas
                dengan aroma yang tidak menyengat. Cocok untuk menemani
                aktivitas harian Anda.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2 text-weninga-forest/30 font-bold text-6xl opacity-10 font-serif">
                01 / 04
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product: any) => (
              <div
                key={product._id}
                className="group relative flex flex-col h-full bg-weninga-cream/30 border border-weninga-forest/5 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl hover:shadow-weninga-sage/10 transition-all duration-500"
              >
                {/* Badge Diskon/Label (Opsional) */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold text-weninga-forest px-3 py-1 rounded-full border border-weninga-forest/5 shadow-sm">
                    NEW ARRIVAL
                  </span>
                </div>

                {/* Image Container */}
                <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden mb-8 bg-white shadow-inner">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-300">
                      <span className="text-4xl mb-2">🌿</span>
                      <p className="text-[10px] font-medium italic">
                        Image coming soon
                      </p>
                    </div>
                  )}

                  {/* Quick View / Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-weninga-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={product.shopeeLink}
                      target="_blank"
                      className="bg-white text-weninga-forest p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-weninga-forest group-hover:text-weninga-sage transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description ||
                      "Ekstrak minyak kayu putih murni dengan sentuhan aroma terapeutik."}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-weninga-forest/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Harga
                      </span>
                      <span className="font-bold text-xl text-weninga-sage">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={product.shopeeLink}
                      target="_blank"
                      className="bg-weninga-forest text-white h-12 px-6 rounded-2xl flex items-center justify-center font-bold text-xs hover:bg-weninga-sage transition-all duration-300 active:scale-95 shadow-lg shadow-weninga-forest/10"
                    >
                      BELI
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-20 p-8 rounded-[2rem] bg-weninga-forest/5 border border-weninga-forest/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-weninga-sage flex items-center justify-center text-white shadow-lg">
                🚚
              </div>
              <p className="text-weninga-forest font-medium">
                Tersedia pengiriman ke seluruh Indonesia via Shopee & Tokopedia.
              </p>
            </div>
            <a
              href="#kontak"
              className="text-weninga-sage font-bold text-sm border-b-2 border-weninga-sage pb-1"
            >
              Berminat Jadi Reseller?
            </a>
          </div>
        </div>
      </section>

      {/* 4. MANFAAT SECTION */}
      {/* 4. MANFAAT SECTION */}
      <section
        id="manfaat"
        className="bg-weninga-forest py-24 px-6 relative overflow-hidden"
      >
        {/* Aksen Latar Belakang */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-weninga-sage rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-weninga-almond font-bold tracking-[0.3em] text-xs uppercase">
              The Weninga Quality
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">
              Kebaikan Alam dalam <br />
              <span className="italic text-weninga-sage font-light">
                Setiap Tetes Kehangatan.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "Murni & Alami",
                desc: "Diekstraksi dari daun kayu putih pilihan tanpa campuran bahan kimia berbahaya.",
              },
              {
                icon: "✨",
                title: "Aroma Terapeutik",
                desc: "Inovasi aroma Jasmine, Pandan, dan Berry yang memberikan efek relaksasi instan.",
              },
              {
                icon: "👜",
                title: "Kemasan Praktis",
                desc: "Desain botol travel-friendly yang elegan, mudah dibawa dan digunakan kapan saja.",
              },
              {
                icon: "🔥",
                title: "Panas Merata",
                desc: "Memberikan rasa hangat yang bertahan lama untuk meredakan pegal dan kembung.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-weninga-sage to-weninga-forest rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-weninga-almond mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Tambahan di bawah Manfaat */}
          <div className="mt-20 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-weninga-sage to-transparent">
              <div className="bg-weninga-forest px-8 py-3 rounded-full text-white/80 text-sm italic">
                "Lebih dari sekadar minyak kayu putih, ini adalah teman gaya
                hidup sehat Anda."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TENTANG KAMI SECTION */}
      {/* 5. TENTANG KAMI SECTION */}
      <section
        id="tentang"
        className="py-28 px-6 bg-weninga-cream relative overflow-hidden"
      >
        {/* Aksen Daun Dekoratif (Opsi: Gunakan SVG atau Icon) */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] select-none pointer-events-none rotate-12">
          🌿
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Kolom Visual (Kiri) */}
            <div className="flex-1 relative w-full">
              <div className="relative z-10 group">
                {/* Frame Foto Utama */}
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-weninga-almond/20 flex items-center justify-center p-12 text-center">
                    <div className="space-y-4">
                      <span className="text-5xl block">🏺</span>
                      <p className="text-weninga-forest font-serif italic text-lg leading-relaxed">
                        "Tradisi yang diekstraksi <br /> dengan integritas
                        modern."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Element: Sejarah Singkat */}
                <div className="absolute -bottom-10 -right-6 md:right-0 bg-white p-8 rounded-[2rem] shadow-xl max-w-[280px] z-20 border border-weninga-sage/10 animate-bounce-slow">
                  <h5 className="font-bold text-weninga-forest mb-2 uppercase text-[10px] tracking-widest">
                    Sejak 2024
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Dimulai dari sebuah studio kecil di Bandung, meracik
                    kebaikan alam untuk kenyamanan raga.
                  </p>
                </div>
              </div>

              {/* Lingkaran Dekorasi Belakang */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-weninga-sage/10 rounded-full -z-0"></div>
            </div>

            {/* Kolom Teks (Kanan) */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h4 className="text-weninga-sage font-bold tracking-[0.2em] text-xs uppercase">
                  The Story Behind
                </h4>
                <h2 className="text-5xl md:text-6xl font-serif text-weninga-forest leading-tight">
                  Menghidupkan Kembali <br />
                  <span className="italic font-light">Kearifan Lokal.</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Weninga bukan sekadar produk kesehatan; ia adalah perayaan
                  atas kekayaan flora Indonesia. Kami percaya bahwa kehangatan
                  sejati berasal dari kemurnian bahan baku yang dikelola dengan
                  penuh rasa hormat.
                </p>
                <p>
                  Dengan menggabungkan minyak kayu putih kelas satu dan aroma
                  terapeutik pilihan, kami menciptakan pengalaman relaksasi yang
                  belum pernah Anda rasakan sebelumnya dari sebuah botol minyak
                  kayu putih.
                </p>
              </div>

              {/* Milestone / Values */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <span className="text-3xl font-serif text-weninga-sage">
                    01.
                  </span>
                  <h5 className="font-bold text-weninga-forest text-sm">
                    Ethis Sourcing
                  </h5>
                  <p className="text-xs text-gray-500">
                    Bahan baku dari petani lokal terpilih.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl font-serif text-weninga-sage">
                    02.
                  </span>
                  <h5 className="font-bold text-weninga-forest text-sm">
                    Small Batch
                  </h5>
                  <p className="text-xs text-gray-500">
                    Diproduksi terbatas untuk menjaga kualitas.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button className="group flex items-center gap-4 text-weninga-forest font-bold tracking-tighter">
                  <span className="w-12 h-12 rounded-full border border-weninga-forest flex items-center justify-center group-hover:bg-weninga-forest group-hover:text-white transition-all duration-300">
                    →
                  </span>
                  LIHAT PROSES KAMI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      {/* 6. HUBUNGI KAMI & FOOTER SECTION */}
      <footer id="kontak" className="bg-white pt-24 pb-12 px-6">
        <div className="container mx-auto">
          {/* Top Part: Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-weninga-sage font-bold tracking-[0.2em] text-xs uppercase">
                  Get in Touch
                </h4>
                <h2 className="text-4xl md:text-5xl font-serif text-weninga-forest leading-tight">
                  Mari Berdiskusi <br />
                  <span className="italic font-light">Bersama Weninga.</span>
                </h2>
                <p className="text-gray-500 max-w-md leading-relaxed">
                  Punya pertanyaan tentang produk kami atau tertarik menjadi
                  mitra reseller? Kami selalu siap membantu Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bagian Email */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Email Resmi
                  </p>
                  {/* Menambahkan tag link mailto */}
                  <a
                    href="mailto:hello@weninga.id?subject=Tanya%20Produk%20Weninga"
                    className="text-weninga-forest font-medium hover:text-weninga-sage transition-colors duration-300 block"
                  >
                    hello@weninga.id
                  </a>
                </div>

                {/* Bagian WhatsApp */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    WhatsApp CS
                  </p>
                  {/* Menambahkan tag link WhatsApp */}
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Weninga,%20saya%20ingin%20tanya%20tentang%20produknya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-weninga-forest font-medium hover:text-weninga-sage transition-colors duration-300 block"
                  >
                    +62 812-3456-7890
                  </a>
                </div>

                {/* Lokasi (Tetap) */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Lokasi Studio
                  </p>
                  <p className="text-weninga-forest font-medium">
                    Bandung, Jawa Barat
                  </p>
                </div>
              </div>

              {/* Social Media Pills */}
              <div className="flex gap-4 pt-4">
                {["Instagram", "TikTok", "Shopee"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-6 py-2 rounded-full border border-weninga-forest/10 text-xs font-bold text-weninga-forest hover:bg-weninga-forest hover:text-white transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="bg-weninga-cream/50 p-8 md:p-12 rounded-[3rem] border border-weninga-forest/5 shadow-inner">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-weninga-forest uppercase ml-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Jhon Doe"
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-weninga-sage outline-none shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-weninga-forest uppercase ml-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="contoh@mail.com"
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-weninga-sage outline-none shadow-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-weninga-forest uppercase ml-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-weninga-sage outline-none shadow-sm resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-weninga-forest text-white font-bold py-5 rounded-2xl hover:bg-weninga-sage transition-all duration-300 shadow-xl shadow-weninga-forest/10 active:scale-[0.98]">
                  KIRIM PESAN SEKARANG
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Part: Footer Copyright */}
          <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl font-bold text-weninga-forest tracking-tighter">
                WENINGA
              </span>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] mt-1 italic">
                KEHANGATAN ALAMI INDONESIA
              </p>
            </div>

            <div className="flex gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-weninga-sage transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-weninga-sage transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-weninga-sage transition">
                Shipping Info
              </a>
            </div>

            <div className="text-[11px] text-gray-400 font-medium">
              © 2026 WENINGA. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
