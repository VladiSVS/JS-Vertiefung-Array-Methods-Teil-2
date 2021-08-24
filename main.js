let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(languages)

let sort = languages.sort()
console.log(sort)

let revers = languages.reverse()
console.log(revers)

let numArray = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray)

let ascending = numArray.sort((a, b) => a - b)
console.log(ascending)

let descending = numArray.sort((a, b) => b - a)
console.log(descending)

function reverse(str) {
    let result = str.split("").reverse().join("")
    console.log(result)
}

reverse("Vladi")
reverse("Sergio")
reverse("Hannah")
reverse("Hello World")

function meinText(arr) {
    option1 = arr.join()
    option2 = arr.join("")
    option3 = arr.join(" ")
    option4 = arr.join("+")
    option5 = arr.join(" + ")
    console.log(option1)
    console.log(option2)
    console.log(option3)
    console.log(option4)
    console.log(option5)
}

meinText(["Hello", "World"])
meinText(["Anass", "Elaine", "Eric", "Georg"])
meinText(["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"])