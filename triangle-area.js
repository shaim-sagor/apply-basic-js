//triangle area when base and height are given

function triangleArea1(base, height) {
    let area = 0;
    area = (base * height) / 2;
    return area;

}

console.log('Triangle1 area is ', triangleArea1(3, 5));

// when three side value are known

function triangleArea2(line1, line2, line3) {

    let semiPerimeter = (line1 + line2 + line3) / 2;
    console.log('semiPerimeter is', semiPerimeter);
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - line1) * (semiPerimeter - line2) * (semiPerimeter - line3));

    return area;

}




console.log('triangle2 area is ', triangleArea2(4, 6, 8));