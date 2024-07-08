interface IFormatCurrency {
    amount:number;
    transactionName?:string;
    transactionType?:string;
    sigFigures?:number;
}

export default function formatCurrency({ amount, sigFigures }:IFormatCurrency):string {
    return `₦${parseFloat(amount.toString()).toFixed(sigFigures ?? 2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}