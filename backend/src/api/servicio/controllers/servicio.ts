/**
 * servicio controller
 */

import { factories } from '@strapi/strapi'
import domicilio from '../../domicilio/controllers/domicilio';
import servicio from '../routes/servicio';

export default factories.createCoreController('api::servicio.servicio', {
    async getServiciosByRuta(ctx) {

    },
    async find(ctx) {
        console.log("Datos del Usuario", ctx.state.user);
        const user = ctx.state.user;
        if (user.role.type === 'operador') {
            // modificar el ctx query para agregar el filtro por usuario
            ctx.query = {
                ...ctx.query, // mantener los filtros originales
                populate: {
                    domicilio: true,
                    // ruta:{
                    //     populate:{
                    //         personal:{
                    //             populate:{
                    //                 users_permissions_user:true,
                    //             }
                    //         }
                    //     }
                    // }
                },
                filters: {
                    ruta: {
                        personal: {
                            users_permissions_user: {
                                id: {
                                    $eq: user.id
                                }
                            }
                        }
                    }
                }
            }
        } else {
            ctx.query = {
                populate: {
                    domicilio: true,
                    cliente: true,
                    ruta: true
                }
            }
        }
        const result = await super.find(ctx);//obtener los datos originales
        return result; //retornar los datos
    },

    async update(ctx) {
        const user = ctx.state.user;
        const documentId = ctx.params.id;
        if (user.role.type == 'operador') {
            //Trae el servicio que esta guardado en la base de datos
             const servicio = await strapi.documents('api::servicio.servicio').findOne({
                 documentId: documentId,
                  filters: {
                    ruta: {
                        personal: {
                          users_permissions_users: {
                                id: {
                                    $eq: user.id
                                }
                            }
                        }
                    }
                }
             })
            console.log("Servicio a modificar", servicio)
            //Si el servicio no existe o no pertenece al usuario, retornar un error
            if (!servicio) {
                return ctx.unauthorized(`No tienes permiso para modificar este servicio`); 
            }
            ctx.request.body.data = {
                "estado_servicio": ctx.request.body.data.estado_servicio
            };
        }
        const result = await super.update(ctx);
        return result;

    }
});
