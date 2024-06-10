// TEST QUOKKA EXTENSION
const x = 10+45;
console.log(x); 

//IF ELSE statement

const isRaining = true;
console.log("Persiapan sblm berangkat kegiatan.");

if (isRaining) {
    console.log("Hari ini ujan. Bawa payung bro.");
}

else {
    console.log("yaudah lanjut aja.")
}




//another example

let m = 790;

if (x>800){
    console.log(m);
}

else {
    console.log("nilai kurang dari 800.");
}

//penggabungan if/else

let language = "Germany";
let greeting;

if(language === "Russian"){
    greeting = "DOBraye OOTra"
} else if (language === "Germany"){
    greeting = "ALL HEIL HIT-! (wait this is wrong, i mean guten morgen hehe)"
} else if (language === "Japanese"){
    greeting = "Ohayou Gozaimasu"
} else if(language === "Indonesian"){
    greeting = "Selamat Pagi"

}else {
    greeting = "idk bruh"
    console.log(greeting);
}
console.log(language);
console.log(greeting);




function scoreChecker(score) {
    let result;
      if (score >= 90){
          result = "Selamat! Anda mendapatkan nilai A.";
      } else if (score >= 80 && score <= 90){
          result = "Anda mendapatkan nilai B.";
      } else if (score >= 70 && score <= 79){
          result = "Anda mendapatkan nilai C.";
      } else if (score >= 60 && score <= 69){
          result = "Anda mendapatkan nilai D.";
      } else {
          result = "Anda mendapatkan nilai E.";
      }
            return result;
   }

  module.exports = scoreChecker;



//condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 0.7:0;
console.log(`anda akan mendapatkan diskon sebesar ${discount*100}%`)

//truthy and falsy
/*digunakan utk menentukan kondisi true atau false ttp outputnya
 bukan boolean. nilai truthy brrti ketika nilai yg krtika dievaluasi
 akan  menghasilkan nilai true, begitu pula falsy akn menghasilkan output
 bernilai false. tipe data yg dianggap falsy:
 1. number 0
 2. BigInt On
 3. String kosong sprt "" atau "
 4. null
 5. undefined
 6. NaN, atau Not a Number
 */

 //contoh falsy
 let nama = "";
 if (nama){
    console.log(`Halo, ${nama}`);
 } else{
    console.log("nama undefined");
 }

 //cth truthy
 let angka = 12;
 if(angka){
    console.log(`Ini ${angka}`);
 } else{
    console.log("angka undefined");
 }

 //SWITCH CASE STATEMENT//
 /*fungsinya sama kyk if statement, utk melakukan percabangan
 logika dengan pengecekan byk kondisi dg lbh mudah dan ringkas.
 - keyword "switch" berisi variabel/ekspresi yg akn dievaluasi,
 lalu kita masukkan keyword "case".
 - jika kondisi pd "case" sm dg variabel pd "switch", maka blok kode
 stlh titik dua (:), akan dijalankan.
 - keyword "break" digunakan utk keluar dari proses "switch".
 - "default" memilik fungsi yg sama dg keyword "else". jika
 tdk ada nilai yg sama dg variabel pd switch, maka blok code ini 
 akn dijalankan.
 
 */

 let team_name = "Inarizaki";
 let capt_name;

 switch(team_name){
    case "Karasuno":
        capt_name = "Sawamura Daichi";
        break;
    case "Inarizaki":
        capt_name = "Shinsuke Kita";
        break;
    case "Fukurodani":
        capt_name = "Bokuto Koutarou";
        break;
    default:
        capt_name = "idk bruh";
 }

 console.log(team_name);
 console.log(capt_name);


//LOOPING

//FOR LOOP
for(let i = 0; i<5; i++){
    console.log(i);
}


//FOR OF LOOP
/*utk melakukan looping pada array.*/

let watashi_Array = ["Tsukishima Kei", "Tsukishima Megumi", 27, 11];

for(const arrayItem of watashi_Array){
    console.log(arrayItem)
}

//WHILE AND DO-WHILE

/*metode lain utk melakukan looping adlh statement "while". sama sprt
"for", instruksi "while" mengevaluasi ekspresi boolean dan menjalankan
kode di dalam blok while ketika bernilai true.
 */

let a = 1;

while(a<=30){
    console.log(a);
    a++;
}

//DO-WHILE
/*kondisi pada while akan dievaluasi sblm blok kode di dlmnya dijalankan,
sedangkan do-while akn mengevaluasi ekspresi boolean stlh blok 
kodenya berjalan. ini artinya kode di dlm do-while akn dijlnkan
at least satu kali.
 */
let b = 1;
do{
    console.log(b);
    b++;
} while (b<=15);

//Infinite loop
/* ketika menerapkan perulangan pada program, ada satu kondii yg
perlu dihindari yaitu infinite loop. infinite loop atau endless loop
adlh kondisi di mana program kita stucked di dlm perulangan. kodenya
akn berjln terus hingga menyebabkan crash pd aplikasi dan komputer
kecuali ada intervensi scr eksternal, kyk closed aplikasi.
 cth kode:
 let i = i;

 while(i<=5){
 console.log(i);
 }
 */

//KUIS CODING-1
let firstName = "John";
let lastName = "Doe";
const age = 25;
const isMarried = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);

