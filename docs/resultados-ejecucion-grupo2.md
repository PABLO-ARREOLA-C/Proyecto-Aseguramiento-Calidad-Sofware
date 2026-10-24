# Informe de ejecución de pruebas — Grupo 2

**Proyecto:** Aseguramiento de la Calidad del Software  
**Fecha:** 24 de octubre de 2026  
**Herramientas:** Playwright, TypeScript, Chromium y Firefox  
**Aplicación bajo prueba:** LambdaTest E-commerce Playground

## 1. Objetivo

Consolidar los resultados verificables de las pruebas automatizadas y documentar las limitaciones encontradas durante su ejecución.

## 2. Resultados de validaciones locales

| Archivo | Chromium | Firefox | Total aprobado |
|---|---|---|---|
| product-validation.spec.ts | 5 | 5 | 10 |
| review-validator.spec.ts | 4 | 4 | 8 |
| **Total** | **9** | **9** | **18** |

Las 18 ejecuciones finalizaron correctamente, sin fallos ni reintentos.

### Chromium

- Fecha: 24/10/2026.
- Pruebas aprobadas: 9.
- Pruebas fallidas: 0.
- Duración del reporte: 1.1 segundos.
- Evidencia: `evidencias/ejecuciones-locales/chromium-html/index.html`.

### Firefox

- Fecha: 24/10/2026.
- Pruebas aprobadas: 9.
- Pruebas fallidas: 0.
- Duración del reporte: 3.6 segundos.
- Evidencia: `evidencias/ejecuciones-locales/firefox-html/index.html`.

Estas pruebas validan componentes y funciones locales del proyecto. No comprueban la disponibilidad ni el funcionamiento de LambdaTest.

## 3. Resultados de pruebas Smoke

Se ejecutaron cinco pruebas Smoke en Chromium, todas registradas como fallidas:

| ID | Escenario | Resultado |
|---|---|---|
| TC-SM01 | Carga de página principal | Fallida |
| TC-SM02 | Acceso al formulario Login | Fallida |
| TC-SM03 | Acceso al formulario Register | Fallida |
| TC-SM04 | Búsqueda de productos | Fallida |
| TC-SM05 | Visualización del catálogo | Fallida |

En TC-SM01 se confirmó el error `net::ERR_CONNECTION_TIMED_OUT` durante la navegación.

Los mensajes individuales de los otros cuatro casos están pendientes de revisión.

## 4. Pruebas de regresión

Las pruebas de regresión de autenticación y reseñas están implementadas en el proyecto.

Se dispone de resultados parciales anteriores para autenticación, pero todavía no se ha consolidado una ejecución completa y verificable de ambas suites.

Por ello, no se declara una aprobación general de las pruebas de regresión.

## 5. Incidentes

**INC-CONN-01:** Incidente de conectividad documentado desde el equipo de César.

**INC-CONN-02:** Incidente de conectividad documentado desde el segundo equipo.

Los resultados disponibles son compatibles con dificultades de conexión hacia LambdaTest. No se ha confirmado un defecto funcional de la aplicación.

## 6. Evidencias

- Reporte HTML de Chromium.
- Reporte HTML de Firefox.
- Registro del error de TC-SM01.
- Documentos de incidentes de conectividad.
- Historial de commits del repositorio.

## 7. Limitaciones

- No se completó una validación funcional integral de LambdaTest.
- Los casos manuales están diseñados, pero pendientes de ejecución.
- No se dispone de evidencia suficiente para confirmar defectos funcionales.
- Los resultados de regresión requieren consolidación.

## 8. Conclusión

El Grupo 2 verificó satisfactoriamente 18 ejecuciones de validaciones locales en Chromium y Firefox.

La ejecución de pruebas funcionales contra LambdaTest permanece limitada por problemas de conectividad.

El informe distingue los resultados aprobados, los fallos observados y las actividades pendientes para mantener la trazabilidad y evitar conclusiones no sustentadas.