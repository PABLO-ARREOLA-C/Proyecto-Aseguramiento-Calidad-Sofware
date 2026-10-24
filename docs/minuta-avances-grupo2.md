# Minuta de avances — Grupo 2

**Proyecto:** Aseguramiento de la Calidad de Software  
**Fecha:** 24 de octubre de 2026  
**Herramientas:** Playwright, TypeScript, Node.js y Git/GitHub  
**Aplicación bajo prueba:** LambdaTest E-commerce Playground

## 1. Objetivo

Registrar los avances del proyecto de aseguramiento de calidad, los resultados de las pruebas automatizadas y los problemas encontrados durante su ejecución.

## 2. Actividades realizadas

- Configuración del proyecto de automatización con Playwright.
- Creación de pruebas Smoke, regresión y validaciones locales.
- Implementación de Page Objects y funciones auxiliares.
- Integración de las contribuciones de ambos integrantes mediante GitHub.
- Ejecución de pruebas automatizadas en Chromium y Firefox.
- Generación y almacenamiento de reportes HTML.

## 3. Resultados obtenidos

| Prueba | Navegador | Resultado |
|---|---|---|
| Validaciones locales de productos | Chromium | 5 aprobadas |
| Validaciones locales de reseñas | Chromium | 4 aprobadas |
| Validaciones locales de productos | Firefox | 5 aprobadas |
| Validaciones locales de reseñas | Firefox | 4 aprobadas |
| Pruebas Smoke | Chromium | 5 fallidas |

**Total de ejecuciones locales aprobadas:** 18.

Las validaciones locales no requieren conexión con LambdaTest y no equivalen a pruebas funcionales exitosas de la aplicación web.

## 4. Incidente identificado

Durante las pruebas contra LambdaTest E-commerce Playground se presentaron problemas de conectividad.

En la prueba TC-SM01 se confirmó el error `net::ERR_CONNECTION_TIMED_OUT` durante la navegación inicial.

Las pruebas Smoke de Chromium registraron cinco fallos. Está pendiente revisar individualmente los errores de cuatro de ellas.

El incidente se clasifica provisionalmente como un problema del entorno o conectividad, no como un defecto funcional confirmado de la aplicación.

## 5. Evidencias

Se conservaron archivos HTML en las siguientes ubicaciones:

- `evidencias/ejecuciones-locales/chromium-html/`
- `evidencias/ejecuciones-locales/firefox-html/`

Ambos archivos `index.html` están registrados en Git. Está pendiente verificar que sus contenidos correspondan a las ejecuciones indicadas.

## 6. Actividades pendientes

- Verificar el contenido de los reportes HTML.
- Revisar los errores restantes de las pruebas Smoke.
- Consolidar la documentación del incidente de conectividad.
- Completar y verificar la ejecución de los casos manuales.
- Revisar el documento `resumen-final-cesar.md`, actualmente vacío.
- Verificar los commits y las contribuciones de ambos integrantes.
- Elaborar el informe final del proyecto.

## 7. Conclusión

El Grupo 2 cuenta con una estructura de automatización integrada y 18 ejecuciones locales aprobadas en Chromium y Firefox.

Las pruebas funcionales contra LambdaTest siguen limitadas por problemas de conectividad. El equipo continuará documentando las evidencias disponibles y verificando los pendientes antes de la entrega final.