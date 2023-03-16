let onMyBirthDay = (iskayosick) => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (!iskayosick) {
                resolve("i have " + 2 + " cake ");
            } else {
                reject(new Error("nothing"));
            }
        }, 3000)
    })
}

onMyBirthDay(false)
    .then((data) => {
       console.log(data);

    })
.catch((data)=>{
    console.log(data);
})