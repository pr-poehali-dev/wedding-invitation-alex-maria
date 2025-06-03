import React from "react";

const WeddingHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <h1 className="font-dancing text-6xl md:text-8xl mb-4 text-[#d43211]">
          Александр и Мария
        </h1>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6"></div>
        <p className="font-cormorant text-2xl text-emerald-600 italic">
          приглашают вас разделить радость нашего особенного дня
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-md mx-auto">
        <div className="text-center">
          <div className="text-4xl mb-2">💍</div>
          <h2 className="font-dancing text-3xl text-emerald-700 mb-2">
            11 сентября 2025
          </h2>
          <p className="font-cormorant text-lg text-emerald-600">
            г. Чебоксары
            <br />
            пр-кт Максима Горького, 2М
            <br />
            шатер "Венеция"
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingHeader;
