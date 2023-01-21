let searchBar = () =>{
    var searchValue = document.getElementById("search-bar");
    var items = document.getElementsByClassName("alojamento-nome");

    for(var i = 0; i < items.length; i++){
        items[i].parentNode.parentNode.style.display = "grid";
        if(!(items[i].innerHTML.toLowerCase().includes(searchValue.value.toLowerCase()))){
            items[i].parentNode.parentNode.style.display = "none";
        }
    }

}