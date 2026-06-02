export function logarTempoDeExecucao(emSegundos: boolean = false) { //default false
    return function(
        target: any, //se colocar decorator em um metodo estático target é a funcao construtora da classe. se n for estático retorna o prototype da classe, prototype = 'método herdado'
        propertyKey: string, //nome do método como string que foi decorado
        descriptor: PropertyDescriptor //referencia para o método original
    ) {
        const metodoOriginal = descriptor.value; //function vai receber uma quantidade indefinidade de parametros
        descriptor.value = function(...args: Array<any> ) {//ou any[]--> ...args pega os parametros passados e converte para um array
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args); //chama o metodo original this vai ser a classe filha onde sera executada,
                                                              //passo como parametro o array de parametros
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao ${t2-t1/divisor} ${unidade}`);
            retorno
        };

        return descriptor;
    }
}