import React, { useState } from "react";
import { signupWithEmail, saveUserDetails } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signupWithEmail(email, password, { displayName: name });
      await saveUserDetails(user.uid, { name, phone, email, area: `${area} ${street}`.trim(), street, landmark });
      setMessage("Account created successfully.");
    } catch (err: any) {
      setMessage(err?.message || "Error creating account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-neutral-900 p-6 rounded-md shadow">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={() => navigate(-1)} className="text-sm text-neutral-400 hover:text-white">← Back</button>
          <h2 className="text-2xl font-bold">Create your account</h2>
          <div />
        </div>
        <label className="block mb-2 text-sm text-neutral-300">Name*</label>
        <input required placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Phone*</label>
        <input required placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Email (optional)</label>
        <input placeholder="Email address (optional)" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Area / Street*</label>
        <input required placeholder="Area (example: Anna Nagar)" value={area} onChange={(e)=>setArea(e.target.value)} className="w-full p-3 mb-2 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <input placeholder="Street / locality" value={street} onChange={(e)=>setStreet(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Landmark (optional)</label>
        <input placeholder="Nearby landmark (optional)" value={landmark} onChange={(e)=>setLandmark(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Password*</label>
        <input required type="password" placeholder="Choose a secure password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 mb-4 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">{loading?"Creating...":"Create Account"}</button>
        {message && <div className="mt-4 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  )
}
