export interface Country {
    name: string,
    capital:string,
    area:number,
    language:string,
    flag:string,
    borders: Array<String>
}

export interface CurrencyDetail extends Country {
    code:string,
    name:string,
    symbol:string
}