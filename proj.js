function calculateFare() {

    var distance = document.getElementById("distance").value;
    var type = document.getElementById("discount").value;

    if (distance == "" || distance <= 0) {
        document.getElementById("fareOutput").innerHTML = "Enter a valid distance.";
        return;
    }

    var fare = 13 + (distance * 2);

    if (type == "student" || type == "senior" || type == "pwd") {
        fare = fare * 0.8;
    }

    fare = fare.toFixed(2);

    document.getElementById("fareOutput").innerHTML = "Fare: ₱" + fare;
}
