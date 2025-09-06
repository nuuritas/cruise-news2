// Cloudflare Pages middleware for Node.js compatibility
export function onRequest(context) {
  // Add Node.js compatibility headers
  const response = context.next();
  
  // Ensure proper content type for static files
  if (context.request.url.includes('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  return response;
}
