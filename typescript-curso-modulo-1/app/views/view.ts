export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string) { //recebo no seletor o id do elemento que irei inserir o template
        this.element = document.querySelector(selector)!;
    }

    update(model: T): void {//renderizar este template no elemento que foi passado através do construtor
                                 //chama o template para gerar e atualizar o innerHTML
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    abstract template(model: T): string;

}