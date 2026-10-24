
# Matriz de trazabilidad — Grupo 2

**Responsable:** Cesar
**Aplicacion:** LambdaTest E-commerce Playground
**Fecha:** 23/10/2026

## 1. Pruebas automatizadas

| ID | Funcionalidad | Tipo | Estado |
|---|---|---|---|
| TC-SM04 | Buscador disponible | Smoke | No validado |
| TC-SM05 | Catalogo disponible | Smoke | No validado |
| TC-REV01 | Busqueda de producto | Regresion | No validado |
| TC-REV02 | Detalle de producto | Regresion | No validado |
| TC-REV03 | Formulario de resenas | Regresion | No validado |
| TC-REV04 | Acceso a cuenta | Regresion | No validado |
| TC-REV05 | Resena con campos vacios | Regresion | No validado |
| TC-REV06 | Acceso a edicion de perfil | Regresion | No validado |
| TC-REV07 | Acceso a cambio de contrasena | Regresion | No validado |

## 2. Pruebas manuales

| ID | Funcionalidad | Estado |
|---|---|---|
| CM-C01 | Buscar producto existente | No ejecutado |
| CM-C02 | Buscar producto inexistente | No ejecutado |
| CM-C03 | Visualizar detalle de producto | No ejecutado |
| CM-C04 | Visualizar calificaciones | No ejecutado |
| CM-C05 | Resena sin nombre | No ejecutado |
| CM-C06 | Resena sin comentario | No ejecutado |
| CM-C07 | Resena sin calificacion | No ejecutado |
| CM-C08 | Editar perfil | No ejecutado |
| CM-C09 | Contrasenas diferentes | No ejecutado |
| CM-C10 | Cambiar contrasena | No ejecutado |

## 3. Pruebas locales de apoyo

| Archivo | Casos | Resultado |
|---|---|---|
| product-validation.spec.ts | 5 | Aprobados |
| review-validator.spec.ts | 4 | Aprobados |

Estas pruebas verifican validadores y metodos
locales del proyecto, no la aplicacion LambdaTest.

## 4. Limitaciones

El entorno LambdaTest no fue accesible desde
la red del responsable.

Las pruebas funcionales permanecen pendientes
de ejecucion y verificacion.

## 5. Evidencias

- docs/incidente-conectividad-cesar.md
- Reportes HTML generados por Playwright
- Capturas y trazas de fallos por conectividad
- Historial de commits en la rama Cesar

## 6. Actividades pendientes

- Recuperar acceso a LambdaTest.
- Validar rutas y selectores.
- Ejecutar pruebas en Chromium y Firefox.
- Ejecutar los diez casos manuales.
- Documentar resultados reales.
- Integrar los cambios a main.
