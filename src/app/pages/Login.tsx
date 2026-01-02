import React, { useState } from "react";
import { loginWithEmail } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      setMessage("Logged in successfully.");
    } catch (err: any) {
      setMessage(err?.message || "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-black text-white pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-neutral-300 bg-white/3 hover:bg-white/5 transition px-3 py-2 rounded-lg">
            ← Back
          </button>
          <Link to="/signup" className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg shadow">New user? Register</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/5">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold">Sign in</h2>
          <p className="text-sm text-neutral-400 mt-1">Access your account</p>
        </div>
        <label className="block mb-2 text-sm text-neutral-300">Email</label>
        <input required placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <label className="block mb-2 text-sm text-neutral-300">Password</label>
        <input required type="password" placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 mb-4 bg-white/5 text-white placeholder:text-neutral-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" />
        <div className="flex items-center gap-4 mt-4">
          <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-[1.01] transform transition">{loading?"Signing in...":"Sign in"}</button>
          <Link to="/signup" className="text-sm text-neutral-300 hover:text-white">Create an account</Link>
        </div>
        {message && <div className="mt-4 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  )
}
