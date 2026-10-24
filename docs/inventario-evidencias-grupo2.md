# Inventario de evidencias — Grupo 2

**Proyecto:** Aseguramiento de la Calidad del Software  
**Fecha:** 24 de octubre de 2026  
**Herramienta de automatización:** Playwright con TypeScript

## 1. Objetivo

Registrar los archivos de evidencia disponibles para respaldar las actividades de pruebas y documentación del Grupo 2.

## 2. Evidencias disponibles

| ID | Archivo | Tamaño | Descripción |
|---|---|---:|---|
| EV-01 | `evidencias/evidencias 2.png` | 216860 bytes | Captura almacenada; contenido pendiente de revisión |
| EV-02 | `evidencias/evidencias de pruebas ejecutadas 1.png` | 153420 bytes | Captura almacenada; contenido pendiente de revisión |
| EV-03 | `evidencias/evidencias locales 3 .png` | 185634 bytes | Captura almacenada; contenido pendiente de revisión |
| EV-04 | `evidencias/ejecuciones-locales/chromium-html/index.html` | 521092 bytes | Reporte HTML de validaciones locales en Chromium |
| EV-05 | `evidencias/ejecuciones-locales/firefox-html/index.html` | 521144 bytes | Reporte HTML de validaciones locales en Firefox |

## 3. Resultados verificados

En ejecuciones anteriores se comprobaron los siguientes resultados:

- Chromium: 9 pruebas locales aprobadas.
- Firefox: 9 pruebas locales aprobadas.
- Total: 18 ejecuciones locales aprobadas.
- Reportes HTML disponibles para ambos navegadores.

Estos resultados corresponden a validaciones locales y no demuestran que las pruebas funcionales sobre LambdaTest hayan aprobado.

## 4. Limitaciones de ejecución

Se identificaron problemas de conectividad con la aplicación LambdaTest E-commerce Playground.

Durante la ejecución Smoke en Chromium se registraron cinco pruebas fallidas. Para TC-SM01 se confirmó un error de conexión `net::ERR_CONNECTION_TIMED_OUT`.

Las demás fallas requieren revisión individual. No se consideran defectos funcionales confirmados.

Los 20 casos manuales fueron diseñados, pero no se cuenta con evidencia de su ejecución completa.

## 5. Estado de las evidencias

Los cinco archivos se encuentran en el directorio `evidencias`.

Las tres capturas PNG deben revisarse visualmente para documentar con precisión qué ejecución o actividad representan.

Los reportes HTML de Chromium y Firefox ya fueron verificados previamente.

## 6. Conclusión

El proyecto cuenta con evidencias de validaciones locales aprobadas y documentación de las limitaciones encontradas.

El inventario facilita la consulta de los archivos y permite distinguir entre resultados comprobados, evidencias pendientes de revisión y pruebas funcionales no completadas.