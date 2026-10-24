# Matriz de trazabilidad — Pablo

**Proyecto:** Aseguramiento de la Calidad del Software  
**Grupo:** 2  
**Responsable:** Pablo  
**Fecha:** 24/10/2026  
**Aplicación:** LambdaTest E-commerce Playground

## 1. Objetivo

Relacionar los casos manuales de autenticación, registro y navegación con las pruebas automatizadas desarrolladas para el proyecto.

## 2. Matriz de trazabilidad

| Caso manual | Funcionalidad | Prueba automatizada relacionada | Cobertura |
|---|---|---|---|
| CM-P01 | Carga de página principal | TC-SM01 | Directa |
| CM-P02 | Acceso al formulario Login | TC-SM02 | Directa |
| CM-P03 | Login con campos vacíos | TC-AUTH01 | Directa |
| CM-P04 | Login con correo no registrado | TC-AUTH02 | Directa |
| CM-P05 | Login con contraseña incorrecta | TC-AUTH03 | Directa |
| CM-P06 | Acceso al formulario Register | TC-SM03 | Directa |
| CM-P07 | Registro con campos vacíos | TC-AUTH04 | Directa |
| CM-P08 | Confirmación de contraseña diferente | Sin prueba automatizada específica | Pendiente |
| CM-P09 | Correo electrónico inválido | Sin prueba automatizada específica | Pendiente |
| CM-P10 | Navegación desde Login hacia Register | Sin prueba automatizada específica | Pendiente |

**Resumen:** Siete casos manuales tienen pruebas automatizadas relacionadas y tres requieren automatización específica.

La relación indicada corresponde a la cobertura diseñada; no confirma que las pruebas hayan aprobado.

## 3. Estado de ejecución

| Grupo de pruebas | Estado |
|---|---|
| TC-SM01 a TC-SM05 en Chromium | 5 ejecuciones fallidas |
| TC-SM01 | Error de conexión confirmado |
| TC-SM02 a TC-SM05 | Errores individuales pendientes de revisión |
| TC-AUTH01 a TC-AUTH04 | Resultados actuales pendientes de consolidación |
| CM-P01 a CM-P10 | No ejecutados manualmente |

## 4. Pruebas locales de apoyo

Se registraron nueve validaciones locales aprobadas en Chromium y nueve en Firefox.

Estas validaciones corresponden a productos y reseñas, y no sustituyen las pruebas funcionales de autenticación y registro.

## 5. Incidente relacionado

**INC-CONN-02:** Problema de conectividad hacia LambdaTest E-commerce Playground desde el segundo equipo.

El incidente limita la ejecución y verificación de las pruebas funcionales.

## 6. Evidencias relacionadas

- `docs/casos-manuales-pablo.md`
- `docs/incidente-conectividad-grupo2.md`
- `docs/minuta-avances-grupo2.md`
- `evidencias/ejecuciones-locales/`

## 7. Actividades pendientes

- Recuperar conectividad con la aplicación.
- Ejecutar los diez casos manuales.
- Consolidar los resultados de regresión de autenticación.
- Verificar las pruebas automatizadas relacionadas.
- Evaluar la automatización de CM-P08, CM-P09 y CM-P10.
- Incorporar los resultados definitivos al informe final.

## 8. Conclusión

La matriz permite identificar qué escenarios manuales cuentan con pruebas automatizadas relacionadas y cuáles tienen cobertura pendiente.

Los resultados deben actualizarse cuando sea posible completar las ejecuciones funcionales contra LambdaTest.