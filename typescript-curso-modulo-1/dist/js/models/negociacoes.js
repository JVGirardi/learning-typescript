export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
        //lista(): ReadonlyArray<Negociacao> {
        //    return this.negociacoes;
        //}
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
