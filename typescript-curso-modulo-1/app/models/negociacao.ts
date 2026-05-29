export class Negociacao {
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;
    //--> em ts fica implicito

    constructor(
        //como se fosse:
        //this.etc = _etc.
        //private _data: Date, 
        //private _quantidade: number, 
        //private _valor: number
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number,    
    ) {}

    //get data(): Date {
    //    return this._data;
    //}

    //get quantidade(): number {
    //    return this._quantidade;
    //}

    //get valor(): number {
    //    return this._valor;
    //}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}