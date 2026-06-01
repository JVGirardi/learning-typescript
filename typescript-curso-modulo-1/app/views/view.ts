export abstract class View<T> {

    protected element: HTMLElement;
    private escapar: boolean = false;

    //? no parametro == opcional
    constructor(selector: string, escapar?: boolean) { //recebo no seletor o id do elemento que irei inserir o template
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} nao existe no DOM`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {//renderizar este template no elemento que foi passado através do construtor
                                 //chama o template para gerar e atualizar o innerHTML
        let template = this.template(model);
        if (this.escapar === true) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,"");// remove td mundo com tag script
        }

        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;

}