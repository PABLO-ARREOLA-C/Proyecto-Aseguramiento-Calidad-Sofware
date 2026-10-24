# Informe final — Aseguramiento de la Calidad del Software

**Grupo:** 2  
**Proyecto:** Automatización y documentación de pruebas de software  
**Aplicación bajo prueba:** LambdaTest E-commerce Playground  
**Herramientas:** Playwright, TypeScript, Node.js y Git  
**Fecha:** 24 de octubre de 2026

## 1. Introducción

El presente informe describe las actividades desarrolladas por el Grupo 2 para el aseguramiento de la calidad del software mediante el diseño de casos de prueba, automatización, validaciones locales, documentación de resultados y registro de incidencias.

La aplicación seleccionada para las pruebas funcionales fue LambdaTest E-commerce Playground.

Durante el desarrollo se presentaron problemas de conectividad que limitaron las ejecuciones contra el entorno remoto. Por esta razón, el informe distingue entre las validaciones completadas y las pruebas pendientes.

## 2. Objetivo general

Diseñar, implementar y documentar pruebas de software utilizando Playwright y TypeScript, con el propósito de verificar escenarios relacionados con autenticación, productos, reseñas y administración de cuentas.

## 3. Objetivos específicos

- Implementar casos de prueba automatizados.
- Diseñar casos de prueba manuales.
- Elaborar matrices de trazabilidad.
- Ejecutar validaciones locales en diferentes navegadores.
- Registrar evidencias de ejecución.
- Documentar incidentes y limitaciones del entorno.
- Integrar y organizar las contribuciones de ambos integrantes mediante Git.

## 4. Distribución del trabajo

### 4.1. Contribución de César

Se desarrollaron las siguientes actividades:

- Implementación de `AccountPage.ts` para escenarios de administración de cuentas.
- Implementación de `ProductPage.ts` para escenarios relacionados con productos, calificaciones y reseñas.
- Incorporación de los escenarios Smoke TC-SM04 y TC-SM05.
- Desarrollo de siete escenarios de regresión TC-REV01 a TC-REV07.
- Implementación de nueve validaciones locales relacionadas con productos y reseñas.
- Diseño de diez casos manuales.
- Elaboración de una matriz de trazabilidad.
- Documentación del incidente INC-CONN-01.
- Elaboración de un resumen técnico individual.

### 4.2. Contribución de Pablo

Se realizaron las siguientes actividades:

- Configuración y ejecución de pruebas mediante Playwright.
- Desarrollo y revisión de escenarios relacionados con autenticación.
- Documentación del incidente de conectividad INC-CONN-02.
- Diseño de diez casos manuales adicionales.
- Elaboración de una matriz de trazabilidad.
- Registro de avances del proyecto.
- Consolidación de resultados de ejecución.
- Documentación de actividades pendientes.
- Elaboración del inventario de evidencias.
- Preparación del informe final consolidado.

## 5. Alcance de las pruebas

El proyecto contempla escenarios de:

- Autenticación y registro de usuarios.
- Navegación y búsqueda de productos.
- Consulta de detalles de productos.
- Calificaciones y reseñas.
- Administración de cuentas.
- Validaciones locales de lógica y datos.

Se dispone de 25 casos automatizados distintos configurados para su ejecución en Chromium y Firefox, lo que representa 50 ejecuciones potenciales.

Esta cantidad representa cobertura configurada, no ejecuciones funcionales aprobadas.

## 6. Casos de prueba manuales

Se diseñaron 20 casos manuales:

- Diez casos documentados por César.
- Diez casos documentados por Pablo.

Los casos están registrados en los archivos correspondientes dentro de `docs`.

No se cuenta con evidencia suficiente para afirmar que los veinte casos manuales fueron ejecutados satisfactoriamente.

## 7. Resultados de pruebas automatizadas

### 7.1. Validaciones locales

Se verificaron los siguientes resultados:

| Navegador | Pruebas aprobadas | Pruebas fallidas |
|---|---:|---:|
| Chromium | 9 | 0 |
| Firefox | 9 | 0 |
| **Total** | **18** | **0** |

Estos resultados corresponden exclusivamente a las validaciones locales ejecutadas.

