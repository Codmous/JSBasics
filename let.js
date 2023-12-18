function example() {
    if (true) {
        let y = 20;
        console.log(y); // Outputs 20
    }
    console.log(y);
    //As let is block-scoped, there will be an error.
}
