export class NegociacaoController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.inputDate);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
