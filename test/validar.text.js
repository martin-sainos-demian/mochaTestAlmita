const{it,describe} = require("mocha")

const expect = require('chai').expect

let archivoValidar=require('./validar.js')

describe("pruebaSuma",()=>{
    it("El resultado es 6",()=>{
        const result=archivoValidar.suma(5,3)
        expect(result).to.be.equal(6)
    })

    it("prueba de correo",()=>{
        const result=archivoValidar.validarCorreo("alma@gmail.com")
        expect(result).to.be.equal(true)
    })
})