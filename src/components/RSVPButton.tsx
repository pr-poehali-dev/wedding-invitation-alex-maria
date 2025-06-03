import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const RSVPButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    // Here you would typically send the confirmation to a backend
    console.log("RSVP confirmed!");
  };

  return (
    <div className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-md mx-auto">
        <h3 className="font-dancing text-3xl text-emerald-700 mb-6">
          Подтверждение присутствия
        </h3>

        {!isConfirmed ? (
          <button
            onClick={handleConfirm}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-cormorant text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <Icon name="Check" size={24} />
            <span>Подтверждаю участие</span>
          </button>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-emerald-600" />
            </div>
            <p className="font-cormorant text-xl text-emerald-700 mb-2">
              Спасибо за подтверждение!
            </p>
            <p className="font-cormorant text-emerald-600">
              Ждем вас на нашем празднике! 💚
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPButton;
