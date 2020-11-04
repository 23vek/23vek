console.log("hello"); {
    let tmp;
  
    for (let i = index.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (index[j] > index[j+1]) {
                tmp = index[j];
                index[j] = index[j+1];
                index[j+1] = tmp;
            }
        }
    }
    return index;
}
