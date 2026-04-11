import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ - Ù…Ù†ØµØ© Ø¯Ø±Ø¯Ø´Ø© ÙˆÙ‚Ù†ÙˆØ§Øª Ø¹ØµØ±ÙŠØ©',
  description: 'ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ ØªØ·Ø¨ÙŠÙ‚ Ø¹Ø±Ø¨ÙŠ Ø­Ø¯ÙŠØ« Ù„Ù„Ø¯Ø±Ø¯Ø´Ø© ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ ÙŠØ¬Ù…Ø¹ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø§Ù„Ø®Ø§ØµØ©ØŒ Ø§Ù„Ù‚Ù†ÙˆØ§ØªØŒ ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª Ø¯Ø§Ø®Ù„ ÙˆØ§Ø¬Ù‡Ø© Ø³Ø±ÙŠØ¹Ø© ÙˆÙˆØ§Ø¶Ø­Ø©.',
  alternates: { canonical: '/' },
};

const highlights = [
  {
    title: 'Ø¯Ø±Ø¯Ø´Ø© Ø£Ø³Ø±Ø¹',
    text: 'Ù…Ø­Ø§Ø¯Ø«Ø§Øª ÙØ±Ø¯ÙŠØ© ÙˆØ¬Ù…Ø§Ø¹ÙŠØ© Ø¨ÙˆØ§Ø¬Ù‡Ø© Ù†Ø¸ÙŠÙØ© ØªØ³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ Ø§Ù„ØªØ±ÙƒÙŠØ² Ø¹Ù„Ù‰ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø¨Ø¯Ù„ Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ù…Ø¹Ù‚Ø¯ Ø¨ÙŠÙ† Ø§Ù„ØµÙØ­Ø§Øª.',
  },
  {
    title: 'Ù‚Ù†ÙˆØ§Øª Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù†Ø´Ø±',
    text: 'Ø£Ù†Ø´Ø¦ Ù‚Ù†Ø§Ø© Ù„Ø¹Ù„Ø§Ù…ØªÙƒ Ø£Ùˆ Ù…Ø¬ØªÙ…Ø¹ÙƒØŒ Ø§Ù†Ø´Ø± Ø§Ù„ØªØ­Ø¯ÙŠØ«Ø§ØªØŒ ÙˆØ§Ø³Ù…Ø­ Ù„Ù„Ù…ØªØ§Ø¨Ø¹ÙŠÙ† Ø¨Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ø£Ø®Ø¨Ø§Ø± ÙˆØ§Ù„Ù…Ø­ØªÙˆÙ‰ Ù…Ù† Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯.',
  },
  {
    title: 'Ø¥Ø¯Ø§Ø±Ø© Ø°ÙƒÙŠØ© Ù„Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª',
    text: 'Ø±ØªÙ‘Ø¨ Ø§Ù„Ù…Ø´Ø±ÙÙŠÙ†ØŒ Ø«Ø¨Ù‘Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ù‡Ù…Ø©ØŒ ÙˆÙ‚Ø¯Ù‘Ù… ØªØ¬Ø±Ø¨Ø© Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ù‹Ø§ Ù„Ø£Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ù†Ø° Ø£ÙˆÙ„ Ø¯Ø®ÙˆÙ„.',
  },
];

