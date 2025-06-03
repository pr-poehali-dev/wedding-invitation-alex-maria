import React from "react";
import Icon from "@/components/ui/icon";

const EventSchedule = () => {
  const schedule = [
    { time: "15:30", event: "Сбор гостей", icon: "Users" },
    { time: "16:00", event: "Выездная регистрация", icon: "Heart" },
    { time: "17:00", event: "Начало банкета", icon: "Utensils" },
    { time: "22:00", event: "Завершение банкета", icon: "Clock" },
  ];

  return (
    <div className="mb-12">
      <h3 className="font-dancing text-4xl text-emerald-700 text-center mb-8">
        Программа торжества
      </h3>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-2xl mx-auto">
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={item.icon}
                    size={20}
                    className="text-emerald-600"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between my-0 py-0 px-0 mx-0 rounded-3xl">
                  <span className="font-cormorant text-xl text-emerald-700 font-semibold">
                    {item.time}
                  </span>
                  <span className="font-cormorant text-lg text-emerald-600 px-[1px]">
                    {item.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