Los reportes HTML se encuentran en:

- `evidencias/ejecuciones-locales/chromium-html/index.html`
- `evidencias/ejecuciones-locales/firefox-html/index.html`

### 7.2. Pruebas Smoke

En una ejecución de cinco escenarios Smoke sobre Chromium se registraron cinco fallas.

En TC-SM01 se confirmó el error de navegación:

`net::ERR_CONNECTION_TIMED_OUT`

Las otras cuatro fallas requieren revisión individual.

No existe evidencia suficiente para clasificarlas como defectos funcionales de LambdaTest.

### 7.3. Pruebas de regresión

Se desarrollaron escenarios de regresión para autenticación y reseñas.

Aunque se verificaron ejecuciones individuales de autenticación durante el desarrollo, no se dispone de evidencia suficiente para declarar aprobada la suite completa de regresión.

## 8. Incidentes identificados

### INC-CONN-01

Incidente de conectividad documentado por César, relacionado con la imposibilidad de establecer una conexión HTTPS satisfactoria con LambdaTest.

### INC-CONN-02

Incidente de conectividad documentado durante las ejecuciones del segundo equipo.

Las comprobaciones realizadas identificaron dificultades para acceder a la aplicación remota.

Ambos incidentes representan limitaciones del entorno de ejecución y no constituyen por sí mismos defectos funcionales confirmados.

## 9. Evidencias

El proyecto dispone de cinco archivos inventariados:

- Tres capturas PNG.
- Un reporte HTML de Chromium.
- Un reporte HTML de Firefox.

Las capturas deben revisarse visualmente para asociarlas con resultados específicos.

El detalle se encuentra en `docs/inventario-evidencias-grupo2.md`.

## 10. Control de versiones

El trabajo se desarrolló mediante Git, utilizando contribuciones individuales e integración de cambios en la rama principal `main`.

Se verificaron diez contribuciones iniciales de César y nueve contribuciones principales de Pablo antes de elaborar este informe.

El historial de Git permite consultar los cambios y sus respectivos commits.

## 11. Limitaciones

- Problemas de acceso a LambdaTest.
- Imposibilidad de completar la validación funcional remota.
- Casos manuales pendientes de ejecución.
- Suites completas Smoke y de regresión sin resultados satisfactorios consolidados.
- Necesidad de verificar selectores y rutas contra la aplicación disponible.
- Capturas PNG pendientes de clasificación visual.

## 12. Conclusiones

El Grupo 2 desarrolló una estructura de automatización con Playwright y TypeScript, documentación de pruebas manuales, matrices de trazabilidad y reportes de validaciones locales.

Las 18 ejecuciones locales aprobadas demuestran que las validaciones correspondientes pudieron ejecutarse satisfactoriamente en Chromium y Firefox.

Sin embargo, los problemas de conectividad impidieron completar la evaluación funcional de LambdaTest. Por ello, no es posible afirmar que todas las funcionalidades de la aplicación cumplen los resultados esperados.

El proyecto deja documentado tanto el trabajo realizado como sus limitaciones, permitiendo continuar las verificaciones cuando el entorno remoto esté disponible.

## 13. Recomendaciones

- Restablecer y comprobar la conectividad con la aplicación.
- Ejecutar nuevamente las pruebas Smoke y de regresión.
- Revisar los resultados individuales de cada escenario fallido.
- Ejecutar los casos manuales y registrar evidencias.
- Verificar los Page Objects y selectores.
- Actualizar el informe cuando existan nuevos resultados comprobados.

## 14. Documentación de referencia

- `README.md`
- `docs/resumen-final-cesar.md`
- `docs/casos-manuales-cesar.md`
- `docs/casos-manuales-pablo.md`
- `docs/matriz-trazabilidad-cesar.md`
- `docs/matriz-trazabilidad-pablo.md`
- `docs/resultados-ejecucion-grupo2.md`
- `docs/inventario-evidencias-grupo2.md`
- `docs/pendientes-entrega-grupo2.md`
- `docs/incidente-conectividad-cesar.md`
- `docs/incidente-conectividad-grupo2.md`

---

**Estado del proyecto:** Documentación consolidada; validación funcional remota pendiente por limitaciones de conectividad.