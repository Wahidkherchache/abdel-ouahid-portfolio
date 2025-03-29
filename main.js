let year = document.getElementById("new");
year.textContent = new Date().getFullYear();
const web1 = document.getElementById("tamplate1");
const web2 = document.getElementById("tamplate2");
const web3 = document.getElementById("tamplate3");

        function gotosite(url){
            window.open(url ,"_blank") ;
        }
web1.onclick = function() {
    gotosite("https://wahidkherchache.github.io/web-two/");
}
web2.onclick = function() {
    gotosite("https://wahidkherchache.github.io/ouahid-tamplate/")
}
web3.onclick = function() {
    gotosite("https://wahidkherchache.github.io/Ouahid-web/");
}
