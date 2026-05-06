export default function Page() {
  const faqs = [
    {
      q: 'What data sources do you use for salary benchmarks?',
      a: 'We aggregate data from major compensation surveys, government labor statistics, and real-time job market feeds to give you accurate, up-to-date ranges.'
    },
    {
      q: 'How does the job posting analysis work?',
      a: 'Paste or upload your job posting text. Our engine extracts role, location, and required skills, then compares the listed salary against market benchmarks instantly.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Recruiting Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Posting Salaries That Drive Talent Away
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job posting and instantly see if the salary is competitive. Get market-backed ranges by role, location, and skill set — before you publish.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Validating — $9/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: '1', title: 'Paste Your Posting', desc: 'Drop in your job description text or upload a file.' },
          { step: '2', title: 'Instant Analysis', desc: 'We extract role, skills, and location then benchmark against live market data.' },
          { step: '3', title: 'Get Suggestions', desc: 'Receive a competitive salary range with confidence scores and source citations.' }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited job posting scans',
              'Real-time market salary data',
              'Location & skill-based ranges',
              'Competitive score + citations',
              'CSV export of results',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} SalaryCheck. All rights reserved.
      </footer>
    </main>
  )
}
