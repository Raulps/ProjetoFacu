pesquisa_input = document.querySelectorAll(".pesquisa");
a=0
for(i of pesquisa_input){
    pesquisa_lista = document.querySelectorAll(".lista")
    i.onkeyup=function(e){
      reg = new RegExp(this.value.toLowerCase(),"g")
      lis = pesquisa_lista[a-1]
      for(j of lis.children){
          if( !j.getAttribute("nome").match(reg) )
              j.style.display="none"
          else
              j.removeAttribute("style")
      }
  }
  a++
}

for(i of document.querySelectorAll('[search]')){
  try{
      busca(i,document.querySelector("#"+i.getAttribute('search')))
  }catch(e){}
}

function busca(input_field,div){
  input_field.onkeyup=function(e){
    for(di of div.children){
      r  = new RegExp(this.value,"g")
      if(di.getAttribute("nome").toLowerCase().match(r) != null)
        di.style.removeProperty('display')
      else
        di.style.display = "none"
    }
  }
}