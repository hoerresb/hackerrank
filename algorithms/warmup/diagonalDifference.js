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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
        a[a_i] = readLine().split(' ');
        a[a_i] = a[a_i].map(Number);

    }
    var diagonal1 = 0;
    var diagonal2 = 0;
    for(var i = 0; i < n;i++){
        diagonal1 += a[i][i];
        diagonal2 += a[i][n-i-1];
    }

    console.log(Math.abs(diagonal1 - diagonal2));


}