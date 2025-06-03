import React from "react";
import WeddingHeader from "@/components/WeddingHeader";
import EventSchedule from "@/components/EventSchedule";
import DressCodeInfo from "@/components/DressCodeInfo";
import RSVPButton from "@/components/RSVPButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <WeddingHeader />
        <EventSchedule />
        <DressCodeInfo />
        <RSVPButton />

        <div className="text-center mt-12 mb-8">
          <p className="font-cormorant text-emerald-600 italic">
            С любовью и нетерпением ждем встречи с вами! 💚
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
