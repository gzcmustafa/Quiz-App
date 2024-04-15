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


console.log(soru1.soruMetni)
console.log(soru1.dogruCEvap)
