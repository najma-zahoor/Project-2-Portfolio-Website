import cert1 from "../../assets/cert1.jpg";
import cert2 from "../../assets/cert2.jpg";


function Certificates() {
  const certificates = [
    { id: 1, image: cert1, title: "Frontend DevelopmentCertificate" },
    { id: 2, image: cert2, title: "Internship Certificate" }
  ];

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;