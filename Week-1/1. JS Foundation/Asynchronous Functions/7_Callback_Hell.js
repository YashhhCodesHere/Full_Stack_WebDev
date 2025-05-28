setTimeout(() => {
    console.log("Hi!");
    setTimeout(() => {
        console.log("Hello!");
        setTimeout(() => {
            console.log("Hello there!");
        }, 5000);
    }, 3000);
},1000);