function Szamol(){
    let k = parseInt(document.getElementById("kill").value);
    let d = parseInt(document.getElementById("death").value);
    let a = parseInt(document.getElementById("assist").value);
    let tf = parseInt(document.getElementById("topfrag").value);
    let f = parseInt(document.getElementById("frag").value);
    let ossz = a+k-d+(k-tf+5)-(f-1)
    if (k < 10)
        document.getElementById("kimenet").innerText = "Jack Fitness"
    else
    {
        if (ossz > 0)
            document.getElementById("kimenet").innerText = "Jó voltál"
        else
            document.getElementById("kimenet").innerText = "Van hova fejlődni"   
    }
}