// Je gaat functies schrijven die we kunnen hergebruiken om sommige email adressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht 1 */
// Schrijf een functie genaamd getEmailDomain, die een email adres verwacht en de domeinnaam teruggeeft. Een domeinnaam is het geen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log("-----Opdracht 1-----");

function getEmailDomain(email) {
  const result = email.split("@")
  return result[1];
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een email adres verwacht. De functie checkt of het email adres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

console.log("-----Opdracht 2-----");

function typeOfEmail(email) {
  const emailArray = email.split("@");
  const domain = emailArray[1];

  if (domain === "novi-education.nl") {
    return "Student";
  } else if (domain === "novi.nl") {
    return "Medewerker";
  } else {
    return "Extern";
  }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een email adres verwacht en checkt of het email adres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een email adres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("-----Opdracht 3-----");

function checkEmailValidity(email) {
  const emailArray = email.split("");
  let result = false;
  for (let i=0; i<emailArray.length; i++) {
    if (emailArray[i] === "@") {
      result = true;
    }

    if (emailArray[i] === ",") {
      result = false;
    }
  }

  if (emailArray[emailArray.length-1] === ".") {
    result = false;
  }

  return result;
}

console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));