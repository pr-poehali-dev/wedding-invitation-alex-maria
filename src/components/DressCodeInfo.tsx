import React from "react";

const DressCodeInfo = () => {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">👗</div>
          <h3 className="font-dancing text-3xl text-emerald-700 mb-4">
            Дресс-код
          </h3>
          <p className="font-cormorant text-xl text-emerald-600 mb-6">
            Бежево-зеленая гамма
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <div className="w-8 h-8 bg-emerald-500 rounded-full shadow-md"></div>
          <div className="w-8 h-8 bg-emerald-400 rounded-full shadow-md"></div>
          <div className="w-8 h-8 bg-amber-200 rounded-full shadow-md"></div>
          <div className="w-8 h-8 bg-amber-100 rounded-full shadow-md"></div>
        </div>

        <div className="bg-white/60 rounded-xl p-6 border border-emerald-200">
          <div className="text-2xl mb-3 text-center">🎉</div>
          <p className="font-cormorant text-center text-emerald-700 leading-relaxed">
            На нашей свадьбе планируется очень активная развлекательная
            программа для взрослых. Поэтому просим вас оставить деток в надежных
            руках в этот вечер.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressCodeInfo;
