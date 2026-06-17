function Contact() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-5">
        Contact
      </h1>
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-800"/>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800"/>
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded bg-gray-800"/>
        <button className="bg-blue-500 px-6 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
export default Contact;