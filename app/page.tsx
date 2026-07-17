import { QuoteBuilder } from "./QuoteBuilder";
import { siteContent } from "./site-content";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Greens Repair home"><span className="brand-mark">G</span><span><strong>{siteContent.businessName}</strong><small>by {siteContent.ownerName}</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About</a><a className="nav-cta" href="#quote">Get a quote</a></nav>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{siteContent.eyebrow}</p><h1>A better day for your <em>broken phone.</em></h1><p className="hero-intro">{siteContent.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#quote">Text for a quote <span>&rarr;</span></a><a className="text-link" href="#services">See what Alex can help with</a></div>
          <div className="trust-row"><div><strong>Since {siteContent.experienceSince}</strong><span>Repairing phones</span></div><div><strong>Owner-operated</strong><span>Talk directly with Alex</span></div><div><strong>Clear next steps</strong><span>Start with a quick message</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Phone repair illustration"><div className="sun-shape" /><div className="workbench" /><span className="tool tool-one" /><span className="tool tool-two" /><div className="phone"><div className="phone-speaker" /><div className="phone-screen"><span className="screen-leaf">G</span><small>Greens Repair</small></div></div><div className="status-card"><span>OK</span><div><strong>Personal service</strong><small>From first message to pickup</small></div></div><p className="visual-note">PHONE REPAIR / LOCAL CARE</p></div>
      </section>
      <section className="services section" id="services">
        <div className="section-heading"><p className="eyebrow"><span />What Alex does</p><h2>Repair help without the runaround.</h2><p>Start with the device and the problem. Alex will help you understand what comes next.</p></div>
        <div className="service-grid">{siteContent.services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span>{service.comingSoon && <small>Coming soon</small>}</div><h3>{service.title}</h3><p>{service.description}</p><a href="#quote">Ask Alex <span>&rarr;</span></a></article>)}</div>
      </section>
      <section className="about section" id="about"><div><p className="eyebrow light"><span />Meet your repair guy</p><blockquote>Good repair starts with listening to what your device is doing.</blockquote></div><div className="about-copy"><p className="about-lead">Alex Greene has been fixing phones since 2018.</p><p>Greens Repair is built around a simple idea: make it easy to explain the problem, get a clear response, and know your next step.</p><div className="signature">Alex <span>Greene</span></div></div></section>
      <section className="process section"><div className="section-heading compact"><p className="eyebrow"><span />How to get started</p><h2>Three easy steps.</h2></div><ol className="steps"><li><span>1</span><div><h3>Describe the device</h3><p>Share the make and model if you know it.</p></div></li><li><span>2</span><div><h3>Explain the problem</h3><p>Tell Alex what happened and what you are seeing.</p></div></li><li><span>3</span><div><h3>Get your next step</h3><p>Alex will reply with questions or repair guidance.</p></div></li></ol></section>
      <section className="quote section" id="quote"><div className="quote-heading"><p className="eyebrow light"><span />Start here</p><h2>Tell Alex what needs fixing.</h2><p>Build a quick message in a few seconds. No account and no complicated form.</p></div><QuoteBuilder /></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">G</span><span><strong>{siteContent.businessName}</strong><small>by {siteContent.ownerName}</small></span></a><p>Phone repair since {siteContent.experienceSince}. PC repair coming soon.</p><div><a href="#services">Services</a><a href="#about">About</a><a href="#quote">Get a quote</a></div></footer>
    </main>
  );
}
