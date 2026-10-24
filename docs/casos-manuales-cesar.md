
# Casos de prueba manuales — Grupo 2

**Responsable:** Cesar  
**Aplicacion:** LambdaTest E-commerce Playground  
**Fecha de preparacion:** 23/10/2026  
**Estado general:** Pendiente de ejecucion

---

## CM-C01 — Buscar producto existente

**Objetivo:** Comprobar que la busqueda encuentre productos existentes.

**Precondicion:** Tienda accesible.

**Datos:** iPhone.

**Pasos:**
1. Abrir la pagina principal.
2. Localizar el buscador.
3. Escribir "iPhone".
4. Presionar Enter.
5. Revisar los resultados.

**Resultado esperado:** Se muestran productos relacionados con el termino buscado.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C02 — Buscar producto inexistente

**Objetivo:** Verificar la respuesta ante una busqueda sin resultados.

**Precondicion:** Tienda accesible.

**Datos:** PRODUCTO_INEXISTENTE_QA_98765.

**Pasos:**
1. Abrir la tienda.
2. Escribir el dato en el buscador.
3. Ejecutar la busqueda.
4. Observar los resultados.

**Resultado esperado:** Se informa que no hay productos coincidentes.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C03 — Visualizar detalle de producto

**Objetivo:** Comprobar que la ficha de producto muestre informacion.

**Precondicion:** Existe un producto disponible.

**Datos:** Producto del catalogo.

**Pasos:**
1. Abrir la tienda.
2. Buscar un producto.
3. Seleccionar un resultado.
4. Revisar nombre, precio y descripcion.

**Resultado esperado:** Se muestra una pagina con informacion del producto seleccionado.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C04 — Visualizar opciones de calificacion

**Objetivo:** Identificar las opciones de calificacion disponibles.

**Precondicion:** Pagina de producto accesible.

**Pasos:**
1. Abrir un producto.
2. Localizar la seccion de resenas.
3. Identificar las opciones de calificacion.
4. Comprobar que pueden seleccionarse.

**Resultado esperado:** El formulario permite seleccionar una calificacion valida.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C05 — Enviar resena sin nombre

**Objetivo:** Verificar la validacion del nombre obligatorio.

**Precondicion:** Formulario de resenas disponible.

**Datos:** Comentario de prueba valido.

**Pasos:**
1. Abrir un producto.
2. Acceder a resenas.
3. Dejar vacio el campo nombre.
4. Escribir un comentario valido.
5. Seleccionar una calificacion.
6. Enviar la resena.

**Resultado esperado:** El sistema rechaza el envio e informa que el nombre es obligatorio.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C06 — Enviar resena sin comentario

**Objetivo:** Verificar la validacion del comentario obligatorio.

**Precondicion:** Formulario disponible.

**Datos:** Nombre "Usuario QA".

**Pasos:**
1. Abrir el formulario de resenas.
2. Escribir el nombre.
3. Dejar vacio el comentario.
4. Seleccionar una calificacion.
5. Enviar el formulario.

**Resultado esperado:** El sistema rechaza la resena e informa que falta el comentario.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C07 — Enviar resena sin calificacion

**Objetivo:** Comprobar la obligatoriedad de la calificacion.

**Precondicion:** Formulario disponible.

**Pasos:**
1. Abrir un producto.
2. Acceder a resenas.
3. Completar nombre y comentario.
4. No seleccionar ninguna calificacion.
5. Enviar el formulario.

**Resultado esperado:** El sistema solicita seleccionar una calificacion.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C08 — Editar datos del perfil

**Objetivo:** Verificar que el usuario pueda actualizar informacion personal.

**Precondicion:** Cuenta de prueba registrada e inicio de sesion exitoso.

**Pasos:**
1. Iniciar sesion con la cuenta de prueba.
2. Abrir la seccion de cuenta.
3. Seleccionar editar informacion.
4. Modificar un dato permitido.
5. Guardar los cambios.
6. Volver a consultar el perfil.

**Resultado esperado:** Los datos actualizados permanecen guardados.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C09 — Cambiar contrasena con confirmacion diferente

**Objetivo:** Validar que dos contrasenas diferentes sean rechazadas.

**Precondicion:** Sesion iniciada con cuenta de prueba.

**Pasos:**
1. Abrir la configuracion de cuenta.
2. Seleccionar cambiar contrasena.
3. Escribir una contrasena nueva.
4. Escribir una confirmacion diferente.
5. Presionar Continue.
6. Revisar el resultado.

**Resultado esperado:** La aplicacion rechaza el cambio e informa la discrepancia.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## CM-C10 — Cambiar contrasena correctamente

**Objetivo:** Comprobar que el cambio de contrasena funcione.

**Precondicion:** Cuenta ficticia controlada y sesion iniciada.

**Pasos:**
1. Iniciar sesion.
2. Abrir cambiar contrasena.
3. Escribir la nueva contrasena.
4. Repetir la misma contrasena.
5. Guardar.
6. Cerrar sesion.
7. Intentar iniciar sesion con la nueva contrasena.

**Resultado esperado:** La nueva contrasena permite acceder a la cuenta.

**Resultado obtenido:** Pendiente.

**Estado:** No ejecutado.

**Evidencia:** Pendiente.

---

## Observaciones generales

Los casos se encuentran diseñados, pero no ejecutados.

El entorno LambdaTest presento problemas de conectividad
desde el equipo del responsable.

Los resultados deberan registrarse cuando se restablezca
el acceso a la aplicacion.
