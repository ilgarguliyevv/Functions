// 21

// function first(x, y) {
//   return x + y;
// }

// function second(x, y) {
//   return x - y;
// }

// function third(x, y) {
//   return x * y;
// }

// function four(x, y) {
//   return x / y;
// }

// 22
// function calculate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       if (num2 === 0) {
//         return "Error:";
//       }
//       return num1 / num2;
//     default:
//       return "Operator!";
//   }
// }
// console.log(calculate(5, 3, "+"));
// console.log(calculate(10, 4, "-"));
// console.log(calculate(7, 2, "*"));
// console.log(calculate(15, 3, "/"));

// 23
// function CountryNames() {
//   return [
//     "Afghanistan",
//     "Albania",
//     "Algeria",
//     "Andorra",
//     "Angola",
//     "Antigua and Barbuda",
//     "Argentina",
//     "Australia",
//     "Austria",
//     "Azerbaijan",
//     "Bahamas",
//     "Bahrain",
//     "Bangladesh",
//     "Barbados",
//     "Belarus",
//     "Belgium",
//     "Belize",
//   ];
// }

// const countries = CountryNames();
// console.log(countries);

// 24

// function countCountriesPerLetter(countries) {
//   const counts = {};
//   countries.forEach((country) => {
//     const name = country.toUpperCase();
//     for (let i = 0; i < name.length; i++) {
//       const letter = name[i];
//       if (letter in counts) {
//         counts[letter]++;
//       } else {
//         counts[letter] = 1;
//       }
//     }
//   });

//   return counts;
// }
// const countries = [
//   "Australia",
//   "Brazil",
//   "Canada",
//   "Denmark",
//   "Egypt",
//   "France",
//   "Germany",
// ];
// console.log(countCountriesPerLetter(countries));

// 25

// function countryWithMostCities(countryCities) {
//   let maxCities = 0;
//   let countryWithMaxCities = "";
//   for (const [country, cities] of Object.entries(countryCities)) {
//     const cityCount = cities.length;
//     if (cityCount > maxCities) {
//       maxCities = cityCount;
//       countryWithMaxCities = country;
//     }
//   }
//   return countryWithMaxCities;
// }
// const countryCitiesData = {
//   "United States": [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Phoenix",
//     "Philadelphia",
//     "San Antonio",
//     "San Diego",
//     "Dallas",
//     "San Jose",
//   ],
//   India: [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Hyderabad",
//     "Ahmedabad",
//     "Chennai",
//     "Kolkata",
//     "Surat",
//     "Pune",
//     "Jaipur",
//   ],
//   China: [
//     "Shanghai",
//     "Beijing",
//     "Tianjin",
//     "Guangzhou",
//     "Shenzhen",
//     "Wuhan",
//     "Dongguan",
//     "Chongqing",
//     "Chengdu",
//     "Nanjing",
//   ],
// };

// const countryWithMost = countryWithMostCities(countryCitiesData);
// console.log("Country with the most cities:", countryWithMost);

// 26

// function citiesOfCountryWithLongestName(countryCities) {
//   let longestCountryName = "";
//   let longestCountryCities = [];

//   for (const country in countryCities) {
//     if (country.length > longestCountryName.length) {
//       longestCountryName = country;
//       longestCountryCities = countryCities[country];
//     }
//   }

//   return longestCountryCities;
// }
// const countryCitiesData = {
//   "United States of America": [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Phoenix",
//   ],
//   "United Kingdom": [
//     "London",
//     "Birmingham",
//     "Manchester",
//     "Glasgow",
//     "Liverpool",
//     "Leeds",
//   ],
//   "South Africa": [
//     "Johannesburg",
//     "Cape Town",
//     "Durban",
//     "Pretoria",
//     "Port Elizabeth",
//   ],
//   "New Zealand": [
//     "Auckland",
//     "Wellington",
//     "Christchurch",
//     "Hamilton",
//     "Napier-Hastings",
//   ],
// };
// const citiesOfLongestCountry =
//   citiesOfCountryWithLongestName(countryCitiesData);
// console.log(
//   "Cities of the country with the longest name:",
//   citiesOfLongestCountry
// );