const featureGrid = [
  {
    eyebrow: 'Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„ÙŠÙˆÙ…ÙŠ',
    title: 'Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø®Ø§ØµØ© ÙˆÙ…Ø¬Ù…ÙˆØ¹Ø§Øª Ù…Ø±Ù†Ø©',
    text: 'ÙƒÙ„ Ø´ÙŠØ¡ Ù…ØµÙ…Ù… Ù„ÙŠØ¬Ø¹Ù„ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ØŒ Ø§Ù„Ù…Ù„ÙØ§ØªØŒ ÙˆØ§Ù„ÙˆØ³Ø§Ø¦Ø· Ø£Ø³Ø±Ø¹ ÙˆØ£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ù‹Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø§ØªÙ ÙˆØ§Ù„ÙˆÙŠØ¨.',
  },
  {
    eyebrow: 'Ø§Ù„Ù‚Ù†ÙˆØ§Øª',
    title: 'Ø¨Ø« Ø§Ù„Ø£Ø®Ø¨Ø§Ø± ÙˆØ§Ù„Ù…Ø­ØªÙˆÙ‰ Ù…Ù† Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯',
    text: 'Ø§Ù„Ù‚Ù†ÙˆØ§Øª ÙÙŠ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ ØªØ³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ Ù†Ø´Ø± Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§ØªØŒ Ø§Ù„ØªØ­Ø¯ÙŠØ«Ø§ØªØŒ ÙˆØ§Ù„Ø¯Ø±ÙˆØ³ Ø£Ùˆ Ø§Ù„Ø£Ø®Ø¨Ø§Ø± Ø¨Ø¯ÙˆÙ† ØªØ´ÙˆÙŠØ´ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø§Ù„Ø®Ø§ØµØ©.',
  },
  {
    eyebrow: 'Ø§Ù„Ø®ØµÙˆØµÙŠØ©',
    title: 'ØªØ­ÙƒÙ… ÙˆØ§Ø¶Ø­ ÙÙŠ Ù…Ù† ÙŠØµÙ„ Ø¥Ù„ÙŠÙƒ',
    text: 'Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø³Ù‡Ù„Ø© Ù„Ù„ÙÙ„Ø§ØªØ±ØŒ Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§ØªØŒ ÙˆØ¸Ù‡ÙˆØ± Ø§Ù„Ø­Ø³Ø§Ø¨ Ø­ØªÙ‰ ØªÙƒÙˆÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„ØªÙˆØ§ØµÙ„ Ø£ÙƒØ«Ø± Ø±Ø§Ø­Ø© ÙˆØ£Ù‚Ù„ ÙÙˆØ¶Ù‰.',
  },
  {
    eyebrow: 'Ø§Ù„ØªØ¬Ø±Ø¨Ø©',
    title: 'ÙˆØ§Ø¬Ù‡Ø© Ø­Ø¯ÙŠØ«Ø© Ù…Ù‡ÙŠØ£Ø© Ù„Ù„Ø¹Ø±Ø¨ÙŠØ©',
    text: 'ØªØµÙ…ÙŠÙ… Ø¨ØµØ±ÙŠ Ø¬Ø¯ÙŠØ¯ ÙŠØ±ÙƒÙ‘Ø² Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø±Ø¹Ø©ØŒ Ø§Ù„ÙˆØ¶ÙˆØ­ØŒ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡ Ø§Ù„Ø°ÙƒÙŠØ© Ù…Ø¹ Ù„Ù…Ø³Ø§Øª Ù„ÙˆÙ†ÙŠØ© ØªØ¹ÙƒØ³ Ù…Ù†ØªØ¬Ù‹Ø§ Ø¹ØµØ±ÙŠÙ‹Ø§.',
  },
];

const promoBanners = [
  {
    title: 'Ø£Ø·Ù„Ù‚ Ù‚Ù†Ø§Ø© Ø¹Ù„Ø§Ù…ØªÙƒ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©',
    text: 'Ø§Ø¬Ù…Ø¹ Ø§Ù„Ø£Ø®Ø¨Ø§Ø±ØŒ Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§ØªØŒ ÙˆØ§Ù„Ø±ÙˆØ§Ø¨Ø· Ø§Ù„Ù…Ù‡Ù…Ø© ÙÙŠ Ù‚Ù†Ø§Ø© ÙˆØ§Ø­Ø¯Ø© ÙŠØ³Ù‡Ù„ Ù…ØªØ§Ø¨Ø¹ØªÙ‡Ø§ ÙˆÙ…Ø´Ø§Ø±ÙƒØªÙ‡Ø§.',
    cta: 'Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†',
  },
  {
    title: 'Ø§Ù†Ù‚Ù„ Ù…Ø¬ØªÙ…Ø¹Ùƒ Ø¥Ù„Ù‰ Ù…Ø³Ø§Ø­Ø© Ø£ÙˆØ¶Ø­',
    text: 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª ÙˆØ§Ù„Ù‚Ù†ÙˆØ§Øª ÙÙŠ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ ØªÙ…Ù†Ø­Ùƒ ØªØ­ÙƒÙ…Ù‹Ø§ Ø£ÙØ¶Ù„ ÙÙŠ Ø§Ù„ØªÙ†Ø¸ÙŠÙ…ØŒ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø«Ø¨ØªØ©ØŒ ÙˆÙ…Ø³Ø§Ø± Ø§Ù„Ø£Ø¹Ø¶Ø§Ø¡.',
    cta: 'Ø´Ø§Ù‡Ø¯ ÙƒÙŠÙ ØªØ¹Ù…Ù„',
  },
  {
    title: 'Ø¬Ø±Ù‘Ø¨ ØªØ¬Ø±Ø¨Ø© Ø¯Ø±Ø¯Ø´Ø© Ø£Ø®Ù',
    text: 'Ù…Ù† Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ø­ØªÙ‰ Ø´Ø§Ø´Ø© Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø©ØŒ ÙƒÙ„ ØªÙØµÙŠÙ„ Ù…ØµÙ…Ù… Ù„ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„ØªØ´ØªÙŠØª ÙˆØªØ³Ø±ÙŠØ¹ Ø§Ù„ÙˆØµÙˆÙ„.',
    cta: 'ØªÙ†Ø²ÙŠÙ„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚',
  },
];

