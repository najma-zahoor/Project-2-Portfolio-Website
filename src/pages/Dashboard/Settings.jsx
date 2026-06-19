function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4 text-white bg-white/10 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold">
        Settings
      </h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full border p-3 rounded text-black bg-yellow-500"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded text-black bg-yellow-500"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
}

export default Settings;