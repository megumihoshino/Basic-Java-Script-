// JS INTRO //

// area-0//
let nama = "Gumi"; /* tipe data string, pke (") atau (') */
let kota = "Tohoku";
let umur = "23";
let pekerjaan = "peneliti";
let a = 100;
let b = 27.11;
let ingfo = nama + kota; /*utk menggabungkan dua kata atau lebih (string concatenation*/

// print area-0//
console.log(nama);
console.log(kota);
console.log(umur);
console.log(pekerjaan);
console.log(ingfo);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**2);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(nama)); /* tipe data string */


// increment and decrement//
let x = 6; 

// print area-1, incerement and decrement//
console.log(x++); /* nilai x++ msh 6, aka blm ditmbh 1 */
console.log(x); /* nilai x sudah ditambah 1, jadinya 7 */
console.log(++x); /* nilai x bertambah 1 sebelum ekspresi selanjutnya dievaluasi*/


// area-2, BigInt, utk menyimpan angka dg nilai besar//
const bigNumber = 1234567890987654322134567789n;
const myInt = 1234567890987654322134567789;
const bigIntButSmall = 8n;

// print area-2//
console.log(bigIntButSmall);
console.log(bigNumber);
console.log(myInt);
console.log(7n + 3n); /*bigInt bs buat operasi aritmatika pd umumnya */
console.log(8n-7n);
console.log(7n*5n);
console.log(8n%3n);

// area-3, tipe data boolean//
let m = true;
let n = false;

// print area-3//
console.log(typeof(m));
console.log(typeof(n));


// area-4, tipe data null, biasa digunakan sbg nilai sementara pd variabel tp sebnrnya nilai tsb tdk ada//
let some_data = null;
console.log(some_data);

// area-5, tipe data string//
const middleblocker = "Tsukishima Kei";
const Kei = '"Ara-ara gomen, chiisaku mienakatta~" Kei said to Shoyo.';
const Megumi = '"Oi Kei, that\'s so mean!" Megumi added.';

// print area-5//
console.log(middleblocker);
console.log(Kei);
console.log(Megumi);

// area-6, operator komparasi//
const i = 67;
const j = 100;
let isGreater = i>j;
let isLess = i<j;

// print area-6//
console.log(isGreater);
console.log(isLess);

//area-7, tipe data symbol (utk menunjukkan identifier yg unik)//
const id = Symbol("id");
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id);
console.log(id1 == id2);
console.log(id1 != id2);


// OPERATOR THINGS//

/*Assignment Operator (=), utk menginisialisasi variabel
ditempatkan di tengah antara variabel dan nilai */

let x1 = 35;
let y1 = 90;
x1-=y1;
console.log(x1);

/*comparison operator*/
console.log(x1<y1); 
console.log(x1>y1);
console.log(x1 == y1); //compare ke2 nilai saja, ttp mengabaikan tipe data//
console.log(x1 != y1); //compare ke2 nilai hrslah tdk sama, ttp mengabaikan tipe data//
console.log(x1 === y1); //identik, memperhatikan tipe data. membandingkan kedua nilai beserta tipe data//
console.log(x1 !== y1); //membandingkan kedua nilai beserta tipe data hrslah tdk sama//
console.log(x1 >= y1); //compare dua nilai apakah nilai pertama lbh atau sm dg nilai ke2//
console.log(x1 <= y1); //compare dua nilai apakah nilai pertama kurang atau sm dg nilai ke2//

/*perbandingan antara "sama" dan "identik"
- jika hny ingin membandingkan dari kesamaan nilainya, gunakan "=="
- jika ingin membandingkan dg memperhatikan tipe data, gunakan "==="*/

const aString = '11';
const aNumber = 11;

console.log(aString == aNumber); //true, krn sama2 11
console.log(aString === aNumber); //false, krn walaupun nilainya sama, tp beda tipe data

/*logical operator (and, or, not)*/

let x2 = 11;
let y2 = 12;

/*AND Operator (&&), salah 1 false hasilnya false*/
console.log(x2 < 15 && y2 < 11); // true && false = false
console.log(x2 > 15 && y2 > 11); // false && true = false
console.log(x2 < 15 && y2 > 11); // true && true = true
console.log(x2 > 15 && y2 < 11);// false && false = false

/*OR Operator (||), salah 1 true hasilnya true */
console.log(x2 < 15 || y2 < 11); //true || false = true
console.log(x2 > 15 || y2 > 11); //false || true = true
console.log(x2 < 15 || y2 > 11); //true || true = true
console.log(x2 > 15 || y2 < 11); //false || false = false

/* NOT Operator (!) */
console.log(x2 != 15); // true

