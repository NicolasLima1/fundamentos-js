function triangulos(a, b, c) {

    if (a == b && b == c) {

        console.log("Triangulo Equilátero")

    } else if (a == b || a == c || b == c) {

        console.log("Triangulo Isoceles")

    } else {
        console.log("Triangulo Escaleno")
    }
}


triangulos(2, 2, 2)

triangulos(3, 2, 2)

triangulos(3, 2, 4)