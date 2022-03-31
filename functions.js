function open(event) {
    id = event.target.id;
    let eid = "e"+id;
    console.log(eid);
    console.log(document.getElementById(eid));
    console.log(document.getElementById(eid).value);
    // document.getElementsByClassName("explanation").style.display = "inline";
    document.getElementById("modal-p").innerHTML = "<p class = 'description'> " + document.getElementById(eid).textContent + " </p>";
    console.log(id);
    document.getElementById('right').style.display = 'inline';
    document.getElementById('left').style.display = 'inline';
    let img = document.getElementsByClassName("img");
    if(id == 1){
        document.getElementById('left').style.display = 'none';
    }
    if(id == 9){
        document.getElementById('right').style.display = 'none';
    }
    document.getElementById("largeimg").src = img[id-1].getAttribute("src");
    document.getElementById('modal-container').style.display = 'inline';
    document.getElementById('right').addEventListener("click", nextImg);
    document.getElementById('left').addEventListener("click", prevImg);
}

function nextImg() {
        id++;
        document.getElementById("modal-p").innerHTML = "<p class = 'description'> " + document.getElementById(eid).textContent + " </p>";
        let eid = "e"+id;
        console.log("next img: " + id);
        let img = document.getElementsByClassName("img");
        document.getElementById("largeimg").src = img[id-1].getAttribute("src");
        document.getElementById('right').style.display = 'inline';

        if(id == 9) {
            document.getElementById('right').style.display = 'none';
        }
        if(id != 9){
            document.getElementById('left').style.display = 'inline';
        }
        
}

function prevImg() {
        id--;
        console.log("prev img: " + id);
        let img = document.getElementsByClassName("img");
        document.getElementById("largeimg").src = img[id-1].getAttribute("src");
        if(id == 1) {
            document.getElementById('left').style.display = 'none';
        }
        if(id != 1){
            document.getElementById('right').style.display = 'inline';
        }
}

function close() {
    document.getElementById('modal-container').style.display = 'none';
}

function addId(){
    for(let i = 1; i <= 9; i++){
        document.getElementById(i.toString()).addEventListener("click", open);
    }
    document.getElementById('modal-container').style.display = 'none';

}

document.getElementById("close").addEventListener("click", close);

addId();