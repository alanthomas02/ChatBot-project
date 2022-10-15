function talk() {
    let know = {
        "hello": "Hello!",
        "How are you": "Good :)",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    let user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}
