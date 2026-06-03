import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json()) //em vez do tipo any para dados tipei com uma interface.
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadosDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadosDeHoje.vezes,
                        dadosDeHoje.montante
                    )
                })
            });
    }
}