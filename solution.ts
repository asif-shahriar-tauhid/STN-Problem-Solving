//Problem-1 - Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n: number): string {
  const rows: string[] = [];
  for (let i = 0; i <= n; i++) {
    rows.push("#".repeat(i));
  }

  return rows.join("\n");
};

// console.log(staircase(4));

//Problem-2 - Grading Students

var gradingStudents = function (grades: number[]): number[] {
  return grades.map((grade: number): number => {
    if (grade < 38) return grade;

    const multipleOf5: number = Math.ceil(grade / 5) * 5;

    return multipleOf5 - grade < 3 ? multipleOf5 : grade;
  });
};

// console.log(gradingStudents([84, 29, 57]));

//Problem-3 - Time Conversion

var timeConversion = function (s: string): string {
  let [time, period] = [s.slice(0, -2), s.slice(-2)];
  let [h, m, sec] = time.split(":");

  let hour = Number(h);

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) hour += 12;

  return `${String(hour).padStart(2, "0")} : ${m} : ${sec}`;
};

// console.log(timeConversion("12:30:45PM"));

//Problem-4 - String Repeat

var repeatStr = function (n: number, s: string): string {
  let result: string = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
};

// console.log(repeatStr(4, "a"));

//Problem-5 - Reversed Strings

var solution = function (str: string): string {
  let result: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

// console.log(solution("Tauhid"));

//Problem-6 - Sum of Positive

var positiveSum = function (arr: number[]): number {
  let sum = 0;

  for (const a of arr) {
    if (a > 0) sum += a;
  }

  return sum;
};

// console.log(positiveSum([-1, -2, 0, -5]));

//Problem-7 - Grasshopper Summation.

var summation = function (num: number): number {
  const summation = (num * (num + 1)) / 2;

  return summation;
};

// console.log(summation(1));

//Problem-8 - Convert a Boolean to a String.

var booleanToString = function (b: boolean) {
  return b ? "true" : "false";
};

// console.log(booleanToString(true));

//Problem-9 - Fizz Buzz

var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

// console.log(fizzBuzz(15));

//Problem-10 - Running Sum of 1D Array

var runningSum = function (nums: number[]): number[] {
  const sum: number[] = new Array<number>(nums.length);

  let total: number = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    sum[i] = total;
  }
  return sum;
};

// console.log(runningSum([1, 2, 3, 4]));

//Problem-11 - Richest Customer Wealth

var maximumWealth = function (accounts: number[][]): number {
  let max: number = 0;

  for (const customer of accounts) {
    let wealth: number = 0;
    for (const amount of customer) wealth += amount;

    if (wealth > max) max = wealth;
  }
  return max;
};

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ]),
// );

//Problem-12 - Remove Duplicates from Sorted Array

var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;

  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//Problem-13 - Contains Duplicate

var containsDuplicate = function (nums: number[]): boolean {
  const answer: Set<number> = new Set<number>();

  for (const n of nums) {
    if (answer.has(n)) return true;
    answer.add(n);
  }

  return false;
};

// console.log(containsDuplicate([1, 2, 3, 1]));

//Problem-14 - Move Zeroes

var moveZeroes = function (nums: number[]): void {
  let insertPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  while (insertPosition < nums.length) {
    nums[insertPosition] = 0;
    insertPosition++;
  }
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

//Problem-15 - Merge Sorted Array

var merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  for (let i = 0; i < n; i++) {
    nums1[m + 1] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//Problem-16 - 3Sum

// var threeSum = function (nums: number[]): number[][] {

// };

//Problem-17 - Plus One

var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// console.log(plusOne([1, 2, 9]));

//Problem-18 - Reverse String

var reverseString = function (s: string[]): void {
  let left: number = 0;
  let right: number = s.length - 1;
  while (left < right) {
    const tmp: string = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};

// console.log(reverseString(["h", "e", "l", "l", "o"]));

//Problem-19 - Length of Last Word

var lengthOfLastWord = function (s: string): number {
  const words = s.trim().split(/\s+/);
  const lastWord = words[words.length - 1];
  return lastWord.length;
};

// console.log(lengthOfLastWord("Hello World"));

//Problem-20 - Longest Common Prefix

var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === " ") return "";
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
