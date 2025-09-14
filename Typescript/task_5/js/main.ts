// Interfaces avec propriétés de marquage (branding)
export interface MajorCredits {
  credits: number;
  _majorBrand: "MajorCredits"; // propriété unique pour distinguer
}

export interface MinorCredits {
  credits: number;
  _minorBrand: "MinorCredits"; // propriété unique pour distinguer
}

// Fonction qui additionne deux MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "MajorCredits",
  };
}

// Fonction qui additionne deux MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits",
  };
}

// exemple test d'utilisation (peuvent etre delete)
const major1: MajorCredits = { credits: 30, _majorBrand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, _majorBrand: "MajorCredits" };
console.log("Sum Major:", sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 10, _minorBrand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, _minorBrand: "MinorCredits" };
console.log("Sum Minor:", sumMinorCredits(minor1, minor2));
