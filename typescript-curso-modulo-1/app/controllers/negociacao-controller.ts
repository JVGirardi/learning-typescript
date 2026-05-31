import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView'); //passando o id do elemento do DOM
    private mensagemView = new MensagemView('#mensagemView'); //passando o id do elemento no HTML

    constructor() {
        this.inputDate = document.querySelector('#data')!;
        this.inputQuantidade = document.querySelector('#quantidade')!;
        this.inputValor = document.querySelector('#valor')!;
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); 

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputDate.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputDate.focus();
    }

}