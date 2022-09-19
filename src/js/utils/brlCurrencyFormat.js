export function brlCurrencyFormat(price){
    return Number(price).toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
    })
}