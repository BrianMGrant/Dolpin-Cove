function check() {
    var input = document.getElementById('num').value;
    var add = 2500;
    if (input > 0) {
        result = input * add
        console.log(result)
    }
    document.getElementById('out').innerHTML = result

}