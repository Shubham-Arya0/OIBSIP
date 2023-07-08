function convertTemperature() {
    var temperature = document.getElementById("temperatureInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var result = "";

    if (fromUnit === toUnit) {
        result = temperature + " " + toUnit;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9 / 5) + 32 + " " + "\u00B0F";
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = parseFloat(temperature) + 273.15 + " " + "\u00B0K";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5 / 9 + " " + "\u00B0C";
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (parseFloat(temperature) + 459.67) * 5 / 9 + " " + "\u00B0K";
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15 + " " + "\u00B0C";
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperature * 9 / 5) - 459.67 + " " + "\u00B0F";
    }

    document.getElementById("resultText").textContent = result;
}