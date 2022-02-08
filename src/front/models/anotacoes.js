class Anotacoes {
    constructor(titulo, nota) {

        try {
            if (typeof titulo == string) {
                if (typeof nota == string) {
                    this.titulo = titulo;
                    this.nota = nota;
                } else {
                    throw new error("não é uma string");
                }
            } else {
                throw new error("não é uma string");
            }
        } catch (error) {
            console.log(error.message);
            console.log("tenta de novo");
        }
    }
}