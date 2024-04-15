function Soru(soruMetni,cevapSecenekleri,dogruCEvap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCEvap = dogruCEvap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCEvap
    }
}

let soru1 = new Soru ("JavaScript paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Typescript",c:"npm"},"c")
let soru2 = new Soru (".Net paket yönetim uygulaması nedir ?",{a:"Node.js",b:"Nuget",c:"NPM"},"b")

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

document.querySelector(".btn-start").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    }else{
        console.log("quiz bitti")
    }
})

