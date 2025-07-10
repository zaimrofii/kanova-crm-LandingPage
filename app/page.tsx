"use client";

import useLenisScroll from "./hooks/LenisScroll";
import { useState } from "react";

export default function CRMLandingPage() {
  useLenisScroll(); // 🟢 Tambahkan efek scroll halus
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Jarak dari tengah
    const offsetX = x - width / 2;
    const offsetY = y - height / 2;

    // Normalisasi ke -1 s/d 1
    const rotateY = (offsetX / (width / 2)) * 3; // kiri/kanan
    const rotateX = (-offsetY / (height / 2)) * 3; // atas/bawah

    setTransformStyle(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`
    );
  };

  const resetTransform = () => {
    setTransformStyle("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <main className="font-sans text-gray-900">
      {/* Navbar */}
      <section className="fixed top-0 left-0 z-20 h-15 w-full bg-white shadow">
        <div className="w-[80%] h-full mx-auto flex gap-20 items-center py-4">
          <h1 className="text-blue-800 font-bold text-md md:text-2xl">
            CRM-Project
          </h1>
          <ul className="flex gap-5 items-center font-semibold">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-blue-600 transition">
                Product
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Hero Section */}
      <section
        id="home"
        className="h-[80vh] lg:h-[100vh] flex flex-col lg:flex-row items-center gap-10 justify-center bg-orange-50 px-6 lg:px-20 pt-20"
      >
        <div className="w-[80vw] lg:w-2/5 flex flex-col items-center">
          <div>
            <p className="text-lg md:text-xl text-black mb-4">
              Unify your contacts. Streamline your activities.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple CRM Platform
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              One lightweight platform for managing clients, tracking tasks, and
              boosting productivity — all the tools you need, in one place.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#product"
                className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full text-lg hover:bg-sky-700 transition text-center"
              >
                Get a Demo
              </a>
              <a
                href="#"
                className="inline-block border border-sky-600 text-sky-600 px-8 py-3 rounded-full text-lg hover:bg-sky-50 transition text-center"
              >
                Buy for $15/mo
              </a>
            </div>
          </div>
        </div>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          style={{ perspective: "600px" }}
          className="hidden lg:flex relative w-2/5 justify-center items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35vw] w-[35vw] bg-orange-200 rounded-full"></div>

          <img
            src="/hero3d.png"
            alt="laptop 3d"
            className="relative z-10 w-[600px] h-auto transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: transformStyle,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="product"
        className="py-20 px-6 md:px-20 bg-white scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="p-5 py-10 rounded-xl border border-gray-200 flex flex-col gap-5 shadow-lg">
            <img src="/crm1.jpg" alt="" className="w-full" />
            <div>
              <h2 className="text-2xl font-bold mb-4">📇 Contact Management</h2>
              <p className="text-gray-700 text-lg">
                Organize and manage your contacts with clarity. View detailed
                profiles, segment by tags, and track interactions — all in one
                place.
              </p>
            </div>
          </div>
          <div className="p-5 py-10 rounded-xl border border-gray-200 flex flex-col gap-5 shadow-lg">
            <img src="/crm2.jpg" alt="" className="w-full" />
            <div>
              <h2 className="text-2xl font-bold mb-4">📝 Activity Tracking</h2>
              <p className="text-gray-700 text-lg">
                Keep track of tasks, notes, and email logs related to each
                client. Stay on top of every interaction and never miss a
                follow-up again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Start Building Stronger Client Relationships Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          This MVP CRM project showcases clean UX, real-time data management,
          and scalable design — a perfect blend of usability and tech precision.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition"
        >
          Try the Demo
        </a>
      </section>
    </main>
  );
}
