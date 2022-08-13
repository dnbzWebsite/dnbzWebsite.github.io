function displayModeSwitch(id){
    var displayMode = document.getElementById(id).style.display;

    if (displayMode == 'block'){
        document.getElementById(id).style.display = 'none';
    }else{
        document.getElementById(id).style.display = 'block';
    }
}