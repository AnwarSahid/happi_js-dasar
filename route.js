const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method: 'GET',
        path: '/user/{user?}',
        handler: (request, h) => {
            const { user = 'anwar' } = request.params;
            return `halo ${user}`;
        }
    },
    {
        method: 'GET',
        path: '/admin',
        handler: (request, h) => {
            const { name, nip } = request.query;
            return `hay, ${name} , nip ${nip}`;
        }
    }


];

module.exports = routes;