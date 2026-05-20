import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-white overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
              GF
            </div>

            <div>
              <h1 className="font-bold text-lg">
                GigFlow 
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#features" className="hover:text-black dark:hover:text-white transition-all">
              Features
            </a>

            <a href="#dashboard" className="hover:text-black dark:hover:text-white transition-all">
              Dashboard
            </a>

            <a href="#stats" className="hover:text-black dark:hover:text-white transition-all">
              Analytics
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link  to="/login" className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all">
              Login
            </Link>

            <Link to="/register" className="px-5 py-2.5 rounded-xl bg-black dark:bg-white dark:text-black text-white font-medium hover:opacity-90 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/60 dark:from-zinc-900 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Modern CRM Dashboard
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Manage Leads
              <span className="block text-gray-400 dark:text-zinc-500">
                Smarter & Faster
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Smart Leads helps teams organize customers, track lead progress,
              manage sales pipelines, and analyze business growth with a modern
              dashboard experience.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="px-7 py-4 rounded-2xl bg-black dark:bg-white dark:text-black text-white font-semibold hover:scale-[1.02] transition-all shadow-lg">
                Start Managing Leads
              </button>

              <button className="px-7 py-4 rounded-2xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all">
                View Dashboard
              </button>
            </div>

            <div className="mt-12 flex items-center gap-10">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-sm text-gray-500 mt-1">Leads Managed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-sm text-gray-500 mt-1">Team Efficiency</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-sm text-gray-500 mt-1">Analytics Access</p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div id="dashboard" className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 dark:from-zinc-800 to-transparent blur-3xl opacity-50 rounded-full" />

            <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[32px] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">
                    Dashboard Overview
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Monitor your lead performance
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-sm">
                  This Month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-gray-100 dark:bg-zinc-800">
                  <p className="text-sm text-gray-500">
                    Total Leads
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    1,284
                  </h3>
                </div>

                <div className="p-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black">
                  <p className="text-sm opacity-80">
                    Qualified
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    342
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-zinc-800"
                  >
                    <div>
                      <h4 className="font-semibold">
                        Rahul Sharma
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        rahul@gmail.com
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400">
                      Qualified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-t border-gray-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              Everything Your Sales Team Needs
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Built with modern technologies and designed for scalability,
              performance, and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Lead Management",
                desc: "Create, update, and manage leads with an intuitive dashboard.",
              },
              {
                title: "Advanced Filters",
                desc: "Search, filter, sort, and organize leads instantly.",
              },
              {
                title: "Analytics",
                desc: "Track lead sources and performance using charts and stats.",
              },
              {
                title: "Role-Based Access",
                desc: "Secure admin and sales user permissions system.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:-translate-y-1 transition-all shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl mb-6">
                  ✦
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gray-100 dark:bg-zinc-900/40 border-y border-gray-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-black">
              500+
            </h3>

            <p className="mt-3 text-gray-500">
              Businesses Trust Smart Leads
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black">
              1M+
            </h3>

            <p className="mt-3 text-gray-500">
              Leads Processed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black">
              99.9%
            </h3>

            <p className="mt-3 text-gray-500">
              Dashboard Uptime
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="rounded-[40px] bg-black dark:bg-white text-white dark:text-black px-8 py-20 shadow-2xl">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              Start Growing Your
              <span className="block">
                Sales Pipeline Today
              </span>
            </h2>

            <p className="mt-6 text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Organize leads, improve team productivity, and build a scalable CRM
              workflow with Smart Leads.
            </p>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-white dark:bg-black dark:text-white text-black font-semibold hover:scale-[1.02] transition-all">
              Launch Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Smart Leads. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black dark:hover:text-white transition-all">
              Privacy
            </a>

            <a href="#" className="hover:text-black dark:hover:text-white transition-all">
              Terms
            </a>

            <a href="#" className="hover:text-black dark:hover:text-white transition-all">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
