import { useState } from "react";

export default function ComplaintForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    setFormData({ name: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000); // reset notif setelah 3 detik
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Formulir Keluhan / Masukan</h1>
      {submitted && (
        <div className="mb-4 text-green-600 font-medium">
          Terima kasih, keluhan Anda sudah kami terima.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Nama</label>
          <input
            type="text"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Keluhan / Masukan</label>
          <textarea
            required
            className="w-full border px-4 py-2 rounded"
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
