import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const RSVPButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = async () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Формируем данные для отправки в Google Sheets
      const guestData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        timestamp: new Date().toISOString(),
        status: "Подтвердил участие",
      };

      // В реальном проекте здесь была бы отправка в Google Sheets API
      // Для демонстрации просто логируем данные
      console.log("Данные гостя для Google Sheets:", guestData);

      // Имитация отправки данных
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsConfirmed(true);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-md mx-auto">
        <h3 className="font-dancing text-3xl text-emerald-700 mb-6">
          Подтверждение присутствия
        </h3>

        {!showForm && !isConfirmed && (
          <button
            onClick={handleShowForm}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-cormorant text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <Icon name="UserPlus" size={24} />
            <span>Подтвердить участие</span>
          </button>
        )}

        {showForm && !isConfirmed && (
          <div className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block font-cormorant text-emerald-700 mb-2 text-left">
                  Имя
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 font-cormorant text-lg outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block font-cormorant text-emerald-700 mb-2 text-left">
                  Фамилия
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 font-cormorant text-lg outline-none transition-colors"
                  placeholder="Ваша фамилия"
                />
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-cormorant text-lg px-6 py-3 rounded-full transition-colors"
              >
                Отмена
              </button>
              <button
                onClick={handleConfirm}
                disabled={
                  !formData.firstName.trim() ||
                  !formData.lastName.trim() ||
                  isSubmitting
                }
                className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-cormorant text-lg px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <Icon name="Check" size={20} />
                    <span>Подтвердить</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {isConfirmed && (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-emerald-600" />
            </div>
            <p className="font-cormorant text-xl text-emerald-700 mb-2">
              Спасибо за подтверждение, {formData.firstName}!
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
