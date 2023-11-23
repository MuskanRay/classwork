function addTip() {
    var tipInput = document.getElementById("tipInput").value;
    if (tipInput !== "") {
        var tipList = document.getElementById("tipList");
        var newTipItem = document.createElement("li");
        newTipItem.appendChild(document.createTextNode(tipInput));
        tipList.appendChild(newTipItem);
        document.getElementById("tipForm").reset();
    } else {
        alert("Please enter a tip before submitting.");
    }
}
