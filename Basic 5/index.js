let src = {
    length : 50,
    breadth : 30,
}

// Object Cloning #1
// let dest = {...src}

// Object Cn
// let dest = Object.assign({}, src)

// Object Cloning #3 (Iteration)
let dest = {}

for(let key in src) {
    dest[key] = src[key]
}
console.log(dest);