const timeline = [
  {
    step: '01',
    title: 'Ø§Ø¨Ø¯Ø£ Ø¨Ù…Ø­Ø§Ø¯Ø«Ø§ØªÙƒ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©',
    text: 'Ù†Ù‚Ù„ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„ÙŠÙˆÙ…ÙŠ Ø¥Ù„Ù‰ ØªØ¬Ø±Ø¨Ø© Ø£Ø¨Ø³Ø· Ø­ÙŠØ« ØªÙƒÙˆÙ† Ø§Ù„Ø¯Ø±Ø¯Ø´Ø§Øª Ø§Ù„Ù…Ù‡Ù…Ø©ØŒ Ø§Ù„Ù…Ù„ÙØ§ØªØŒ ÙˆØ§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ù…Ø±ØªØ¨Ø© Ø¨ÙˆØ¶ÙˆØ­.',
  },
  {
    step: '02',
    title: 'Ø§Ø¨Ù†Ù Ù‚Ù†Ø§ØªÙƒ Ø§Ù„Ø®Ø§ØµØ©',
    text: 'Ù„Ù„Ù†Ø´Ø±Ø§ØªØŒ ØªØ­Ø¯ÙŠØ«Ø§Øª Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ØŒ Ø£Ùˆ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¹Ø§Ù…ØŒ ÙŠÙ…ÙƒÙ†Ùƒ Ø¥Ù†Ø´Ø§Ø¡ Ù‚Ù†Ø§Ø© Ù„Ù‡Ø§ Ù‡ÙˆÙŠØ© ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…Ø³Ø§Ø­Ø© Ù…Ø®ØµØµØ© Ù„Ù„Ù†Ø´Ø±.',
  },
  {
    step: '03',
    title: 'ÙˆØ³Ù‘Ø¹ Ù…Ø¬ØªÙ…Ø¹Ùƒ',
    text: 'Ø­ÙˆÙ‘Ù„ Ø§Ù„Ù…ØªØ§Ø¨Ø¹ÙŠÙ† Ø¥Ù„Ù‰ Ù…Ø¬ØªÙ…Ø¹ ÙŠØªÙØ§Ø¹Ù„ Ø¯Ø§Ø®Ù„ Ù…Ø¬Ù…ÙˆØ¹Ø§Øª ÙˆÙ‚Ù†ÙˆØ§Øª Ù…Ù†Ø¸Ù…Ø© ØªØ¯Ø¹Ù… Ø§Ù„ØªÙˆØ³Ø¹ Ø¨Ø¯ÙˆÙ† ÙÙˆØ¶Ù‰.',
  },
];

const comparisonColumns = ['ÙƒØ±Ø§ÙƒØ³Ø§Ø¨', 'Telegram', 'WhatsApp'];

