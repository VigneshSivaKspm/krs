import React, { useState } from "react";
import { signupWithEmail, saveUserDetails } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="bg-black text-white pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-neutral-300 bg-white/3 hover:bg-white/5 transition px-3 py-2 rounded-lg">
            ← Back
          </button>
          <Link to="/login" className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg shadow">Have an account? Sign in</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/5">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold">Create your account</h2>
          <p className="text-sm text-neutral-400 mt-1">Join us — registering is quick and easy</p>
        </div>
        <label className="block mb-2 text-sm text-neutral-300">Name*</label>
        <input required placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Phone*</label>
        <input required placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Email (optional)</label>
        <input placeholder="Email address (optional)" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Area / Street*</label>
        <input required placeholder="Area (example: Anna Nagar)" value={area} onChange={(e)=>setArea(e.target.value)} className="w-full p-3 mb-2 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <input placeholder="Street / locality" value={street} onChange={(e)=>setStreet(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Landmark (optional)</label>
        <input placeholder="Nearby landmark (optional)" value={landmark} onChange={(e)=>setLandmark(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Password*</label>
        <input required type="password" placeholder="Choose a secure password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 mb-4 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-[1.01] transform transition">{loading?"Creating...":"Create Account"}</button>
        {message && <div className="mt-4 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  )
}
