let moneycar = 2000;
let byCar = (money) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= moneycar) {
                resolve("by car ");
            } else {
                reject(new Error("not enough")
                )
            }
        }, 1000)
    })
}
byCar(1500)
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log("error");
    })