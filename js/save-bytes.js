var saveByteArray = (function () { // using: saveByteArray([sampleBytes], 'example.txt');
    var a = document.createElement("a");
    a.style = "display: none";
    document.body.appendChild(a);
    return function (data, name) {
        var blob = new Blob(data, { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());