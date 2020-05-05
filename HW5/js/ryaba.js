const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const fields = [
    "var1",
    "var2",
    "var3",
    "var4",
    "var5",
    "var6",
    "speach",
];

function getField() {
    let obj = {};

    fields.forEach(function (item) {
        obj[item] = $("input[name=" + item + "]")[0].value;
    });

    return obj;
}

function getData(data) {
    let finalText = "";
    let obj = getField();

    data["text"].forEach(function (item) {
        for (key in obj) {
            item = item.replace("{" + key + "}", obj[key]);
        }
        finalText += item + "<br>";
    });
    $("div#result").html(finalText);
}

function handleButton(event) {
    $.getJSON(dataURL, getData);
    event.preventDefault();
}

function init() {
    $("#button-fetch").click(handleButton);
}

$(document).ready(init);
