function  pushArray() {
    let question = +prompt("сколько массивов включить во внутрь arr" ,"");
    let arr = [];
    let sum = 0;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < question; i++){
        arr[i] = [];
        for (let j = 0; j < question; j++){
            let number = getRandomInt(1,10);
            sum += number;
            arr[i][j] = number;
        }}
    console.log(arr);
    console.log(sum);
}
pushArray();

