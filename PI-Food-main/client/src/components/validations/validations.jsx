export const validateTitle = (title) => {
    if (title.trim() === '') {
      return 'El título es obligatorio.';
    }
    if (title.length > 32) {
      return 'El título es demasiado largo.';
    }
    return '';
  };
  
  export const validateSummary = (summary) => {
    if (summary.trim() === '' || summary.length < 20) {
      return 'El resumen del plato es demasiado corto.';
    }
    return '';
  };
  
  export const validateHealthScore = (healthScore) => {
    if (parseInt(healthScore, 10) === 0) {
      return 'Debe especificar el Health Score.';
    }
    return '';
  };
  
  export const validateInstructions = (instructions) => {
    if (instructions.length < 20) {
      return 'Las instrucciones del plato son demasiado cortas.';
    }
    return '';
  };
  
  export const validateImage = (image) => {
    if (!image || image.trim() === '') {
      return 'Debe cargar una imagen.';
    }
    if (
      !image.match(/\.(jpg|jpeg|png)$/) &&
      !image.startsWith('data:image/jpeg;base64,')
    ) {
      return 'El formato de la imagen debe ser JPG, JPEG o PNG.';
    }
    return '';
  };
  
  export const validateDietId = (dietId) => {
    if (dietId.length === 0) {
      return 'Debe seleccionar al menos un tipo de dieta.';
    }
    return '';
  };