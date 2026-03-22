import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setIsError(false);

        try {
            const { data } = await axios.post("http://localhost:3002/signup", form, {
                withCredentials: true,
            });

            if (data?.success) {
                setMessage("Signup successful. Redirecting to login...");
                setTimeout(() => navigate("/login"), 900);
                return;
            }

            setIsError(true);
            setMessage(data?.message || "Signup failed");
        } catch (error) {
            setIsError(true);
            setMessage(error?.response?.data?.message || "Unable to signup right now");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: "480px", marginTop: "50px", marginBottom: "50px" }}>
            <h2 className="mb-4 text-center">Create your account</h2>
            <form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {message && (
                    <p className={isError ? "text-danger" : "text-success"} style={{ marginBottom: "10px" }}>
                        {message}
                    </p>
                )}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? "Creating account..." : "Signup"}
                </button>

                <p className="text-center mt-3 mb-0">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;