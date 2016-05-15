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
    var blank = '';
    var hashtag = '';
    for(var i = 1; i <= n ; i++){
        blank = Array(n-i+1).join(' ');
        hashtag = Array(i+1).join('#');
        console.log(blank + hashtag);
    }

}