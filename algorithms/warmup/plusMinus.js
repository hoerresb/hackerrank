process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var positive = 0;
    var negative = 0;
    var zero = 0;

    for(var i = 0 ; i < arr.length; i++){
        if( arr[i] < 0){
            negative += 1;
        }else if( arr[i] > 0){
            positive += 1;
        }else {
            zero += 1;
        }
    }

    console.log(positive / n);
    console.log(negative / n);
    console.log(zero/n);



}