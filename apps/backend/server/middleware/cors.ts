export default defineEventHandler((event) => {
    const origin = event.req.headers.origin;
    if (origin) {
        event.res.setHeader('Access-Control-Allow-Origin', origin);
        event.res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        event.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        event.res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    if (event.req.method === 'OPTIONS') {
        event.res.statusCode = 204;
        event.res.end();
        return;
    }
});
