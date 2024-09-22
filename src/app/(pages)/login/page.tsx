"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "../login/1.png";
import Image2 from "../login/2.png";
import Image3 from "../login/3.png";
import Image4 from "../login/4.png";

const images = [Image1, Image2, Image3];
//slider images

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Images change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:flex sm:w-1/2 bg-red-100 items-center justify-center">
        <div className="p-8 bg-white shadow-lg rounded-lg">
          <Image
            src={images[currentImage]}
            alt="Slider Image"
            className="w-128 h-128 object-cover rounded-lg"
            width={360}
            height={540}
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="max-w-sm w-full text-center">
          <Image
            src={Image4}
            alt="Logo"
            className="w-256 h-256 mx-auto mb-4"
            width={256}
            height={256}
          />
          <h1 className="text-3xl font-bold mb-2 text-gray-600">
            Tekrar Hoşgeldiniz!
          </h1>
          <p className="text-gray-600 mb-6">Lütfen hesabınıza giriş yapın.</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              className="p-3 border border-gray-300 rounded-md text-gray-600"
            />
            <input
              type="password"
              placeholder="Şifre"
              className="p-3 border border-gray-300 rounded-md text-gray-600"
            />

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" /> Beni Hatırla
              </label>
              <a href="/recover" className="text-blue-500">
                {/* recover page not added */}
                Şifrenizi mi unuttunuz?
              </a>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
            >
              Giriş Yap
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Üye değil misin?
            <a href="/register" className="text-blue-500">
              {/* register page not added */}
              Hemen kayıt ol.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
