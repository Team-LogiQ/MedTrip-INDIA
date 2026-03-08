import { useEffect, useState } from "react";
import { Lock, Shield, Mail, Phone, Activity, RefreshCw } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

interface Enquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string | null;
  treatmentId: string | null;
  preferredHospital: string | null;
  customCondition: string | null;
  message: string | null;
  source: string | null;
}

export function AdminEnquiries() {
  const [token, setToken] = useState("");
  const [storedTokenChecked, setStoredTokenChecked] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("medtrip-admin-token");
    if (saved) {
      setToken(saved);
    }
    setStoredTokenChecked(true);
  }, []);

  async function loadEnquiries(currentToken: string) {
    if (!currentToken) {
      setError("Admin token is required.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiries`, {
        headers: {
          "x-admin-token": currentToken,
        },
      });

      if (!res.ok) {
        let message = "Failed to load enquiries.";
        try {
          const data = await res.json();
          if (data?.error && typeof data.error === "string") {
            message = data.error;
          }
        } catch {
          // ignore parse error
        }
        throw new Error(message);
      }

      const data = await res.json();
      const list = Array.isArray(data.enquiries) ? data.enquiries : [];
      list.sort((a: Enquiry, b: Enquiry) => (b.createdAt || "").localeCompare(a.createdAt || ""));
      setEnquiries(list);
      window.localStorage.setItem("medtrip-admin-token", currentToken);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void loadEnquiries(token.trim());
  }

  const hasToken = Boolean(token.trim());

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
            <Shield className="w-7 h-7 text-teal-300" />
          </div>
          <div>
            <h1
              className="text-white mb-1"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 800 }}
            >
              Admin · Patient Enquiries
            </h1>
            <p className="text-blue-100 text-sm">
              Secure dashboard to review enquiries submitted via MedTrip India.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Token form */}
        <section className="mb-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row gap-4 items-stretch sm:items-end"
          >
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-1 text-sm font-semibold">
                <Lock className="w-4 h-4 text-gray-500" />
                Admin Token
              </label>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter ADMIN_TOKEN configured on server"
              />
              <p className="text-gray-400 text-xs mt-1">
                Token is stored locally in this browser only.
              </p>
            </div>
            <button
              type="submit"
              disabled={!hasToken || loading}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Loading…
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4 mr-2" />
                  Load Enquiries
                </>
              )}
            </button>
          </form>
          {storedTokenChecked && hasToken && !loading && enquiries.length === 0 && !error && (
            <div className="mt-3 text-xs text-gray-500">
              Tip: click &ldquo;Load Enquiries&rdquo; to fetch the latest list.
            </div>
          )}
        </section>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Enquiries table */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
              Recent Enquiries
            </h2>
            <span className="text-xs text-gray-500">
              {enquiries.length} record{enquiries.length !== 1 ? "s" : ""}
            </span>
          </div>
          {enquiries.length === 0 ? (
            <div className="py-10 text-center text-gray-500 text-sm">
              No enquiries loaded yet. Submit the admin token above and click &ldquo;Load
              Enquiries&rdquo;.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Created</th>
                    <th className="px-3 py-2 text-left font-semibold">Patient</th>
                    <th className="px-3 py-2 text-left font-semibold">Contact</th>
                    <th className="px-3 py-2 text-left font-semibold">Treatment / Hospital</th>
                    <th className="px-3 py-2 text-left font-semibold">Message</th>
                    <th className="px-3 py-2 text-left font-semibold">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2 align-top whitespace-nowrap text-gray-500">
                        {enq.createdAt
                          ? new Date(enq.createdAt).toLocaleString()
                          : "Unknown"}
                      </td>
                      <td className="px-3 py-2 align-top">
                        <div className="font-semibold text-gray-900">{enq.name}</div>
                      </td>
                      <td className="px-3 py-2 align-top">
                        <div className="flex flex-col gap-1">
                          {enq.email && (
                            <a
                              href={`mailto:${enq.email}`}
                              className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                            >
                              <Mail className="w-3 h-3" />
                              <span>{enq.email}</span>
                            </a>
                          )}
                          {enq.phone && (
                            <a
                              href={`tel:${enq.phone}`}
                              className="inline-flex items-center gap-1 text-gray-700 hover:underline"
                            >
                              <Phone className="w-3 h-3" />
                              <span>{enq.phone}</span>
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2 align-top text-gray-700">
                        <div className="mb-1">
                          <span className="font-semibold">Treatment: </span>
                          <span>{enq.treatmentId || "N/A"}</span>
                        </div>
                        {enq.preferredHospital && (
                          <div>
                            <span className="font-semibold">Hospital: </span>
                            <span>{enq.preferredHospital}</span>
                          </div>
                        )}
                        {enq.customCondition && (
                          <div className="text-gray-500 mt-0.5">
                            <span className="font-semibold">Custom: </span>
                            <span>{enq.customCondition}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 align-top text-gray-700 max-w-xs">
                        <div className="line-clamp-3">
                          {enq.message || <span className="text-gray-400">No message</span>}
                        </div>
                      </td>
                      <td className="px-3 py-2 align-top text-gray-500">
                        {enq.source || "unknown"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

