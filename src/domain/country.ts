export interface Country {
    name: string,
    capital:string,
    currency:[],
    language:string,
    flag:string
}

export interface CurrencyDetail extends Country {
    code:string,
    name:string,
    symbol:string
}