function attachEventsListeners() {
    let btn = document.getElementById('convert');

    btn.addEventListener('click', convert);

    function convert(e) {
        let inputValue = document.getElementById('inputDistance').value;
        let output = document.getElementById('outputDistance');
        let convertToMeters = 0;

        let inputSelect = document.getElementById('inputUnits');
        let unitToConvertFrom = inputSelect.options[inputSelect.selectedIndex].text;

        let outputSelect = document.getElementById('outputUnits');
        let unitToConvertTo = outputSelect.options[outputSelect.selectedIndex].text;

        switch(unitToConvertFrom){
            case "Kilometers": convertToMeters = inputValue * 1000;
                break;
            case "Meters": convertToMeters = inputValue;
                break;
            case "Centimeters": convertToMeters = inputValue * 0.01;
                break;
            case "Millimeters": convertToMeters = inputValue * 0.001;
                break;
            case "Miles": convertToMeters = inputValue * 1609.34;
                break;
            case "Yards": convertToMeters = inputValue * 0.9144;
                break;
            case "Feet": convertToMeters = inputValue * 0.3048;
                break;
            case "Inches": convertToMeters = inputValue * 0.0254;
                break;
        };

        switch(unitToConvertTo){
            case "Kilometers": output.value = convertToMeters / 1000;
                break;
            case "Meters": output.value = convertToMeters;
                break;
            case "Centimeters": output.value = convertToMeters / 0.01;
                break;
            case "Millimeters": output.value = convertToMeters / 0.001;
                break;
            case "Miles": output.value = convertToMeters / 1609.34;
                break;
            case "Yards": output.value = convertToMeters / 0.9144;
                break;
            case "Feet": output.value = convertToMeters / 0.3048;
                break;
            case "Inches": output.value = convertToMeters / 0.0254;
                break;
        };
    };
}