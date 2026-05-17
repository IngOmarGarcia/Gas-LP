/**
 * servicio router
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::servicio.servicio');
export default{
    routes:[
        {
            method: 'GET',
            path: '/servicio',
            handler: 'servicio.find'
        },
        {
            method: 'POST',
            path: '/servicio',
            handler: 'servicio.create'
        },
        {
            method: 'PUT',
            path: '/servicio/:id',
            handler: 'servicio.update'
        },
        {
            method: 'DELETE',
            path: '/servicio/:id',
            handler: 'servicio.delete'
        },
        {
            method: 'GET',
            path: '/ServiciosByRuta/:id',
            handler: 'servicio.getServiciosByRuta'
        }
    ]
}