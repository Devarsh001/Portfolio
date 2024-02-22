// ---------------------------- 
// Page:1

// drop files
let dropZone = document.querySelector('.drop_zone');
let fileInfo = document.getElementById('fileInfo');

// Prevent default drag behaviors
dropZone.addEventListener('dragenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('hover');
});

dropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('hover');
});

dropZone.addEventListener('dragleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('hover');
});

dropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('hover');

    // Get the dropped files
    var files = e.dataTransfer.files;

    // Clear existing file name
    fileInfo.innerHTML = '';

    // Display file names below drop zone
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fileInfo.innerHTML += file.name + '<br>';
    }
});

// Browse files
let fileInput = document.querySelector("#fileinput");
let browseBtn = document.querySelector(".browseBtn");
browseBtn.addEventListener("click", () => {
    fileInput.click();
})

// ProgressBar
let fileUpload = document.querySelector(".fileUpload");
let output = document.querySelector(".output");
let bar = document.querySelector(".bar");
let fill = document.querySelector(".fill");
let uploadFile = document.querySelector(".uploadFile");

function visible() {
    bar.style.display = "block";
}

uploadFile.addEventListener("click", () => {
    var a = 0;
    var run = setInterval(frames, 25);
    function frames() {
        a = a + 1;
        if (a == 101) {
            clearInterval(run);
            fileUpload.style.display = "none";
            output.style.display = "block";
            fileInfo.style.display = "none";
        }
        else {
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%";
            fill.style.width = a + "%";
        }
        setTimeout(function () {
            // Redirect to copyLink page
            window.location.href = "linkPage.html";
        }, 3500);
    }
})

// Page 2 ---------------------------- 

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("fileLink");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}