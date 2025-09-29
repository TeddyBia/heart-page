function startReadingData() {
    let dataFloatPath = 'nhom6/VR1';
    let dataIntPath = 'nhom6/VR2';
    const databaseFloat = database.ref(dataFloatPath); 
    const databaseInt = database.ref(dataIntPath); 

    databaseFloat.on('value', (snapshot) => { 
        let floatReading = snapshot.val(); 
        console.log("Float:", floatReading); 
        document.getElementById("reading-float").innerHTML = floatReading;
    });

    databaseInt.on('value', (snapshot) => { 
        let intReading = snapshot.val(); 
        console.log("Int:", intReading); 
        document.getElementById("reading-int").innerHTML = intReading; 
    });
}

function writeLedXanh() {
    let dataPath = 'nhom6Write/ledXanh';
    const val = document.getElementById("ledXanh-switch").checked;
    database.ref(dataPath).set(val);
    console.log("LED Xanh:", val);
}

function writeLedVang() {
    let dataPath = 'nhom6Write/ledVang';
    const val = parseInt(document.getElementById("ledVang-slider").value);
    database.ref(dataPath).set(val);
    console.log("LED Vàng:", val);
}

function updateSliderValue(val) {
    document.getElementById("slider-value").innerText = val;
}

