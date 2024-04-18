function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap
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
    
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir())
    
})

document.querySelector(".next_btn").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir())
    }else{
        console.log("quiz bitti")
    }

})

function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri){
        options += 
        `
           <div class="option">
           <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>           
           </div>
        `;
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}



