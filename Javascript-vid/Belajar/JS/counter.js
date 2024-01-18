let a=0;

naik.onclick = function () {
    a++;
    document.querySelector("h1").innerHTML=a;
}

turun.onclick = function () {
    if (a>0) {
        a--;
    document.querySelector("h1").innerHTML=a;
    }
    
}

{/* <input type="submit" value="count up" id="naik">
   <h1>0</h1>
   <input type="submit" value="count down" id="turun">
   */}