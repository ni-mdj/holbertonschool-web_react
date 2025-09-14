// Fonction qui additionne deux MajorCredits
export function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: "MajorCredits",
    };
}
// Fonction qui additionne deux MinorCredits
export function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: "MinorCredits",
    };
}
// exemple test d'utilisation (peuvent etre delete)
var major1 = { credits: 30, _majorBrand: "MajorCredits" };
var major2 = { credits: 20, _majorBrand: "MajorCredits" };
console.log("Sum Major:", sumMajorCredits(major1, major2));
var minor1 = { credits: 10, _minorBrand: "MinorCredits" };
var minor2 = { credits: 5, _minorBrand: "MinorCredits" };
console.log("Sum Minor:", sumMinorCredits(minor1, minor2));
//# sourceMappingURL=main.js.map