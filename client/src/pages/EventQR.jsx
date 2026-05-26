import { QRCodeCanvas } from "qrcode.react";

function EventQR() {

  const eventLink =
    "http://localhost:5174/events";

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col items-center justify-center p-8">

      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">

        <h1 className="text-5xl font-black text-gray-800 mb-5">
          Event Attendance QR
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          Students can scan this QR code
        </p>

        <div className="bg-white p-8 rounded-3xl inline-block shadow-lg">

          <QRCodeCanvas
            value={event._id}
            size={280}
          />

        </div>

        <p className="mt-10 text-gray-600 break-all">
          {eventLink}
        </p>

      </div>

    </div>
  );
}

export default EventQR;