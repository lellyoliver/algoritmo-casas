/**
 * Fase Inicial quando eu aperto para adicionar o nome
 */
const divStart = $("#divStart")
const btnStart = $("#btnStart")
const btnNext = $("#btnNext")
const divContinue = $(".divContinue")
const inputText = $("#inputText")

btnStart.on('click', () => {
    divStart.remove()
    $(".divContinue").append(`
        <div class="divNext">
            <h1 class="mb-3">Adicione seu nome a seguir para continuar</h1>
            <div class="mb-3 next">
                <input type="text" id="inputText" class="form-control" placeholder="Preencha aqui" aria-describedby="helpId">
            </div>
            <button type="button" class="btn btn-primary" onclick="divNexted()" id="btnNext">Button</button>
        </div>
      ` );
})
function divNexted() {
if($("#inputText").val() == ""){
    $("#inputText").addClass("is-invalid").focus()
    $(".next").append(`
        <small id="helpId" class="invalid-feedback">Help text</small>
      ` );
}  

    
}







//<small id="helpId" class="text-muted">Help text</small>