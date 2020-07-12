function showFeedbackModal() {
    document.getElementById("feedback").classList.remove("visually-hidden");
}

function hideFeedbackForm(){
    var elem = document.getElementById("feedback").elements;
    var len = elem.length;
    for (var i=0; i<len; i++) {
        if(elem[i].tagName == "INPUT"){
            elem[i].value = "";
        }
    }
    document.getElementById("feedback").classList.add("visually-hidden");
}