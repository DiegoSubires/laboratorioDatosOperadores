# laboratorio Variables

Buenas, he introducido en el mensaje varias variables para complicarlo
un poco. Todos los cambios están en main.ts.

He conseguido dale estilo, con la construcción

console.log(`%c{mensaje}`, color: red);

pero sigo sin poder hacerlo para varias strings en el mismo console.log:

console.log(`%c{mensaje1}`, `%c{mensaje1}`, `%c{mensaje1}`, stylo1, stylo2, stylo3);

He dejado console.table, más que nada por probar cómo se mostraba la información.

He dejado también las interfaces específicas para Genero Musical, porque no entendía
bien lo de que "cada género queremos tenerlo en una variable".
