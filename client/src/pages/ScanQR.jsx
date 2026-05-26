import { useEffect, useState }
from "react";

import {
  Html5QrcodeScanner,
} from "html5-qrcode";

function ScanQR() {

  const [scanResult,
    setScanResult] =
    useState("");

  useEffect(() => {

    const scanner =
      new Html5QrcodeScanner(
        "reader",
        {
          qrbox: {
            width: 250,
            height: 250,
          },
          fps: 5,
        }
      );

    scanner.render(

      (decodedText) => {

        setScanResult(
          decodedText
        );

        scanner.clear();

      },

      (error) => {
        console.log(error);
      }

    );

  }, []);

  return (

    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl">

        <h1 className="text-5xl font-black text-center text-gray-800 mb-8">

          Scan Event QR

        </h1>

        {/* QR SCANNER */}
        <div id="reader"></div>

        {/* RESULT */}
        {scanResult && (

          <div className="mt-8 bg-green-100 text-green-700 p-5 rounded-2xl text-center font-bold">

            QR Scanned Successfully
            <br /><br />

            {scanResult}

          </div>

        )}

      </div>

    </div>
  );
}

export default ScanQR;  