function Settings() {
  return (
    <form className="max-w-md space-y-4">
      <h2 className="text-3xl font-bold">
        Settings
      </h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full border p-3 rounded"/>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded"/>
      <button className="bg-blue-500 text-white px-6 py-2 rounded">
        Save
      </button>
    </form>
  );
}
export default Settings;