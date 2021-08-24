console.log("morning")

// concat:
let arr1 = [1, 4, 5]
let arr2 = [5, 7, 9]
let arr3 = arr1.concat(arr2)
console.log(arr3)

// reverse 
arr1.reverse()
console.log(arr1)

// split & join 
// split: string method
// string => Array
let str = "hello world; Its a sunny day"

//split(""): between every letter
//split(" "): between every space
// split (";"): between every semicolom
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split(";"))

// join: array => string
// let hello = ["Guten", " ", "morgen"]
// console.log(hello.join("")

//map: array => array
//input:[2,4,6] => [2*2,4*2,6*2]
//output: [4,8,12]
arr1 = [2, 4, 6]
let newArr1 = arr1.map(function (elt) {
    return elt * 2
})
let newArr2 = arr1.map((elt) => {
    return elt * 2
})
let newArr3 = arr1.map(elt => elt * 2)
console.log(newArr1)
console.log(newArr2)
console.log(newArr3)

region = ["nrw", "berlin", "hamburg"]
console.log(region)

let newRegArr = region.map(function (a) {
    return a.toUpperCase()
})
console.log(newRegArr)

let neweRegArr2 = region.map(function (a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
})
console.log(neweRegArr2)

//filter 
// array => Array
// input: [2,5,-3,-2,33,-3]
// output: [2,5,33]

let numbers = [2, 5, -3, -2, 33, -3]
let filterNumbers = numbers.filter(elt => elt > 0)
console.log(filterNumbers)

// input: [2,5,56,998,42,33,76,99]
// output: [2,56,998,42,76]
let num = [2, 5, 56, 998, 42, 33, 76, 99]
let filterNum = num.filter(elt => elt != 33 && elt != 99)
console.log(filterNum)

let countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

function checkCountry(nameCountry) {
    let check = countryList.filter(elt => elt == nameCountry)
    check.length > 0 ? console.log(check) : console.log(false)
}

checkCountry("Uruguay")
checkCountry("asdasdA")
checkCountry("Russia")
checkCountry("Gothma")

function filterWithFirstLetter(letter) {
    console.log(typeof (letter))
    if (typeof (letter) === typeof (letter)) {
        let filteredCountries = countryList.filter(elt => elt.charArt(0) == letter.toUpperCase())
        console.log(filteredCountries)
    } else {
        console.log("please give a letter")
    }
}

filterWithFirstLetter("a")
filterWithFirstLetter("m")
filterWithFirstLetter("G")
filterWithFirstLetter(2)

// forEach
// array => element of the array 
// input: [23,45,56]
// 23
// 45
// 56

let randomNumbers2 = [23, 45, 56, true, 'some text', { username: "superman" },
    function hi() { console.log("hi") }]
randomNumbers2.forEach(elt => console.log(elt))

let navigation = ['home', 'about', 'contact']

const nav = document.getElementById('nav')
const galleryDiv = document.getElementById('gallery')

navigation.forEach(elt => {
    nav.innerHTML += `<li>${elt}</li>`
})

let gallery = ['https://unsplash.it/200', 'https://unsplash.it/250', 'https://unsplash.it/220']

gallery.forEach(element => {
    galleryDiv.innerHTML = `<img src=${element} alt="">`
})

// sort

let numbers1 = [8, 4, 1, 6]
console.log(numbers1.sort())

// reduce (seif learning)
// some (self learning)

let numbers3 = numbera3.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
})

console.log(numbers3)