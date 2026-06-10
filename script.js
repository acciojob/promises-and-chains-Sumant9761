//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    if (age === "" || name === "") {
        alert("Please enter valid details");
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(age) > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    promise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});