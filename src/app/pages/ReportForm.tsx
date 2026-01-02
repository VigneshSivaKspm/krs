import React, { useState } from "react";
import { addReport } from "../../firebase";
import { auth } from "../../firebase";

async function uploadToCloudinary(file: File, ward: number) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !uploadPreset) return null;

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", uploadPreset);
  // map upload to a ward-specific folder so assets are organized by ward
  fd.append("folder", `reports/ward-${ward}`);

  const res = await fetch(url, { method: "POST", body: fd });
  if (!res.ok) throw new Error("Upload failed");
  const data = await res.json();
  return data.secure_url;
}

export default function ReportForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ward, setWard] = useState<number>(1);
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files;
    if (!f) return;
    setFiles(Array.from(f));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const uploaded: string[] = [];
      for (const f of files) {
        const url = await uploadToCloudinary(f, ward);
        if (url) uploaded.push(url);
      }

      const payload = {
        name,
        phone,
        ward,
        area,
        street,
        landmark,
        photos: uploaded,
        userId: auth.currentUser?.uid || null,
      };

      await addReport(ward, payload);
      setMessage("Report submitted. Thank you.");
      setName(""); setPhone(""); setArea(""); setStreet(""); setLandmark(""); setFiles([]);
    } catch (err: any) {
      setMessage(err?.message || "Failed to submit report");
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-black text-white pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-neutral-900 p-6 rounded-md shadow">
          <h2 className="text-2xl font-bold mb-4">Submit a Request / Report</h2>
          <label className="block mb-2 text-sm text-neutral-300">Name*</label>
          <input required placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
          <label className="block mb-2 text-sm text-neutral-300">Phone*</label>
          <input required placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />

          <label className="block mb-2 text-sm text-neutral-300">Ward*</label>
          <select value={ward} onChange={(e)=>setWard(Number(e.target.value))} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300">
            {Array.from({length:15},(_,i)=>i+1).map(w=> <option key={w} value={w}>{w}</option>)}
          </select>

          <label className="block mb-2 text-sm text-neutral-300">Area</label>
          <input required placeholder="Area (example: Anna Nagar)" value={area} onChange={(e)=>setArea(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
          <label className="block mb-2 text-sm text-neutral-300">Street / Locality</label>
          <input placeholder="Street / locality" value={street} onChange={(e)=>setStreet(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
          <label className="block mb-2 text-sm text-neutral-300">Landmark (optional)</label>
          <input placeholder="Nearby landmark (optional)" value={landmark} onChange={(e)=>setLandmark(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />

          <label className="block mb-2 text-sm text-neutral-300">Photos (optional)</label>
          <input type="file" multiple accept="image/*" onChange={handleFiles} className="w-full mb-4" />

          <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">{loading?"Submitting...":"Submit Report"}</button>
          {message && <div className="mt-4 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  )
}
