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
    var time = readLine();

    var timesplit = time.split(':');

    var hours = parseInt(timesplit[0]);
    var minutes = timesplit[1];
    var seconds = timesplit[2].substring(0,2);
    var ampm = timesplit[2].substring(2,4);

    if(ampm == "PM"){
        if(hours != 12)
            hours+=12;
        console.log(hours + ':' + minutes + ':' +seconds);
    }else{
        if(hours == 12)
            hours = '00';
        else
            hours = '0'+hours;
        console.log(hours + ':' + minutes + ':' +seconds);
    }

}