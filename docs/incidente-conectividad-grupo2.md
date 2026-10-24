# INC-CONN-02 — Verificación de conectividad desde el segundo equipo

**Proyecto:** Aseguramiento de la Calidad del Software  
**Grupo:** 2  
**Fecha:** 24/10/2026  
**Estado:** Pendiente de resolución  
**Aplicación:** LambdaTest E-commerce Playground

## 1. Descripción

Durante la ejecución de las pruebas automatizadas con Playwright desde el segundo equipo del Grupo 2, se identificaron dificultades para establecer conexión con la aplicación LambdaTest E-commerce Playground.

## 2. Verificaciones realizadas

- Resolución DNS: el dominio resolvió a `44.206.201.40`.
- Conexión TCP al puerto 443 de LambdaTest: fallida.
- Conexión TCP al puerto 443 de GitHub: exitosa.
- Solicitud HTTPS mediante `curl`: tiempo de conexión agotado.
- Pruebas Smoke en Chromium: cinco ejecuciones fallidas.

## 3. Error confirmado

En la prueba TC-SM01 se registró el siguiente error:

`page.goto: net::ERR_CONNECTION_TIMED_OUT`

El error ocurrió al intentar acceder a la página principal mediante `page.goto('/')`.

Las otras cuatro pruebas Smoke también fallaron, pero sus mensajes de error individuales aún no han sido revisados.

## 4. Diagnóstico preliminar

Los resultados son compatibles con un problema de conectividad hacia LambdaTest.

No se dispone de evidencia suficiente para determinar si la causa es una restricción de red, un problema de enrutamiento o una indisponibilidad del servicio.

No se confirma ningún defecto funcional de la aplicación.

## 5. Pruebas locales

Se ejecutaron nueve validaciones locales en Chromium y nueve en Firefox, todas aprobadas.

Estas pruebas no requieren conexión con LambdaTest y no demuestran el funcionamiento del sitio web.

## 6. Acciones pendientes

- Verificar el acceso desde otra conexión autorizada.
- Revisar los errores individuales de las cuatro pruebas Smoke restantes.
- Repetir las pruebas funcionales cuando exista conectividad.
- Conservar los reportes y trazas correspondientes.

## 7. Clasificación

**Tipo:** Incidente del entorno de pruebas.  
**Impacto:** Impide completar la validación funcional contra la aplicación web.  
**Estado:** Abierto, pendiente de nueva verificación.