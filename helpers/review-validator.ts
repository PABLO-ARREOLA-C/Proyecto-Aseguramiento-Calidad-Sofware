
export interface ReviewData {
  nombre: string;
  comentario: string;
  calificacion: number;
}

export function validarResena(
  datos: ReviewData
): string[] {
  const errores: string[] = [];

  if (!datos.nombre.trim()) {
    errores.push('El nombre es obligatorio');
  }

  if (!datos.comentario.trim()) {
    errores.push('El comentario es obligatorio');
  }

  if (
    !Number.isInteger(datos.calificacion) ||
    datos.calificacion < 1 ||
    datos.calificacion > 5
  ) {
    errores.push('La calificacion debe ser entre 1 y 5');
  }

  return errores;
}
