
/**
 * Proyecto Final QA - Grupo 2
 * Datos ficticios para pruebas automatizadas.
 */

export const usuarioRegistro = {
  firstName: 'Grupo',
  lastName: 'DosQA',
  email: process.env.QA_REGISTER_EMAIL ?? '',
  telephone: '+50255550101',
  password: process.env.QA_REGISTER_PASSWORD ?? '',
  confirmPassword: process.env.QA_REGISTER_PASSWORD ?? '',
  newsletter: false,
  acceptPrivacyPolicy: true,
};

export const usuarioLogin = {
  email: process.env.QA_USER_EMAIL ?? '',
  password: process.env.QA_USER_PASSWORD ?? '',
};
