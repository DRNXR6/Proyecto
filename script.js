
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");

// const btnClass = document.getElementsByClassName("btn");


const btnReset = document.getElementById("btnReset");

const mensaje = document.getElementById("mensaje");


let listaBotonesDisponibles = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8]

let listaBotonesUsados = [];


let numIniciales = [0,1,2,3,4,5,6,7,8]
let numDisponibles = []


function maquina (numRandom){
    
    // console.log(listaBotonesDisponibles);
    
    
    for (let index = 0; index < listaBotonesDisponibles.length; index++) {

        const element = listaBotonesDisponibles[index];
            
        console.log(element);
        
        
        if(index === numRandom) {

            element.textContent="O";
        }

        
        // const element = listaBotonesDisponibles[index];
        // console.log(element);
        // console.log(index);
        
        
        
        // console.log(listaBotonesDisponibles[num]);
        // if(index == numRandom) {

        //     if(listaBotonesDisponibles[numRandom].textContent.trim() == "") {

        //         console.log("Paso");
                
        //         listaBotonesDisponibles[numRandom].textContent="O";
        //     }
            
        //     else {
        //         listaBotonesDisponibles[numRandom].textContent ="H"
        //     }
        // }

        // if (btn0.textContent.trim() === '') {

        //     btn0.textContent="X";

        //     maquina (0,numRandom); 

        // } else {
        //     alert("Elije otro campo")
        // }


    }

}


btn0.addEventListener("click", function () {


    // numIniciales = numIniciales.filter(num => num !=0)

    
    let NUM = numIniciales.splice(0, 1)
    numDisponibles.push(NUM)
    

    let numRandom = numDisponibles[Math.floor(Math.random() * numDisponibles.length)];

    console.log("numero: " + numRandom);


    if (btn0.textContent.trim() === '') {

        btn0.textContent="X";

        let BTN = listaBotonesDisponibles.splice(0, 1)
        listaBotonesUsados.push(BTN)


        maquina (numRandom);


        console.log(listaBotonesDisponibles);

        console.log(listaBotonesUsados);

    } else {
        alert("Intente de nuevo")
    }

});



btn1.addEventListener("click", function () {

    id = 1
    numIniciales = numIniciales.filter(num => num !=id)

    let numRandom = numIniciales[Math.floor(Math.random() * numIniciales.length)];


    console.log("numero: " + numRandom);


    if (btn1.textContent.trim() === '') {

        btn1.textContent="X";

        let BTN = listaBotonesDisponibles.splice(id, 1)
        listaBotonesUsados.push(BTN)


        maquina (numRandom);


        console.log(listaBotonesDisponibles);

        console.log(listaBotonesUsados);

    } else {
        alert("Intente de nuevo")
    }

});








// btn2.addEventListener("click", function () {

//     if(btn2 =="") {


//     } else {
//         btn2.textContent="X";

//         maquina (2);    }
// });


// btn3.addEventListener("click", function () {

//     if(btn3 =="") {


//     } else {
//         btn3.textContent="X";

//         maquina (3);    }
// });


// btn4.addEventListener("click", function () {

//     if(btn4 =="") {


//     } else {
//         btn4.textContent="X";

//         maquina (4);    }
// });


// btn5.addEventListener("click", function () {

//     if(btn5 =="") {


//     } else {
//         btn5.textContent="X";

//         maquina (8);    }
// });


// btn6.addEventListener("click", function () {

//     if(btn6 =="") {


//     } else {
//         btn6.textContent="X";

//         maquina (6);    }
// });


// btn7.addEventListener("click", function () {

//     if(btn7 =="") {


//     } else {
//         btn7.textContent="X";

//         maquina (7);    }
// });






// btn8.addEventListener("click", function () {

//     if(btn8 =="") {


//     } else {
//         btn8.textContent="X";

//         maquina (8);    }
// });

