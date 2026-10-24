const isDev = process.env.NODE_ENV === 'development';

// Next.js needs inline scripts/styles for hydration, so 'unsafe-inline' stays until nonces are set up.
const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://js.hcaptcha.com https://*.hcaptcha.com`,
    "style-src 'self' 'unsafe-inline' https://*.hcaptcha.com",
    "img-src 'self' data: blob: https://www.datocms-assets.com",
    "font-src 'self'",
    "connect-src 'self' https://api.web3forms.com https://*.hcaptcha.com",
    "frame-src https://*.hcaptcha.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.web3forms.com",
    "frame-ancestors 'none'",
].join('; ');

const securityHeaders = [
    { key: 'Content-Security-Policy', value: csp },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'www.datocms-assets.com' },
        ],
    },
    async headers() {
        return [{ source: '/:path*', headers: securityHeaders }];
    },
};

module.exports = nextConfig
