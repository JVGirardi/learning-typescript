export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        //chama o template para gerar e atualizar o innerHTML
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
