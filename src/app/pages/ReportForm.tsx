import React, { useState, useEffect, useRef } from "react";
import { addReport, getUserDetails } from "../../firebase";
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

export default function ReportForm({ embedded = false }: { embedded?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ward, setWard] = useState<number>(1);
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files;
    if (!f) return;
    setFiles(Array.from(f));
  };

  useEffect(() => {
    // generate object URLs for previews
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [files]);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const openFilePicker = () => fileInputRef.current?.click();

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
        title,
        description,
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
      setTitle(""); setDescription(""); setName(""); setPhone(""); setArea(""); setStreet(""); setLandmark(""); setFiles([]);
    } catch (err: any) {
      setMessage(err?.message || "Failed to submit report");
    } finally { setLoading(false); }
  };

  useEffect(() => {
    // If user is logged in, prefill form with stored details but allow editing
    const u = auth.currentUser;
    if (!u) return;
    (async () => {
      try {
        const data = await getUserDetails(u.uid);
        if (data) {
          if (data.name) setName(data.name);
          if (data.phone) setPhone(data.phone);
          if (data.ward) setWard(Number(data.ward));
          if (data.area) setArea(data.area || '');
          if (data.street) setStreet(data.street || '');
          if (data.landmark) setLandmark(data.landmark || '');
        } else {
          // fallback to displayName
          if (u.displayName) setName(u.displayName);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const formNode = (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold">Submit a Request / Report</h3>
        <p className="text-xs text-neutral-400 mt-1">Share photos and details — we'll handle it.</p>
      </div>

        <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="block mb-1 text-sm text-neutral-300">Title*</label>
          <input required placeholder="Brief title for the report" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Description*</label>
          <textarea required placeholder="Describe the issue or request" value={description} onChange={(e)=>setDescription(e.target.value)} rows={4} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Name*</label>
          <input required placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Phone*</label>
          <input required placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Ward*</label>
          <select required value={ward} onChange={(e)=>setWard(Number(e.target.value))} className="w-full p-2 mb-0 bg-white text-black rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
            {Array.from({length:15},(_,i)=>i+1).map(w=> <option key={w} value={w} className="text-black">{w}</option>)}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Area</label>
          <input required placeholder="Area (example: Anna Nagar)" value={area} onChange={(e)=>setArea(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Street / Locality</label>
          <input placeholder="Street / locality" value={street} onChange={(e)=>setStreet(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Landmark (optional)</label>
          <input placeholder="Nearby landmark (optional)" value={landmark} onChange={(e)=>setLandmark(e.target.value)} className="w-full p-2 mb-0 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Photos (optional)</label>
          <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" />
          <div
            onClick={openFilePicker}
            className="w-full cursor-pointer p-3 rounded-lg border-2 border-dashed border-neutral-700 text-center bg-white/3 hover:bg-white/5 transition"
          >
            <div className="text-sm text-neutral-300">Click to add photos or drag them in</div>
            <div className="mt-1 text-xs text-neutral-400">Supported: JPG, PNG, HEIC</div>
          </div>

          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {previews.map((src, i) => (
                <div key={src} className="relative rounded-lg overflow-hidden bg-neutral-800">
                  <img src={src} alt={`preview-${i}`} className="w-full h-20 object-cover" />
                  <button type="button" onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-white/10 hover:bg-white/20 text-white rounded-full p-1">✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-md font-semibold shadow-md hover:scale-[1.01] transform transition">{loading?"Submitting...":"Submit Report"}</button>
        {message && <div className="mt-3 text-sm">{message}</div>}
      </div>
    </form>
  );

  if (embedded) {
    return (
      <div className="p-4">
        {formNode}
      </div>
    );
  }

  return (
    <div className="bg-black text-white pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="w-full max-w-3xl mx-auto bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/5">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-extrabold">Submit a Request / Report</h2>
            <p className="text-sm text-neutral-400 mt-1">Share photos and details — we'll handle it.</p>
          </div>
          {formNode}
        </div>
      </div>
    </div>
  )
}
