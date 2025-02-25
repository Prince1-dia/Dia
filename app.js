function expand(){
    document.getElementById(`menu`).style.display = `block`;
    document.getElementById(`opn`).style.display = `none`;
    document.getElementById(`cls`).style.display = `inline`;
}
function collapse(){
    document.getElementById(`menu`).style.display = `none`;
    document.getElementById(`opn`).style.display = `inline`;
    document.getElementById(`cls`).style.display = `none`
}

// Add to Cart

let cart = 0; 

// function add(){
//     let quantity = parseFloat(document.getElementById('value').value);

//     cart = cart + quantity;

//     document.getElementById('cartDisplay').innerText = cart;


function add(changeObject){
    if(changeObject = `One`){
        let quantity = parseFloat(document.getElementById(`value`).value);

        cart = cart + quantity;

        document.getElementById(`cartDisplay`).innerText = cart;
    } else if(changeObject === `Two`){
        let quantity = parseFloat(document.getElementById(`value2`).value);

        cart += quantity;
        console.log(cart)

        document.getElementById(`cartDisplay`).innerText = cart;

    }else if(changeObject === `Three`){
        let quantity = parseFloat(document.getElementById(`value3`).value);

        cart += quantity;

        document.getElementById(`cartDisplay`).innerText = cart;
    }else if(changeObject === `Four`){
        let quantity = parseFloat(document.getElementById(`value4`).value);

        cart += quantity;

        document.getElementById(`cartDisplay`).innerText = cart;

    }else if(changeObject === `Five`){
        let quantity = parseFloat(document.getElementById(`value`).value);

        cart += quantity;

        document.getElementById(`cartDisplay`).innerText = cart;

    }else if(changeObject === `Six`){
        let quantity = parseFloat(document.getElementById(`value6`).value);

        cart += quantity;

        document.getElementById(`cartDisplay`).innerText = cart;

}
}