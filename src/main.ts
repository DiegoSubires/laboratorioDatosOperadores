import "./style.css";

interface Coste {
  valor: number;
  moneda: string;
}

const totalCena: Coste = {
  valor: 120,
  moneda: "€",
};
const totalBebidas: Coste = {
  valor: 18,
  moneda: "€",
};

const asistentes: number = 6;

const resultado: Coste = {
  valor: 0,
  moneda: "€",
};
const cumpleaños: string = "🥳 cumpleaños";
const bebidas: string = "🍺 bebidas";

resultado.valor =
  Math.round(
    (100 * (totalCena.valor - totalBebidas.valor)) / (asistentes + 1)
  ) / 100;

const mensaje: string = `%cHola compañeros, lo pasamos genial 
en la cena por mi ${cumpleaños}., 

La cena me ha costado ${totalCena.valor} ${
  totalCena.moneda
}, pero yo invito a las ${bebidas}, 
que en total han sido ${totalBebidas.valor} ${totalBebidas.moneda}.
El resto de la cena, a partir entre todos,
(fuimos ${asistentes + 1} en total)
resulta en ${resultado.valor} ${resultado.moneda} cada uno.

Me hacéis un bizum...`;

console.log(mensaje);
