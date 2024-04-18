function Soru(soruMetni,cevapSecenekleri,dogruCEvap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCEvap = dogruCEvap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCEvap
    }
}

let sorular = [
    new Soru ("1-JavaScript paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Typescript",c:"npm"},"c"),
    new Soru ("2-JavaScript paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Typescript",c:"npm"},"c"),
    new Soru ("3-JavaScript paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Typescript",c:"npm"},"c"),
    new Soru ("4-JavaScript paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Typescript",c:"npm"},"c")
]

function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function (){
    return this.sorular[this.soruIndex]
}
const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex){
        document.querySelector(".quiz_box").classList.add("active");
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    }else{
        console.log("quiz bitti")
    }
})

