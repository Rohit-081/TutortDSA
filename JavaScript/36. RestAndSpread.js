function myBio1(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

console.log(
  myBio1("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male")
);

function myBio(firstName, lastName, company) {
  return `${firstName} ${lastName} runs ${company}`;
}

console.log(myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]));