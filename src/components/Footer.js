import Link from 'next/link';
import { site } from '@/config/site';

const productLinks = [
  { href: '/#top', label: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©' },
  { href: '/features#chat-features', label: 'Ù…Ø²Ø§ÙŠØ§ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚' },
  { href: '/download', label: 'ØªÙ†Ø²ÙŠÙ„ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨' },
  { href: '/about#about-overview', label: 'Ø¹Ù† Ø§Ù„Ù…Ù†ØµØ©' },
];

const communityLinks = [
  { href: '/features#activity-features', label: 'Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ø§Ù„Ø¹Ø§Ù…Ø©' },
  { href: '/features#group-features', label: 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª' },
  { href: '/help-center#daily-tasks', label: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø´Ø±ÙÙŠÙ†' },
  { href: '/features#activity-features', label: 'Ø§Ù„Ù‚ØµØµ ÙˆØ§Ù„Ù…Ù†Ø´ÙˆØ±Ø§Øª' },
];

const trustLinks = [
  { href: '/privacy#privacy-controls', label: 'Ø§Ù„Ø®ØµÙˆØµÙŠØ©' },
  { href: '/security#account-security', label: 'Ø£Ù…Ø§Ù† Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª' },
  { href: '/terms#accepted-use', label: 'Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù…' },
  { href: '/agreements#policy-summary', label: 'Ø§Ù„Ø§ØªÙØ§Ù‚ÙŠØ§Øª ÙˆØ§Ù„Ø³ÙŠØ§Ø³Ø§Øª' },
];

const supportLinks = [
  { href: '/help-center#start-here', label: 'Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©' },
  { href: '/contact#contact-usage', label: 'ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„ÙØ±ÙŠÙ‚' },
  { href: '/report-issue', label: 'Ø§Ù„Ø¥Ø¨Ù„Ø§Øº Ø¹Ù† Ù…Ø´ÙƒÙ„Ø©' },
  { href: '/faq#faq-1', label: 'Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©' },
];

function SocialIcon({ name }) {
  const shared = {
    viewBox: '0 0 24 24',
    className: 'h-5 w-5',
    fill: 'currentColor',
  };

  switch (name) {
    case 'x':
      return (
        <svg {...shared}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.2L6.5 22H2l7.4-8.6L1 2h6.3l4.4 5.6L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...shared}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 12 16a4.5 4.5 0 0 1 0-9zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...shared}>
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterColumn({ title, caption, links }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 text-right shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-amber-800">{caption}</p>
      <h4 className="mt-3 text-xl font-black text-slate-950">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              prefetch={false}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialEntries = [
    { name: 'x', href: site.socials.x },
    { name: 'instagram', href: site.socials.instagram },
    { name: 'youtube', href: site.socials.youtube },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#f7f9fc_0%,#eef4fb_100%)] py-14 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white/70 p-8 shadow-[0_22px_70px_rgba(15,23,42,0.07)] backdrop-blur sm:p-10">
          <div className="grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-right">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#9b6e0f,#7a560b)] text-xl font-black text-white shadow-lg shadow-cyan-500/20">
                  C
                </span>
                <div>
                  <h3 className="text-3xl font-black text-slate-950">ÙƒØ±Ø§ÙƒØ³Ø§Ø¨</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">Craxad</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ Ù…Ù†ØµØ© Ù…Ø±Ø§Ø³Ù„Ø© Ø­Ø¯ÙŠØ«Ø© ØªØ±ÙƒÙ‘Ø² Ø¹Ù„Ù‰ Ø§Ù„Ø¯Ø±Ø¯Ø´Ø§Øª Ø§Ù„Ø®Ø§ØµØ©ØŒ Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ø§Ù„Ø¹Ø§Ù…Ø©ØŒ ÙˆØ§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ø§Ù„Ù…Ù†Ø¸Ù…Ø©. Ø§Ù„ØªØ°ÙŠÙŠÙ„ Ù‡Ù†Ø§
                ÙŠØ¹Ø±Ø¶ ÙÙ‚Ø· Ø§Ù„Ù…Ø³Ø§Ø±Ø§Øª Ø§Ù„ØªÙŠ ØªÙ‡Ù… Ù…Ø³ØªØ®Ø¯Ù… ØªØ·Ø¨ÙŠÙ‚ Ø¯Ø±Ø¯Ø´Ø© ÙØ¹Ù„ÙŠ: Ø§Ù„Ø¨Ø¯Ø¡ØŒ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§ØªØŒ Ø§Ù„Ø£Ù…Ø§Ù†ØŒ ÙˆØ§Ù„Ø¯Ø¹Ù….
              </p>

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">
                  Ø¯Ø±Ø¯Ø´Ø§Øª Ø®Ø§ØµØ©
                </span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">
                  Ù‚Ù†ÙˆØ§Øª Ø¹Ø§Ù…Ø©
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  Ù…Ø¬Ù…ÙˆØ¹Ø§Øª ÙˆÙ…Ø¬ØªÙ…Ø¹Ø§Øª
                </span>
              </div>
            </div>

            <div className="rounded-[28px] bg-[linear-gradient(145deg,#5c4108,#9b6e0f)] p-6 text-right text-white shadow-[0_18px_50px_rgba(2,132,199,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">Support</p>
              <h4 className="mt-3 text-2xl font-black">Ø§Ø¨Ø¯Ø£ Ù…Ø¹ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ Ù…Ù† Ø§Ù„Ù…ÙƒØ§Ù† Ø§Ù„ØµØ­ÙŠØ­</h4>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Ø¥Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ ØªÙ†Ø²ÙŠÙ„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ØŒ ÙÙ‡Ù… Ø§Ù„Ù‚Ù†ÙˆØ§Øª ÙˆØ§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§ØªØŒ Ø£Ùˆ Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„ÙØ±ÙŠÙ‚ØŒ ÙÙ‡Ø°Ù‡ Ø§Ù„Ø±ÙˆØ§Ø¨Ø· Ø§Ù„Ù…Ø®ØªØµØ±Ø© Ù‡ÙŠ Ø§Ù„Ø£Ù‡Ù….
              </p>
              <a
                className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                href={`mailto:${site.supportEmail}`}
              >
                {site.supportEmail}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FooterColumn title="Ø§Ù„Ù…Ù†ØªØ¬" caption="Product" links={productLinks} />
            <FooterColumn title="Ø§Ù„Ù‚Ù†ÙˆØ§Øª ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª" caption="Channels" links={communityLinks} />
            <FooterColumn title="Ø§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„Ø®ØµÙˆØµÙŠØ©" caption="Trust" links={trustLinks} />
            <FooterColumn title="Ø§Ù„Ø¯Ø¹Ù… ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©" caption="Support" links={supportLinks} />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">&copy; {currentYear} ÙƒØ±Ø§ÙƒØ³Ø§Ø¨. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.</p>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <span className="text-sm text-slate-500">ØªØ¬Ø±Ø¨Ø© Ù…Ø±Ø§Ø³Ù„Ø© ÙˆÙ‚Ù†ÙˆØ§Øª ÙˆÙ…Ø¬Ù…ÙˆØ¹Ø§Øª Ø¨Ù‡ÙˆÙŠØ© Ø¹Ø±Ø¨ÙŠØ© Ø­Ø¯ÙŠØ«Ø©</span>
              {socialEntries.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-amber-300 hover:text-amber-900"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

