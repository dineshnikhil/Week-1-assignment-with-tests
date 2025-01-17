/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
	// first convert the two into the same lower case
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	// now first check wheather the two string have same lenght or not.
	if (str1.length !== str2.length) {
		return false;
	}
	// now start acctuall logic
	for (let i = 0; i < str1.length; i++) {
		if (!str2.includes(str1[i])) {
			return false;
		}
	}

	return true;
}

module.exports = isAnagram;
