function run(interval, frames) {
    var int = 1;
    function func() {
        document.body.id = "pic"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    var swap = window.setInterval(func, interval);
}
run(5000, 5); //milliseconds, frames
