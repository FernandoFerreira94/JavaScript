/*
----- window.confimr('msg')
let altura = 1.74;
let peso = 86;
//window.comfinrm mostra uma msg na pagina retornando false ou true.
let continua = window.confirm("contina?");
if (continua) {
  let imc = peso / (altura * altura);
  console.log(imc);
} else {
  console.log("erro");
}
*/

// ----------- STRINGs --------
let texto = "have a nice day";
/*
----- concat('texto adicionar') -----
concat = concateniza uma string!
console.log(texto.concat("good")) = "have a nice day good";
texto = texto + "good";
console.log(texto);
*/

/*
------ indexOf('palavra a procurar')
//indexOf = retorna qual indice comeca o valor passado se for true, se for false retorna -1
console.log(texto.indexOf("nice")) = 7 true;
*/

/*
------- match('palavra procurar')-------
match() = retorna um array com index, input, group
console.log(texto.match("nice")) = ['nice', index: 7, input: 'have a nice day', groups: undefined] ;
*/

/* 
---------- serch('string a procurar')
serch() =  retorna o indice da string procurada, se for false retorna -1
console.log(texto.search("y")) = 14;
*/

/*
---------- replace('string a ser removida','string a ser adicionada') --------------
replace() = retorna uma troca de string
console.log(texto.replace(/a/g, "#")) = have a good day;

obs se usarmos replace(/a/g,'#') usando o g ele ira repetir a substituição de todas as strings ou palavras
console.log(texto.replace(/a/g, "#")); = h#ve # nice d#y
*/

/*
------- length --------
length =  retorna quantidade de string 
console.log(texto.length); = 15
*/

/*
------- split('string a ser removida')
split() = retorna um array removendo todos as string passada.
console.log(texto.split("e")); = (3) ['hav', ' a nic', ' day']
*/
