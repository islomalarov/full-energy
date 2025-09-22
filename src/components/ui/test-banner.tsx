'use client';

export const TestBanner = () => {
  return (
    <div className="bg-yellow-500/90 text-black py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-sm">
      <p className="text-sm font-medium">
        ⚠️ Diqqat: Sayt test rejimda ishlamoqda! Barcha ma'lumotlar shartli ravishda ko'rsatilgan
        <a href="#contact" className="underline ml-2 hover:opacity-80">
          Biz bilan bog'laning
        </a>
      </p>
    </div>
  );
};
