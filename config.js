const fs = require('fs')
class Config{
  constructor(){
    this.padrao = {
      name:"Configurações",
      version:"0.0.1",
      allowLog:false
    }
    this.mod = [];
    this.init;
    this.criarObj;
    this.allowLog;
  }
  init(){
    fs.writeFileSync('./config/config.json',JSON.stringify(this.padrao))
    console.log("Arquivo de Config Padrao Criado")
  }
  criarObj(){
    let arquivo = fs.readFileSync('./config/config.json')
    let obj = JSON.parse(arquivo)
    return obj
  }
  
  allowLog(ent){
    var obj = this.criarObj()
    let entradas = ['true','false']
    if(entradas.indexOf(ent) > -1 && ent == 'true'){
      
      obj.allowLog = ent 
      fs.writeFileSync('./config/config.json',JSON.stringify(obj))
      this.mod.push(`- ${Object.keys(obj)[2]} = ${obj.allowLog}`)
      
      console.log(`${obj.name} Modificadas`)
      this.mod.forEach((modif)=>{
        console.log(modif)
      })
    }
    else if(entradas.indexOf(ent) > -1 && ent == 'false'){
      obj.allowLog = ent
      fs.writeFileSync('./config/config.json',JSON.stringify(obj))
      this.mod.push(`- ${Object.keys(obj)[2]} = ${obj.allowLog}`)

      console.log(`${obj.name} Modificadas`)
      this.mod.forEach((modif)=>{
        console.log(modif)
      })
  }
  
}
module.exports = new Config;
