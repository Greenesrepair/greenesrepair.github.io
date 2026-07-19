"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteContent } from "./site-content";

export function QuoteBuilder() {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [copied, setCopied] = useState(false);
  const message = useMemo(() => `Hi Alex! I found Greens Repair online. I need help with my ${device.trim() || "phone"}. ${issue.trim() || "Here is what is going on: "}`.trim(), [device, issue]);

  async function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      window.prompt("Copy this message, then send it to Alex:", message);
    }
  }

  return (
    <form className="quote-form" onSubmit={prepareMessage}>
      <label><span>Phone or device</span><input value={device} onChange={(e) => setDevice(e.target.value)} placeholder="e.g. iPhone 13" /></label>
      <label><span>What is going on?</span><input value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="e.g. screen is cracked" /></label>
      <div className="quote-actions"><button className="button button-dark" type="submit">{copied ? "Message copied!" : "Prepare my message"}</button><p>Copy it, then open Alex&apos;s Facebook profile to send it in Messenger.</p></div>
      {copied && <div className="copied-panel" role="status"><p>Ready to send:</p><strong>{message}</strong><a href={siteContent.facebookUrl} target="_blank" rel="noreferrer">Open Alex&apos;s Facebook &rarr;</a></div>}
    </form>
  );
}
