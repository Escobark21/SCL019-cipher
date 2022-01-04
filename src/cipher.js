const cipher = {

  encode: (texto, offset) => {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 + 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = ((letras.indexOf(texto[i]) + offset) % 26);
          resultado += letras[posicion];

        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  },

  decode: (texto, offset) => {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 - 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = ((letras.indexOf(texto[i]) - offset) % 26);
          resultado += letras[posicion];

        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  }


}
export default cipher;








