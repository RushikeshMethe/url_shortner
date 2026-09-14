import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setCopied(false);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      /*
       * Connect this to your Spring Boot API:
       *
       * const response = await fetch(
       *   "http://localhost:8080/api/v1/urls",
       *   {
       *     method: "POST",
       *     headers: {
       *       "Content-Type": "application/json",
       *     },
       *     body: JSON.stringify({ url }),
       *   }
       * );
       *
       * const data = await response.json();
       * setShortUrl(data.shortUrl);
       */

      // Temporary value until backend is connected
      await new Promise((resolve) => setTimeout(resolve, 500));

      setShortUrl("http://localhost:8080/aB3xY7");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo">
            Shortly
          </a>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button className="login-button">
              Sign in
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">

            <div className="badge">
              Simple link sharing
            </div>

            <h1>
              Short links.
              <br />
              <span>Simple sharing.</span>
            </h1>

            <p className="hero-description">
              Turn long URLs into short, easy-to-share links
              in seconds.
            </p>

            {/* URL Form */}
            <form
              className="shortener-form"
              onSubmit={handleSubmit}
            >
              <div className="input-wrapper">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your long URL here..."
                  disabled={loading}
                />

                {error && (
                  <p className="error">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="shorten-button"
                disabled={loading}
              >
                {loading ? "Shortening..." : "Shorten URL"}
              </button>
            </form>

            <div className="trust-points">
              <span>✓ Fast</span>
              <span>✓ Easy to share</span>
              <span>✓ Free to start</span>
            </div>

          </div>
        </section>

        {/* Result */}
        {shortUrl && (
          <section className="result-section">
            <div className="result-card">

              <div className="result-header">
                <div>
                  <p className="result-label">
                    Your shortened URL
                  </p>

                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="short-url"
                  >
                    {shortUrl}
                  </a>
                </div>

                <button
                  className="copy-button"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

            </div>
          </section>
        )}

        {/* Features */}
        <section
          className="features"
          id="features"
        >
          <div className="section-heading">
            <p className="eyebrow">
              WHY SHORTLY
            </p>

            <h2>
              Everything you need to share links.
            </h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">
                ↗
              </div>

              <h3>
                Short & shareable
              </h3>

              <p>
                Create clean, compact links that are
                easier to share anywhere.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ⚡
              </div>

              <h3>
                Fast redirects
              </h3>

              <p>
                Quickly redirect visitors to the
                original destination.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                ◷
              </div>

              <h3>
                Built to grow
              </h3>

              <p>
                Analytics, custom links and more can
                be added as Shortly evolves.
              </p>
            </div>

          </div>
        </section>

        {/* Simple CTA */}
        <section
          className="bottom-cta"
          id="about"
        >
          <h2>
            Make your links easier to share.
          </h2>

          <p>
            Paste a URL above and create your first
            short link.
          </p>

          <a href="#" className="cta-link">
            Shorten a URL →
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 Shortly</span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;