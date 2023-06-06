let tutulanSayi = Math.trunc(Math.random() * 100);
console.log(tutulanSayi);

const input = document.querySelector("#input");
const button = document.getElementById("button");
const pWrite = document.querySelector("#write");
const hakkim = document.querySelector("#hak");
let counter = 5;
let eski = "0";
let yeni = "100"

button.addEventListener("click" , (e) => {
    counterr();

    if(input.value > 100 || input.value <= 0 ) {
        alert('İstenilen aralikta bir sayi giriniz: ');
    }else if (input.value == tutulanSayi) {
        alert("Tebrikler kazandiniz");
        input.disabled = true;
    } else if (input.value > tutulanSayi) {
        yeni = input.value
        pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
    }else if (input.value < tutulanSayi) {
        eski = input.value
        pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayi giriniz`;
      }
    
      input.value = "";
})

const counterr = () => {
    counter--;
    if (counter > 0) {
      hakkim.innerHTML = `${counter} hakkiniz kaldı`;
      input.focus();
      
    } else {
      pWrite.remove() 
      hakkim.innerHTML = `Hakkiniz Kalmadı`;
      input.disabled = true;
     
    }
  };
  
  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      button.click();
    }
   
  });

  input.value = "";