const comparisonRows = [
  {
    feature: 'ØªØ±ÙƒÙŠØ² Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ù†ÙˆØ§Øª ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª',
    values: ['Ù…ØµÙ…Ù… Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ù„Ø¥Ø¨Ø±Ø§Ø² Ø§Ù„Ù‚Ù†ÙˆØ§Øª ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª Ø¨ÙˆØ¶ÙˆØ­', 'Ù‚ÙˆÙŠ ÙÙŠ Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ù„ÙƒÙ† Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© ØªÙ…ÙŠÙ„ Ù„Ù„ÙƒØ«Ø§ÙØ©', 'Ø£Ø¨Ø³Ø· ÙÙŠ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ù„ÙƒÙ†Ù‡ Ø£Ù‚Ù„ Ù…Ø±ÙˆÙ†Ø© ÙÙŠ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª Ø§Ù„ÙˆØ§Ø³Ø¹Ø©'],
  },
  {
    feature: 'ÙˆØ¶ÙˆØ­ ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©',
    values: ['ÙˆØ§Ø¬Ù‡Ø© ØªØ³ÙˆÙŠÙ‚ÙŠØ© ÙˆØ¨ØµØ±ÙŠØ© Ù…ÙˆØ¬Ù‡Ø© Ù„Ù„Ø¹Ø±Ø¨ÙŠØ© Ø¨Ø´ÙƒÙ„ Ù…Ø¨Ø§Ø´Ø±', 'Ø¬ÙŠØ¯ Ø¬Ø¯Ù‹Ø§ Ù„ÙƒÙ† Ø£Ù‚Ù„ ØªØ®ØµÙŠØµÙ‹Ø§ Ù„Ù„Ù‡ÙˆÙŠØ§Øª Ø§Ù„Ù…Ø­Ù„ÙŠØ©', 'Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© Ù…Ø¹ Ù…Ø³Ø§Ø­Ø© Ø£Ù‚Ù„ Ù„Ù„ØªØ®ØµÙŠØµ'],
  },
  {
    feature: 'Ø§Ù„Ù„Ø§ÙØªØ§Øª ÙˆØ§Ù„ØªØ±ÙˆÙŠØ¬ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ù†ØªØ¬',
    values: ['Ø³Ù‡Ù„ Ø¯Ù…Ø¬ Ø­Ù…Ù„Ø§Øª ØªØ±ÙˆÙŠØ¬ÙŠØ© ÙˆØ±Ø³Ø§Ø¦Ù„ Ù…Ù…ÙŠØ²Ø© Ù„Ù„Ù‚Ù†ÙˆØ§Øª ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª', 'Ù…ØªØ§Ø­ Ø¹Ø¨Ø± Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ ÙˆØ§Ù„Ù‚Ù†ÙˆØ§Øª Ù„ÙƒÙ† Ø¨Ø·Ø§Ø¨Ø¹ ØªÙ‚Ù†ÙŠ Ø£ÙƒØ«Ø±', 'Ù…Ø­Ø¯ÙˆØ¯ Ù…Ù‚Ø§Ø±Ù†Ø© Ø¨Ø­Ø§Ù„Ø§Øª Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ³ÙˆÙŠÙ‚ÙŠØ©'],
  },
  {
    feature: 'Ù…Ø±ÙˆÙ†Ø© Ø§Ù„Ù‡ÙˆÙŠØ© Ù„Ù„Ø¹Ù„Ø§Ù…Ø§Øª ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹',
    values: ['Ù…Ù†Ø§Ø³Ø¨ Ù„Ø¥Ø¨Ø±Ø§Ø² Ø§Ù„Ø¹Ù„Ø§Ù…Ø©ØŒ Ø§Ù„Ù‚Ù†Ø§Ø©ØŒ ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹ Ø¯Ø§Ø®Ù„ ÙˆØ§Ø¬Ù‡Ø© ÙˆØ§Ø­Ø¯Ø©', 'Ù…Ù…ØªØ§Ø² Ù„Ù„Ù†Ø´Ø± Ø§Ù„ÙˆØ§Ø³Ø¹ Ù„ÙƒÙ† Ø£Ù‚Ù„ Ø¯ÙØ¦Ù‹Ø§ Ù…Ù† Ù†Ø§Ø­ÙŠØ© ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ù‡ÙˆÙŠØ©', 'Ø£Ù‚ÙˆÙ‰ ÙÙŠ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ù…Ø¨Ø§Ø´Ø± Ø£ÙƒØ«Ø± Ù…Ù† Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø¹Ø§Ù… Ù„Ù„Ø¹Ù„Ø§Ù…Ø©'],
  },
  {
    feature: 'ÙˆØ¶ÙˆØ­ Ø§Ù„Ù…Ù‚Ø§Ø±Ù†Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø§Ù„Ø¬Ø¯ÙŠØ¯',
    values: ['Ù‚ÙŠÙ…Ø© Ø§Ù„Ù…Ù†ØªØ¬ ØªØ¸Ù‡Ø± Ø¨Ø³Ø±Ø¹Ø© Ù…Ù† Ø£ÙˆÙ„ Ø´Ø§Ø´Ø©', 'ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆÙ‚ØªÙ‹Ø§ Ø£ÙƒØ¨Ø± Ù„ÙÙ‡Ù… Ø§Ù„Ø¹Ù…Ù‚ Ø§Ù„ÙƒØ§Ù…Ù„ Ù„Ù„Ù…ÙŠØ²Ø§Øª', 'ÙˆØ§Ø¶Ø­ ÙˆØ³Ù‡Ù„ Ù„ÙƒÙ†Ù‡ ÙŠØ±ÙƒÙ‘Ø² Ø¹Ù„Ù‰ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø£ÙƒØ«Ø± Ù…Ù† Ø§Ù„Ù‚Ù†ÙˆØ§Øª'],
  },
];

