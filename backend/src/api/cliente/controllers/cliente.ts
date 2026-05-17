/**
 * cliente controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::cliente.cliente', ({ strapi }) => ({
  async findByPhone(ctx) {
    console.log("teléfono a buscar:", ctx.params.id);

    const cliente = await strapi.db.query('api::cliente.cliente').findOne({
      where: {
        telefono: ctx.params.id
      },
      populate: {
        domicilios: true
      }
    });

    if (!cliente) {
      return ctx.notFound("Cliente no encontrado");
    }

    console.log("cliente encontrado:", cliente);
    ctx.body = cliente;   // <- muy importante, para que la API devuelva la respuesta
  }
}));
