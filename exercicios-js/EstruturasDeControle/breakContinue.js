const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5) {
        break // for , while , switch
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if (y == 5) {
        continue // continue so faz sentido em estruturas de repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

// atribuiu um nome pra esse rotulo
externo: for (let a in nums){
    for (let b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('fim!')