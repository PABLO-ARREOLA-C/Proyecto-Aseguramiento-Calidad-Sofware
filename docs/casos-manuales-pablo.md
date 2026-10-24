# Casos de prueba manuales — Pablo

**Proyecto:** Aseguramiento de la Calidad del Software  
**Grupo:** 2  
**Aplicación:** LambdaTest E-commerce Playground  
**Responsable:** Pablo  
**Fecha:** 24/10/2026  
**Estado general:** Diseñados, pendientes de ejecución

---

## CM-P01 — Abrir página principal

**Objetivo:** Verificar que la tienda cargue correctamente.

**Precondición:** Aplicación accesible.

**Pasos:**
1. Abrir el navegador.
2. Ingresar a la página principal de LambdaTest E-commerce Playground.
3. Esperar la carga del sitio.
4. Revisar que se muestre el contenido principal.

**Resultado esperado:** La página principal carga y muestra elementos de navegación.

**Resultado obtenido:** Pendiente de ejecución manual.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P02 — Abrir formulario de inicio de sesión

**Objetivo:** Verificar el acceso al formulario de autenticación.

**Pasos:**
1. Abrir la tienda.
2. Acceder al menú de cuenta.
3. Seleccionar Login.
4. Revisar los campos disponibles.

**Resultado esperado:** Se muestra el formulario de inicio de sesión con campos de correo electrónico y contraseña.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P03 — Iniciar sesión con campos vacíos

**Objetivo:** Comprobar la validación de credenciales obligatorias.

**Pasos:**
1. Abrir el formulario Login.
2. Dejar vacíos los campos.
3. Presionar Login.
4. Observar la respuesta.

**Resultado esperado:** El sistema no inicia sesión y muestra una advertencia o validación correspondiente.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P04 — Iniciar sesión con correo no registrado

**Objetivo:** Verificar el rechazo de credenciales inexistentes.

**Datos:** Correo ficticio no registrado y contraseña de prueba.

**Pasos:**
1. Abrir Login.
2. Introducir el correo ficticio.
3. Introducir la contraseña de prueba.
4. Presionar Login.

**Resultado esperado:** Se rechaza el acceso y aparece una advertencia.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P05 — Iniciar sesión con contraseña incorrecta

**Objetivo:** Verificar la respuesta ante una contraseña inválida.

**Precondición:** Disponer de una cuenta de prueba autorizada.

**Pasos:**
1. Abrir Login.
2. Introducir el correo de la cuenta de prueba.
3. Escribir una contraseña incorrecta.
4. Intentar iniciar sesión.

**Resultado esperado:** Se rechaza el acceso.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P06 — Abrir formulario de registro

**Objetivo:** Comprobar que el formulario de registro sea accesible.

**Pasos:**
1. Abrir la página principal.
2. Acceder a la sección de cuenta.
3. Seleccionar Register.
4. Revisar los campos del formulario.

**Resultado esperado:** Se muestra el formulario para crear una cuenta.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P07 — Enviar registro con campos vacíos

**Objetivo:** Verificar las validaciones de los campos obligatorios.

**Pasos:**
1. Abrir Register.
2. Dejar vacíos los campos obligatorios.
3. Intentar continuar.
4. Revisar los mensajes de validación.

**Resultado esperado:** El registro se rechaza y se muestran las validaciones correspondientes.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P08 — Registro con confirmación de contraseña diferente

**Objetivo:** Verificar la validación de contraseñas coincidentes.

**Datos:** Datos ficticios válidos y contraseñas diferentes.

**Pasos:**
1. Abrir Register.
2. Completar los campos obligatorios con datos de prueba.
3. Escribir una contraseña.
4. Escribir una confirmación diferente.
5. Intentar registrar la cuenta.

**Resultado esperado:** El sistema rechaza el registro e informa que las contraseñas no coinciden.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P09 — Registro con correo electrónico inválido

**Objetivo:** Verificar la validación del formato de correo.

**Datos:** Correo de prueba con formato inválido.

**Pasos:**
1. Abrir Register.
2. Completar los campos obligatorios.
3. Introducir un correo electrónico inválido.
4. Intentar continuar.
5. Revisar la validación.

**Resultado esperado:** El sistema impide el registro o informa que el correo no tiene un formato válido.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-P10 — Navegar desde Login hacia Register

**Objetivo:** Verificar la navegación entre autenticación y registro.

**Pasos:**
1. Abrir Login.
2. Localizar la opción para crear una cuenta.
3. Seleccionar Register.
4. Revisar la página de destino.

**Resultado esperado:** Se abre correctamente el formulario de registro.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## Observaciones generales

Los diez casos fueron diseñados para complementar los diez casos manuales de César.

No se registran resultados de ejecución manual debido a que todavía no se han ejecutado estos escenarios.

El incidente de conectividad INC-CONN-02 limita la posibilidad de realizar las pruebas contra LambdaTest E-commerce Playground.

Cuando se restablezca el acceso, se deberán registrar resultados reales y adjuntar las evidencias correspondientes.