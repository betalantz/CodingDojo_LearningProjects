function sides(literals, ...expressions) {
    const A = expressions[0]
    const P = expressions[1]
    const s1 = (P+(Math.sqrt((P**2)-16*A)))/4
    const s2 = (P-(Math.sqrt((P**2)-16*A)))/4
    return [s1, s2].sort()
}
function rectTemplateLiteral(s1, s2) {
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? x : -1);
    console.log((s2 === y) ? y : -1);
}
rectTemplateLiteral(10, 14)
rectTemplateLiteral(15, 8)