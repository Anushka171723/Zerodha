import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has valid token by calling /verify endpoint
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3002/verify", {
          withCredentials: true,
        });

        if (response.data?.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page on port 3001
    window.location.href = "http://localhost:3001/login";
    return null;
  }

  // User is authenticated, render the protected component
  return children;
}
