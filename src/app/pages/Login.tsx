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
    <div className="bg-black text-white pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-neutral-900 p-6 rounded-md shadow">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={() => navigate(-1)} className="text-sm text-neutral-400 hover:text-white">← Back</button>
          <h2 className="text-2xl font-bold">Sign in</h2>
          <div />
        </div>
        <label className="block mb-2 text-sm text-neutral-300">Email</label>
        <input required placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <label className="block mb-2 text-sm text-neutral-300">Password</label>
        <input required type="password" placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 mb-4 bg-white text-black placeholder:text-neutral-500 rounded border border-neutral-300" />
        <div className="flex items-center gap-4 mt-4">
          <button disabled={loading} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">{loading?"Signing in...":"Sign in"}</button>
          <Link to="/signup" className="text-sm text-neutral-300 hover:text-white">New user? Register now →</Link>
        </div>
        {message && <div className="mt-4 text-sm">{message}</div>}
        </form>
      </div>
    </div>
  )
}
