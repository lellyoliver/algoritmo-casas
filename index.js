/**
 * v.0.0.1
 * Creator: Lelly Oliver
 * Co-creator: Matheus Cavalcante -> https://github.com/cavalcantemat
 */
/********************************************************************/

/** caixa de texto */

function nameLead(nameValue) {
    const nameVal = (nameValue) => {
        return (
            `
                                <div class="col">
                                    <h3>${nameValue}, selecione o que mais combina com você: </h3>
                                </div>
                                    `
        )

    }
    const nameAdd = document.getElementById('data-name')
    nameAdd.innerHTML = nameVal(nameValue)

}

/********************************************************************/

/**botões*/
function startBtn() {
    const start = document.getElementById('start')
    const leadBox = document.getElementById('name-lead')
    start.classList.add('d-none')
    leadBox.classList.remove('d-none')
}

function nextBtn() {
    const nameLead = document.getElementById("nameLead")
    const nameValue = nameLead.value
    if (nameValue != "") {
        //buttons ~ divs
        const finish = document.getElementById('finish')
        const checks = document.getElementById('checks')
        const divName = document.getElementById('name-lead')
        const homeTxt = document.getElementById('home-lead')

        //remove
        finish.classList.remove("d-none")
        checks.classList.remove("d-none")

        //insere
        divName.remove()
        homeTxt.remove()

        //adicionar o nome na proxima "pagina"
        this.nameLead(nameValue)

    } else {
        nameLead.classList.add("is-invalid")
        nameLead.focus()
    }
}

function finishBtn() {
    //pega a checkbox
    const checkbox = document.querySelectorAll("input[type='checkbox']")
    let selects = []
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selects.push(checkbox[i].value)
        }
    }
    if (selects == "") {
        //valida se é vazio
        validButton(selects)

    } else {
        let firstItems = selects.slice(0, 4);

        perfil(firstItems);

        // const showMoreBtn = document.querySelector('.products-btn')
        // let currentItems = 0
        // const displayNextFour = () => {
        //     perfil(selects.slice(currentItems, currentItems + 4))
        //     // Display next 4 items until their amount exceeds 
        //     // the array length 
        //     if (!(currentItems + 4 > selects.length)) {
        //         currentItems += 4
        //     }
        //     // Remove event listener from 'Show more' button and
        //     // hide it after all items from the array are displayed
        //     if (currentItems === selects.length) {
        //         showMoreBtn.removeEventListener('click', displayNextFour)
        //         showMoreBtn.style.display = 'none'
        //     }
        // };

        // displayNextFour();

        // showMoreBtn.addEventListener('click', displayNextFour);


        //alteração tamanho da height
        const containerHead = document.querySelector('.container-head')
        containerHead.style.height = "100%";

        const avisoId = document.getElementById('data-aviso')
        avisoId.classList.add('d-none')

        //remover a box
        document.querySelector(".box-lead").remove()

    }
}


/********************************************************************/

/**validações*/

function hideToCheckbox(checkbox) {
    const hideCheck = document.getElementById("checks")
    const hidebtn = document.getElementById("finish")
    const callout = document.querySelector('.callout')

    if (checkbox) {
        hideCheck.remove()
        hidebtn.remove()
        callout.remove()
    }
}

function validInput() {
    const nameLead = document.getElementById("nameLead")
    const nameValue = nameLead.value
    if (nameValue == "") {
        nameLead.classList.add("is-invalid")
        console.log("clicado")
    } else {
        nameLead.classList.remove("is-invalid")
        nameLead.classList.add("is-valid")
    }
}

function validButton(select) {
    const toasts = (select) => {
        return (
            `
            <div class="alert alert-danger" role="alert">
               <b>Aviso!</b> Selecione uma das checkbox acima.
            </div>

                                    `
        )

    }
    const toastAdd = document.getElementById('data-aviso')
    toastAdd.innerHTML = toasts(select)
}



/********************************************************************/

/**function principal com a request json*/

async function loadHouse() {
    const response = await fetch("https://lellyoliver.github.io/algoritmo-casas/path/casas.json", {
        method: 'GET',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => { return response.json() })
        .catch(error => { console.error(error) })

    return response
}

/**function de recebimento da json */

function perfil(checkbox) {
    loadHouse().then((casas) => {
        const listComponent = (casas) => {

            //cria um array
            return casas.map((item) => {
                let tag = item.tag;
                let counter = 0
                return tag.map((element) => {
                    if (checkbox.includes(element) && counter == 0) {
                        counter++
                        return (
                            `
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="${item.urlImage}" class="card-img-top" alt="${item.title}">
                                    <div class="card-body">
                                        <span class="badge bg-primary mb-2">${item.category}</span>
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.adress}</p>
                                        <p class="card-text mt-4 fw-bolder fs-6">${item.price}</p>
                                        <a href="${item.urlLink}" role="submit" class="btn btn-primary btn-sm col-12" id="view-more">Ver mais</a>

                                    </div>
                                    <div class="card-footer">
                                        <div class="divisor divisor d-flex justify-content-center">
                                            ${pushItems("room", item.room, "bed-individual", "quarto")}
                                            ${pushItems("suite", item.suite, "bed-front", "suíte")}
                                            ${pushItems("bathroom", item.bathroom, "bath", "banheiro")}
                                            ${pushItems("garage", item.garage, "garage-car", "carro")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                                `
                        )

                    }


                }).join('')
            }).join('')
        }
        const dataList = document.getElementById('data-list')
        dataList.innerHTML = listComponent(casas)
    })
    return { checkbox }
}

function pushItems(id, placeHouse, img, placeName) {
    const placeAdd = `<small class="text-muted me-3" id="${id}"><img src="svg/${img}.svg" width="15" class="me-2 filter-svg" />${placeHouse} ${placeName}${placeHouse > 1 ? "s" : ""}</small>`

    if (placeHouse > 0) {
        return placeAdd
    } else {
        return ""
    }

}