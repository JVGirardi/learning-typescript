//decorator de um atributo
export function domInjector(seletor: string) { //parametro = id do objeto no DOM 
    //propertyKey eh o atributo no qual este decorator foi colado.
    return function(target:any, propertyKey: string) {
        //target.constructor.name == nome da classe 
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        
        let elemento: HTMLElement | null = null;

        const getter = function() {
            //desta forma faço um cache do elemento e so faço o querySelector na primeira chamada do decorator.
            if (!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }

            return elemento;
        }

        //aplicando o getter a propriedade definida por propertyKey
        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        );    
    }
}
/*
    O decorator eh aplicado quando a classe eh instanciada em tempo de execucao, e o get eh lazy
    adicionando um getter no atributo desejado
    atraves do getter tenho o retorno do input em tempo de execucao
    desta forma toda vez que eu acesso este atributo eu retorno um getter que busca esta propriedade do
    query selector no DOM

    Object.defineProperty eh para substituir o atributo original por este getter
    target eh o prototype
    propertyKey eh a propriedade que qro modificar
    get : --> "cria um getter para mim"
*/