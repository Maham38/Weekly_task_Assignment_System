const API_BASE = "http://localhost:8000";

export async function submitWork({ intern_name, task_id, work_link, notes }) {
  const res = await fetch(`${API_BASE}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ intern_name, task_id, work_link, notes }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Submission failed");
  }
  return res.json();
}

export async function getStatusForIntern(intern_name) {
  const res = await fetch(`${API_BASE}/submissions/status/${encodeURIComponent(intern_name)}`);
  if (!res.ok) throw new Error("Could not fetch status");
  return res.json();
}