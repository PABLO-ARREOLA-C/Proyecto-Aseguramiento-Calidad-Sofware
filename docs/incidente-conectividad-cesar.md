
# INC-CONN-01 - Problema de conectividad con LambdaTest

**Proyecto:** Aseguramiento de la Calidad del Software  
**Grupo:** 2  
**Responsable:** Cesar  
**Fecha:** 23/10/2026  
**Estado:** Pendiente de resolución  

## Descripción

Al ejecutar las pruebas automatizadas desde el equipo
de Cesar, Chromium y Firefox no lograron conectarse
a LambdaTest E-commerce Playground.

## Resultados observados

- TypeScript: compilación sin errores.
- DNS: el dominio resolvió a 44.206.201.40.
- Puerto HTTPS 443 de LambdaTest: conexión fallida.
- Puerto HTTPS 443 de GitHub: conexión exitosa.
- curl: error 28, tiempo de conexión agotado.
- Smoke tests: 6 ejecuciones fallidas por timeout.

## Diagnóstico preliminar

Posible restricción de red, problema de conectividad
o indisponibilidad del servidor.

No se ha confirmado un defecto de la aplicación.

## Acciones pendientes

- Probar el acceso desde otra conexión autorizada.
- Verificar nuevamente la disponibilidad.
- Ejecutar las pruebas automatizadas cuando exista acceso.
- Guardar los reportes HTML y evidencias correspondientes.

## Clasificación

Incidente del entorno de pruebas.
No contabilizar como defecto funcional confirmado.
