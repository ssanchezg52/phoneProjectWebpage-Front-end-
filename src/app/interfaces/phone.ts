import { HistoricalPrice } from "./historicalPrice";
import { Processor } from "./processor";

export interface Phone {
    id:number;
    brand:string;
    model:string;
    processor:Processor;
    ram:number;
    screen:number;
    battery:number;
    antutu:number;
    price:number;
    priceHistory:HistoricalPrice[];
}