// 27

// function cityNumbersByCountry(countryCities) {
//   const cityCounts = {};

//   for (const country in countryCities) {
//     cityCounts[country] = countryCities[country].length;
//   }

//   return cityCounts;
// }

// // Example usage:
// const countryCitiesData = {
//   Azerbaijan: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran"],
//   Turkey: ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep"],
//   "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
//   India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai"],
// };

// const cityNumbers = cityNumbersByCountry(countryCitiesData);
// console.log("City numbers by country:", cityNumbers);

// 28

// function Elements(arr) {
//   var squaredArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     squaredArr.push(arr[i] * arr[i]);
//   }
//   return squaredArr;
// }
// var array = [1, 2, 3, 4, 5];
// var resultArray = Elements(array);
// console.log("Original Array:", array);
// console.log("Squared Array:", resultArray);

// 29

// function sumOfPositive(arr) {
//   let sum = 0;
//   let hasPositive = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//       hasPositive = true;
//     }
//   }
//   if (hasPositive) {
//     return sum;
//   } else {
//     return 0;
//   }
// }
// const array1 = [-1, -2, -3];
// const array2 = [-1, 2, 3, -4];
// const array3 = [1, 2, 3, 4];
// console.log(sumOfPositive(array1));
// console.log(sumOfPositive(array2));
// console.log(sumOfPositive(array3));

// 30

// function calculateMedianAndMean(arr) {
//   arr.sort((a, b) => a - b);
//   const sum = arr.reduce((acc, val) => acc + val, 0);
//   const mean = sum / arr.length;
//   let median;
//   if (arr.length % 2 === 0) {
//     median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
//   } else {
//     median = arr[Math.floor(arr.length / 2)];
//   }
//   return {
//     median: median,
//     mean: mean,
//   };
// }
// const array = [4, 1, 7, 3, 9, 2, 5];
// const result = calculateMedianAndMean(array);
// console.log(result);

// 31

// function extractCapitalLetters(sentence) {
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] >= "A" && sentence[i] <= "Z") {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// const sentence = "My name is Ilgar";
// console.log(extractCapitalLetters(sentence));

// 32

// function abbreviateWords(sentence) {
//   const words = sentence.split(" ");
//   const abbreviatedWords = words.map((word) => {
//     if (word.length < 4) {
//       return word;
//     } else {
//       const abbreviation = word[0] + (word.length - 2) + word[word.length - 1];
//       return abbreviation;
//     }
//   });
//   const abbreviatedSentence = abbreviatedWords.join(" ");
//   return abbreviatedSentence;
// }
// const sentence = "sacrifice glass javascript";
// console.log(abbreviateWords(sentence));

// 33

// function findAgeDifference(people) {
//   if (people.length === 0) {
//     return [];
//   }
//   let minAge = people[0].age;
//   let maxAge = people[0].age;

//   for (let i = 1; i < people.length; i++) {
//     if (people[i].age < minAge) {
//       minAge = people[i].age;
//     }
//     if (people[i].age > maxAge) {
//       maxAge = people[i].age;
//     }
//   }

//   return [minAge, maxAge, maxAge - minAge];
// }
// const people = [
//   { name: "Ilgar", age: 20 },
//   { name: "Said", age: 35 },
//   { name: "Shovgu", age: 15 },
//   { name: "Umid", age: 69 },
//   { name: "Omer", age: 42 },
// ];
// console.log(findAgeDifference(people));

// 34

// function factorial(N) {
//   if (N === 0) {
//     return 1;
//   }
//   return N * factorial(N - 1);
// }
// const N = 5;
// console.log("Factorial", N, "is", factorial(N));
