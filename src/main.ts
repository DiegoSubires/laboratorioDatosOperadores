import "./style.css";

interface GrupoMusical {
  nombreGrupo: string;
  añoFundacion: number;
  active: boolean;
  fraseActivos: string;
  genero: string;
}
interface GeneroMusical {
  genero: string;
  grupoMusical1: GrupoMusical;
  grupoMusical2: GrupoMusical | null;
}

const beatles: GrupoMusical = {
  nombreGrupo: "The Beatles",
  añoFundacion: 1960,
  active: true,
  fraseActivos: "siguen activos",
  genero: "🎵 Pop Rock",
};
const popRock: GeneroMusical = {
  genero: "🎵 Pop Rock",
  grupoMusical1: beatles,
  grupoMusical2: null,
};

const queen: GrupoMusical = {
  nombreGrupo: "Queen",
  añoFundacion: 1970,
  active: false,
  fraseActivos: "no siguen activos",
  genero: "🎸 Rock",
};
const rollingStones: GrupoMusical = {
  nombreGrupo: "The Rolling Stones",
  añoFundacion: 1962,
  active: true,
  fraseActivos: "siguen activos",
  genero: "🎸 Rock",
};
const rock: GeneroMusical = {
  genero: "🎸 Rock",
  grupoMusical1: queen,
  grupoMusical2: rollingStones,
};

const acDc: GrupoMusical = {
  nombreGrupo: "AC DC",
  añoFundacion: 1973,
  active: true,
  fraseActivos: "siguen activos",
  genero: "🤘 Hard Rock",
};
const hardRock: GeneroMusical = {
  genero: "🤘 Hard Rock",
  grupoMusical1: acDc,
  grupoMusical2: null,
};

const beethoven: GrupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  añoFundacion: 1770,
  active: false,
  fraseActivos: "no siguen activo, obviamente",
  genero: "🎼 Clásica",
};
const clasica: GeneroMusical = {
  genero: "🎼 Clásica",
  grupoMusical1: beethoven,
  grupoMusical2: null,
};

const styleNombreGrupo =
  "background: green; font-weight: 700; font-size: 1.2 rem";
const styleMensaje = "font-weight: 400";

console.table({ popRock, rock, hardRock, clasica });

console.log(`%c${beatles.nombreGrupo}:`, styleNombreGrupo);
console.log(
  `%cPertenecen al género musical ${beatles.genero},
se fundaron en ${beatles.añoFundacion}, y
${beatles.fraseActivos}, a día de hoy.`,
  styleMensaje
);

console.log(`%c${queen.nombreGrupo}:`, styleNombreGrupo);
console.log(
  `%cPertenecen al género musical ${queen.genero},
se fundaron en ${queen.añoFundacion}, y
${queen.fraseActivos}, a día de hoy.`,
  styleMensaje
);

console.log(`%c${rollingStones.nombreGrupo}:`, styleNombreGrupo);
console.log(
  `%cPertenecen también al género musical ${rollingStones.genero},
se fundaron en ${rollingStones.añoFundacion}, y
${rollingStones.fraseActivos}, a día de hoy.`,
  styleMensaje
);

console.log(`%c${acDc.nombreGrupo}:`, styleNombreGrupo);
console.log(
  `%cPertenecen al género musical ${acDc.genero},
se fundaron en ${acDc.añoFundacion}, y
${acDc.fraseActivos}, a día de hoy.`,
  styleMensaje
);

console.log(`%c${beethoven.nombreGrupo}:`, styleNombreGrupo);
console.log(
  `%cPertenece al género musical ${beethoven.genero},
comenzó en ${beethoven.añoFundacion}, y
${beethoven.fraseActivos}.`,
  styleMensaje
);