const faqCards = [
  {
    title: 'Ù„Ù…Ù† ØµÙÙ…Ù… ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ØŸ',
    text: 'Ù„Ù„Ø£ÙØ±Ø§Ø¯ØŒ Ø§Ù„ÙØ±Ù‚ØŒ Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©ØŒ ÙˆØµÙ†Ø§Ø¹ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø°ÙŠÙ† ÙŠØ±ÙŠØ¯ÙˆÙ† Ø¯Ø±Ø¯Ø´Ø© ÙŠÙˆÙ…ÙŠØ© ÙˆÙ‚Ù†ÙˆØ§Øª ÙˆÙ…Ø¬ØªÙ…Ø¹Ø§Øª ÙÙŠ ØªØ¬Ø±Ø¨Ø© Ù…ØªÙ…Ø§Ø³ÙƒØ©.',
  },
  {
    title: 'Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠÙ…ÙŠÙ‘Ø² Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©ØŸ',
    text: 'Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© ØªØ¹Ø±Ù‘Ù Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø³Ø±Ø¹Ø©ØŒ ØªØ±ÙˆÙ‘Ø¬ Ù„Ù…Ø²Ø§ÙŠØ§Ù‡ Ø¨ØµØ±ÙŠÙ‹Ø§ØŒ ÙˆØªÙ‚Ø¯Ù‘Ù… Ù…Ù‚Ø§Ø±Ù†Ø© Ù…Ø¨Ø§Ø´Ø±Ø© ØªØ³Ø§Ø¹Ø¯ Ø§Ù„Ø²Ø§Ø¦Ø± Ø¹Ù„Ù‰ Ø§ØªØ®Ø§Ø° Ù‚Ø±Ø§Ø± Ø³Ø±ÙŠØ¹.',
  },
  {
    title: 'Ù‡Ù„ Ø§Ù„ØªØµÙ…ÙŠÙ… Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„Ù…ÙˆØ¨Ø§ÙŠÙ„ØŸ',
    text: 'Ù†Ø¹Ù…ØŒ ÙƒÙ„ Ø§Ù„Ø£Ù‚Ø³Ø§Ù… Ù…Ø¨Ù†ÙŠØ© Ø¨Ø´Ø¨ÙƒØ§Øª Ù…Ø±Ù†Ø© ÙˆØ¨Ø·Ø§Ù‚Ø§Øª Ù…ØªØ¬Ø§ÙˆØ¨Ø© Ù„ØªØ¸Ù‡Ø± Ø¨ØµÙˆØ±Ø© Ù‚ÙˆÙŠØ© Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø© ÙˆØ§Ù„ØµØºÙŠØ±Ø©.',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section id="top" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-right">
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.15] text-slate-950 sm:text-6xl">
              Ù…Ù†ØµØ© Ø¯Ø±Ø¯Ø´Ø© ÙˆÙ‚Ù†ÙˆØ§Øª
              <span className="block bg-[linear-gradient(135deg,#9b6e0f,#7a560b)] bg-clip-text text-transparent">
                ØªØ¨Ø¯Ùˆ Ø­Ø¯ÙŠØ«Ø© Ù…Ù† Ø£ÙˆÙ„ Ù†Ø¸Ø±Ø©
              </span>
            </h1>

            <div className="mt-3 flex w-full justify-center lg:hidden">
              <Image
                src="/phone-hero-v2.png"
                alt="ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ù‡Ø§ØªÙ"
                width={694}
                height={1466}
                priority
                className="h-auto w-[94%] max-w-[420px] drop-shadow-[0_24px_40px_rgba(122,86,11,0.24)]"
              />
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ Ù…ØµÙ…Ù… Ù„ÙŠØ¬Ù…Ø¹ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø§Ù„Ø®Ø§ØµØ©ØŒ Ø§Ù„Ù‚Ù†ÙˆØ§Øª Ø§Ù„Ø¹Ø§Ù…Ø©ØŒ ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹Ø§Øª ÙÙŠ ÙˆØ§Ø¬Ù‡Ø© Ø¹Ø±Ø¨ÙŠØ© ÙˆØ§Ø¶Ø­Ø© ØªØ³Ø§Ø¹Ø¯ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¹Ù„Ù‰
              Ø§Ù„ØªÙˆØ§ØµÙ„ Ø¨Ø³Ø±Ø¹Ø©ØŒ ÙˆØªÙ…Ù†Ø­ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ÙˆØ§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ù…Ø³Ø§Ø­Ø© Ø£ÙØ¶Ù„ Ù„Ù„ØªØ±ÙˆÙŠØ¬ ÙˆØ¨Ù†Ø§Ø¡ Ø¬Ù…Ù‡ÙˆØ±Ù‡Ø§.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b6e0f,#7a560b)] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
              >
                ØªÙ†Ø²ÙŠÙ„ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:border-amber-300 hover:text-amber-900"
              >
                Ø§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ù…Ø²Ø§ÙŠØ§
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/70 bg-white/80 p-5 text-right shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur">
                  <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-6 top-8 h-36 w-36 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="absolute -left-4 bottom-6 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl" />

            <div className="relative mx-auto flex w-full max-w-[420px] items-end justify-center lg:max-w-[520px]">
              <div className="pointer-events-none absolute inset-x-10 bottom-2 h-20 rounded-full bg-amber-300/35 blur-2xl" />
              <Image
                src="/phone-hero-v2.png"
                alt="ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ù‡Ø§ØªÙ"
                width={694}
                height={1466}
                priority
                className="relative h-auto w-[92%] max-w-[430px] drop-shadow-[0_35px_60px_rgba(122,86,11,0.26)] sm:w-[90%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {promoBanners.map((banner, index) => (
            <article
              key={banner.title}
              className={`rounded-[32px] p-7 text-right shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
                index === 1
                  ? 'bg-[linear-gradient(140deg,#3f2c05,#7a560b)] text-white'
                  : 'border border-white/75 bg-white/85 text-slate-950'
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.4em] ${index === 1 ? 'text-white/55' : 'text-slate-400'}`}>
                Banner
              </p>
              <h2 className="mt-4 text-2xl font-black">{banner.title}</h2>
              <p className={`mt-4 text-base leading-8 ${index === 1 ? 'text-white/75' : 'text-slate-600'}`}>{banner.text}</p>
              <span
                className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                  index === 1 ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'
                }`}
              >
                {banner.cta}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Core Experience</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">ÙˆØ§Ø¬Ù‡Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø¬Ø¯ÙŠØ¯Ø© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ ØªØ´Ø±Ø­ Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø¯Ù„ Ø£Ù† ØªØ´ØªØªÙ‡</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            ØªÙ… Ø­Ø°Ù Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø© ÙˆØ§Ø³ØªØ¨Ø¯Ø§Ù„Ù‡Ø§ Ø¨ØªØ±ØªÙŠØ¨ ÙŠØ±ÙƒÙ‘Ø² Ø¹Ù„Ù‰ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©: Ø§Ù„Ø¯Ø±Ø¯Ø´Ø©ØŒ Ø§Ù„Ù‚Ù†ÙˆØ§ØªØŒ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ØŒ ÙˆØ¥Ø¨Ø±Ø§Ø²
            Ù…Ø§ ÙŠØ¬Ø¹Ù„ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ Ù…Ù†Ø§Ø³Ø¨Ù‹Ø§ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ÙˆØ§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureGrid.map((item) => (
            <article key={item.title} className="rounded-[30px] border border-white/80 bg-white/85 p-7 text-right shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-amber-800">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 text-right shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Journey</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">Ù…Ù† Ø£ÙˆÙ„ Ø±Ø³Ø§Ù„Ø© Ø¥Ù„Ù‰ Ù…Ø¬ØªÙ…Ø¹ ÙƒØ§Ù…Ù„</h2>
            <div className="mt-8 grid gap-4">
              {timeline.map((item) => (
                <article key={item.step} className="rounded-[24px] bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                    <span className="text-2xl font-black text-amber-800">{item.step}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[linear-gradient(145deg,#9b6e0f,#3f2c05)] p-8 text-right text-white shadow-[0_28px_70px_rgba(15,118,110,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/45">Why Craxad</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Ø§Ù„Ù…Ù†ØªØ¬ Ù„ÙŠØ³ Ù…Ø¬Ø±Ø¯ Ø¯Ø±Ø¯Ø´Ø©ØŒ Ø¨Ù„ Ù…Ø³Ø§Ø­Ø© ØªÙˆØ§ØµÙ„ Ø­Ø¯ÙŠØ«Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù†Ù…Ùˆ</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
              Ø³ÙˆØ§Ø¡ ÙƒÙ†Øª ØªØ·Ù„Ù‚ Ù‚Ù†Ø§Ø© Ø¥Ø®Ø¨Ø§Ø±ÙŠØ©ØŒ ØªØ¨Ù†ÙŠ Ù…Ø¬ØªÙ…Ø¹Ù‹Ø§ØŒ Ø£Ùˆ ØªØ­ØªØ§Ø¬ ØªØ·Ø¨ÙŠÙ‚Ù‹Ø§ ÙˆØ§Ø¶Ø­Ù‹Ø§ Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª ÙØ±ÙŠÙ‚ÙƒØŒ ÙØ§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¬Ø¯ÙŠØ¯ ÙŠÙ‚Ø¯Ù‘Ù…
              Ø§Ù„Ù‚ØµØ© Ø¨Ø³Ø±Ø¹Ø© ÙˆÙŠÙ…Ù†Ø­ Ø§Ù„Ù…Ù†ØªØ¬ Ø­Ø¶ÙˆØ±Ù‹Ø§ Ø£Ù‚ÙˆÙ‰ Ø£Ù…Ø§Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø§Ù„Ø¬Ø¯ÙŠØ¯.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatPill value="Ù‚Ù†ÙˆØ§Øª" label="Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù†Ø´Ø± ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ«" />
              <StatPill value="Ù…Ø¬ØªÙ…Ø¹Ø§Øª" label="Ù…Ø±ØªØ¨Ø© ÙˆØ³Ù‡Ù„Ø© Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©" />
              <StatPill value="Ø¯Ø±Ø¯Ø´Ø©" label="Ø£ÙˆØ¶Ø­ ÙÙŠ Ø§Ù„ØªØµÙØ­ ÙˆØ§Ù„Ù‚Ø±Ø§Ø¡Ø©" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-10">
          <div className="mb-8 text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Comparison Table</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">Ù…Ù‚Ø§Ø±Ù†Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ø¨ÙŠÙ† ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ ÙˆTelegram ÙˆWhatsApp</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Ù‡Ø°Ø§ Ø§Ù„Ø¬Ø¯ÙˆÙ„ ÙŠØ¹Ø·ÙŠ Ø§Ù„Ø²Ø§Ø¦Ø± ØµÙˆØ±Ø© Ø³Ø±ÙŠØ¹Ø© Ø¹Ù† ØªÙ…ÙˆØ¶Ø¹ ÙƒØ±Ø§ÙƒØ³Ø§Ø¨: ØªØ¬Ø±Ø¨Ø© Ø¯Ø±Ø¯Ø´Ø© Ø­Ø¯ÙŠØ«Ø©ØŒ Ù‚Ù†ÙˆØ§Øª Ø£ÙˆØ¶Ø­ØŒ ÙˆÙ‡ÙˆÙŠØ© Ø¹Ø±Ø¨ÙŠØ© ØªØ³ÙˆÙŠÙ‚ÙŠØ©
              Ø£Ù‚ÙˆÙ‰ Ù…Ù† Ø£ÙˆÙ„ Ø´Ø§Ø´Ø©.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200">
            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-950 text-white md:grid-cols-[1.1fr_repeat(3,1fr)]">
              <div className="p-5 text-right text-lg font-bold">Ø§Ù„Ø¹Ù†ØµØ±</div>
              {comparisonColumns.map((column) => (
                <div key={column} className="border-t border-white/10 p-5 text-right text-base font-bold md:border-r md:border-t-0 md:border-white/10">
                  {column}
                </div>
              ))}
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-[1.1fr_repeat(3,1fr)] ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}`}
              >
                <div className="border-b border-slate-200 p-5 text-right font-bold text-slate-950 md:border-l md:border-b-0">{row.feature}</div>
                {row.values.map((value, valueIndex) => (
                  <div
                    key={`${row.feature}-${valueIndex}`}
                    className={`border-b border-slate-200 p-5 text-right text-sm leading-7 text-slate-600 md:border-b-0 ${
                      valueIndex < row.values.length - 1 ? 'md:border-l' : ''
                    } ${valueIndex === 0 ? 'bg-amber-50/70 text-slate-800' : ''}`}
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 text-right shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">FAQ Highlights</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">Ø±Ø³Ø§Ø¦Ù„ Ø®ØªØ§Ù…ÙŠØ© ØªÙ‚Ù†Ø¹ Ø§Ù„Ø²Ø§Ø¦Ø± Ø¨Ø³Ø±Ø¹Ø©</h2>
            <div className="mt-8 grid gap-4">
              {faqCards.map((card) => (
                <article key={card.title} className="rounded-[24px] bg-slate-50 p-5">
                  <h3 className="text-lg font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[linear-gradient(145deg,#5c4108,#9b6e0f)] p-8 text-right text-white shadow-[0_28px_70px_rgba(2,132,199,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/50">Launch Craxad</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">ÙƒÙ„ Ø´ÙŠØ¡ Ø¬Ø§Ù‡Ø² Ø§Ù„Ø¢Ù† Ù„ØªÙ‚Ø¯ÙŠÙ… ÙƒØ±Ø§ÙƒØ³Ø§Ø¨ ÙƒÙ…Ù†ØªØ¬ Ø¯Ø±Ø¯Ø´Ø© ÙˆÙ‚Ù†ÙˆØ§Øª Ø­Ø¯ÙŠØ«</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ØµØ§Ø±Øª Ø£ÙƒØ«Ø± Ù…Ù‡Ù†ÙŠØ© ÙˆØ­Ø¯Ø§Ø«Ø©ØŒ ÙˆØªØ¹Ø±Ø¶ Ù‡ÙˆÙŠØ© Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ Ø¨ÙˆØ¶ÙˆØ­ Ù…Ø¹ Ø£Ù‚Ø³Ø§Ù… Ø¯Ø¹Ø§Ø¦ÙŠØ© ÙˆÙ…Ù‚Ø§Ø±Ù†Ø© ØªØ³Ø§Ø¹Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ù‚Ù†Ø§Ø¹
              ÙˆØ§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø±.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Ø§Ø¨Ø¯Ø£ Ø§Ù„ØªÙ†Ø²ÙŠÙ„
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„ÙØ±ÙŠÙ‚
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

