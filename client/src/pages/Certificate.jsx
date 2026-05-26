import html2canvas from "html2canvas";

function Certificate() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const downloadCertificate = async () => {

    const certificate =
      document.getElementById(
        "certificate"
      );

    const canvas =
      await html2canvas(certificate);

    const image =
      canvas.toDataURL("image/png");

    const link =
      document.createElement("a");

    link.href = image;

    link.download =
      "certificate.png";

    link.click();
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col items-center justify-center p-8">

      {/* CERTIFICATE */}
      <div
        id="certificate"
        className="bg-white w-[900px] p-16 rounded-3xl shadow-2xl border-[12px] border-indigo-600"
      >

        <div className="text-center">

          <h1 className="text-6xl font-black text-indigo-700 mb-6">
            Certificate
          </h1>

          <p className="text-2xl text-gray-500 mb-14">
            of Participation
          </p>

          <p className="text-xl text-gray-600">
            This certificate is proudly presented to
          </p>

          <h2 className="text-5xl font-black text-gray-800 my-10">
            {user?.name}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">

            for actively participating in the community
            service initiative organized through
            CampusServe Platform.

          </p>

          <div className="flex justify-between mt-20">

            <div>
              <p className="font-bold text-xl">
                Coordinator
              </p>

              <div className="w-48 border-b-2 border-black mt-10"></div>
            </div>

            <div>
              <p className="font-bold text-xl">
                Principal
              </p>

              <div className="w-48 border-b-2 border-black mt-10"></div>
            </div>

          </div>

        </div>

      </div>

      {/* BUTTON */}
      <button
        onClick={downloadCertificate}
        className="mt-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-[1.02] transition"
      >
        Download Certificate
      </button>

    </div>
  );
}

export default Certificate;