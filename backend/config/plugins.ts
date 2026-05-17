module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //👈 importante para 465
        auth: {
          user: '482200080@alumnos.utzac.edu.mx',
          pass: 'ykau mfmm halq ooaj', // 👈 ojo: debe ser "contraseña de aplicación" de Gmail
        },
        tls: {
          rejectUnauthorized: false, // 👈 evita el error del certificado
        },
      },
      settings: {
        defaultFrom: '482200080@alumnos.utzac.edu.mx',
        defaultReplyTo: '482200080@alumnos.utzac.edu.mx',
      },
    },
  },
});