import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const initialFeedback = [
  {
    id: 1,
    name: 'Ayu Wulandari',
    email: 'ayu@example.com',
    message: 'Tolong sediakan lebih banyak produk organik.',
    status: 'Belum dibaca',
  },
  {
    id: 2,
    name: 'Dimas Rahman',
    email: 'dimas@example.com',
    message: 'Pelayanan kasir sangat ramah, terima kasih!',
    status: 'Diproses',
  },
];

const statusColors = {
  'Belum dibaca': 'bg-red-100 text-red-800',
  'Diproses': 'bg-yellow-100 text-yellow-800',
  'Selesai': 'bg-green-100 text-green-800',
};

export default function CustomerFeedbackManager() {
  const [feedbackList, setFeedbackList] = useState(initialFeedback);
  const [replyContent, setReplyContent] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Sort feedback: Belum dibaca di atas
  const sortedFeedback = [...feedbackList].sort((a, b) => {
    const statusPriority = {
      'Belum dibaca': 0,
      'Diproses': 1,
      'Selesai': 1,
    };
    return statusPriority[a.status] - statusPriority[b.status];
  });

  const updateStatus = (id, newStatus) => {
    setFeedbackList(
      feedbackList.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleReply = (feedback) => {
    setSelectedFeedback(feedback);
    setReplyContent('');
  };

  const sendReply = () => {
    if (selectedFeedback && replyContent.trim()) {
      alert(`Email terkirim ke ${selectedFeedback.email}\n\nIsi: ${replyContent}`);
      setReplyContent('');
      setSelectedFeedback(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-b pb-3">
        Manajemen Masukan Pelanggan
      </h1>

      <div className="space-y-6">
        {sortedFeedback.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={item.status}
                onChange={(e) => updateStatus(item.id, e.target.value)}
              >
                <option value="Belum dibaca">Belum dibaca</option>
                <option value="Diproses">Diproses</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
            <p className="text-sm text-gray-500 italic mb-2">{item.email}</p>
            <p className="text-gray-900 mb-4 text-lg">{item.message}</p>
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${statusColors[item.status]}`}
            >
              {item.status}
            </span>
            <div className="mt-4">
              <button
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
                onClick={() => handleReply(item)}
              >
                <Mail className="w-5 h-5" /> Balas via Email
              </button>
            </div>
          </div>
        ))}

        {selectedFeedback && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Balas untuk: <span className="text-indigo-600">{selectedFeedback.name}</span>{' '}
              (<span className="italic">{selectedFeedback.email}</span>)
            </h2>
            <textarea
              placeholder="Tulis balasan email di sini..."
              className="w-full min-h-[120px] border border-gray-300 rounded-lg p-4 text-base text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-400"
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <div className="flex justify-end gap-4 mt-5">
              <button
                onClick={sendReply}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Kirim Balasan
              </button>
              <button
                onClick={() => setSelectedFeedback(null)}
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
