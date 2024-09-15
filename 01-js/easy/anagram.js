/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // If the lengths are not the same, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert both strings to lowercase to make the comparison case-insensitive
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // If the sorted strings are equal, they are anagrams
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

