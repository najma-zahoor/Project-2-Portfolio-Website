function Certificates() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Certificates
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white shadow rounded-lg p-4">
            Certificate {item}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Certificates;