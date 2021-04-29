import React from 'react'
import "./Estilo.css"

const Informaçao = () => {
  const [ nome, setNome] = React.useState()
  const [ telefone, setTelefone] = React.useState()
 
  const Salvar = () => {
    console.log("Salvar informações")
    console.log(nome)
    console.log(telefone)
  }
  return (
    <div>
      <span>Digite o nome: </span>
      <input 
            style= {{ background: "pink", borderRadius: "19px", padding: "5", margin: "10"}}
            type= "text" 
             value = {nome}
             onChange = {(e) => setNome(e.target.value)}
      />
     
      <br/>
      <span>Digite o telefone: </span>
      <input 
            style= {{ background: "pink", borderRadius: "19px", padding: "5", margin: "10"}}
            type= "number" 
             value = {telefone}
             onChange = {(e) => setTelefone(e.target.value)}
      />       
      <input 
          style= {{ background: "", borderRadius: "19px", padding: "5", margin: "10"}}
          type= "button"
          value="Salvar"
          onClick={ () => Salvar()}
          
      />
      
        Atualização: {nome} 
        <div></div>
        {telefone}
      
    
    
    </div>
  )
}

export default Informaçao