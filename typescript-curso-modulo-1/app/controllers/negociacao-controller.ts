import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        this.inputDate = document.querySelector('#data') as HTMLInputElement; //id no DOM
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }
    
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputDate.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociacoes em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private isDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputDate.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputDate.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

}