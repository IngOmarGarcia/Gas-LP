/**
 * cliente router
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::cliente.cliente');

export default{
    routes:[
        {
            method: 'GET',
            path: '/clientes',
            handler: 'cliente.find'
        },
        {
            method: 'GET',
            path: '/clientes/:id',
            handler: 'cliente.findOne'   // 👈 este debe ser cliente.findOne
        },
        {
            method: 'POST',
            path: '/clientes',
            handler: 'cliente.create'
        },
        {
            method: 'DELETE',
            path: '/cliente/:id',
            handler: 'cliente.delete'
        },
        {
            method: 'PUT',
            path: '/clientes/:id',
            handler: 'cliente.update'
        },
        {
            method: 'GET',
            path: '/clientes/telefono/:id',
            handler: 'cliente.findByPhone'
        }
    ]
}
