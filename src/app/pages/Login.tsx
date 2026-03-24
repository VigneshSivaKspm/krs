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
      navigate('/');
    } catch (err: any) {
      setMessage(err?.message || "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-amber-50 text-gray-900 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-gray-700 bg-amber-100 hover:bg-amber-200 transition px-3 py-2 rounded-lg font-medium">
            ← Back
          </button>
          <Link to="/signup" className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-black px-4 py-2 rounded-lg shadow font-medium hover:from-amber-500 hover:to-amber-600 transition">New user? Register</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-white border border-amber-300 p-8 rounded-2xl shadow-xl">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign in</h2>
          <p className="text-sm text-gray-500 mt-1">Access your account</p>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input required placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 mb-3 bg-amber-50 text-gray-900 placeholder:text-gray-400 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input required type="password" placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 mb-4 bg-amber-50 text-gray-900 placeholder:text-gray-400 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
        <div className="flex items-center gap-4 mt-4">
          <button disabled={loading} className="bg-gradient-to-r from-[#991B1B] to-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-red-800 hover:to-red-900 hover:scale-[1.01] transform transition">{loading?"Signing in...":"Sign in"}</button>
          <Link to="/signup" className="text-sm text-red-800 hover:text-red-900 font-medium">Create an account</Link>
        </div>
        {message && <div className="mt-4 text-sm text-gray-700 bg-amber-100 border border-amber-300 rounded-lg px-4 py-2">{message}</div>}
        </form>
      </div>
    </div>
  )
}
