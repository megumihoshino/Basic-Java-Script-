// JS INTRO //

let nama = "Gumi"; /* tipe data string, pke (") atau (') */
let kota = "Tohoku";
let umur = "23";
let pekerjaan = "peneliti";
let a = 100;
let b = 27.11;
let ingfo = nama + kota; /*utk menggabungkan dua kata atau lebih (string concatenation*/

// increment and decrement//
let x = 6; 

// BigInt, utk menyimpan angka dg nilai besar//
const bigNumber = 1234567890987654322134567789n;
const myInt = 1234567890987654322134567789;
const bigIntButSmall = 8n;

// tipe data boolean//
let m = true;
let n = false;

// tipe data string//
const middleblocker = "Tsukishima Kei";
const Kei = '"Ara-ara gomen, chiisaku mienakatta~" Kei said to Shoyo.';
const Megumi = '"Oi Kei, that\'s so mean!" Megumi added.';
const i = 67;
const j = 100;
let isGreater = a>b;
let isLess = a<b;

// print area0//
console.log(middleblocker);
console.log(Kei);
console.log(Megumi);
console.log(typeof(m));
console.log(typeof(n));
console.log(isGreater);
console.log(isLess);

// print area1//
console.log(bigIntButSmall);
console.log(bigNumber);
console.log(myInt);


// print area2//
console.log(7n + 3n);
console.log(8n-7n);
console.log(7n*5n);
console.log(8n%3n);

// print area3//

//print area-n//
console.log(ingfo);
console.log(x++); /* nilai x++ msh 6, aka blm ditmbh 1 */
console.log(x); /* nilai x sudah ditambah 1, jadinya 7 */
console.log(++x); /* nilai x bertambah 1 sebelum ekspresi selanjutnya dievaluasi*/
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**2);
console.log(typeof(a));
console.log(typeof(b));
console.log(nama);
console.log(kota);
console.log(umur);
console.log(pekerjaan);

