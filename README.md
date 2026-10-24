# TypeScript Problem-Solving Solutions

This folder contains TypeScript solutions to beginner and intermediate programming exercises from platforms such as HackerRank, Codewars, and LeetCode.

## Contents

The implementations are collected in [`solution.ts`](./solution.ts).

| # | Problem | Main technique |
|---:|---|---|
| 1 | Staircase | String construction and iteration |
| 2 | Grading Students | Rounding to the next multiple of five |
| 3 | Time Conversion | Parsing and converting 12-hour time |
| 4 | String Repeat | Iterative string building |
| 5 | Reversed Strings | Reverse traversal |
| 6 | Sum of Positive | Conditional accumulation |
| 7 | Grasshopper Summation | Arithmetic-series formula |
| 8 | Convert a Boolean to a String | Boolean conversion |
| 9 | Fizz Buzz | Modulo-based conditionals |
| 10 | Running Sum of 1D Array | Prefix sums |
| 11 | Richest Customer Wealth | Nested iteration and maximum tracking |
| 12 | Remove Duplicates from Sorted Array | In-place two-pointer technique |
| 13 | Contains Duplicate | Set-based lookup |
| 14 | Move Zeroes | In-place array compaction |
| 15 | Merge Sorted Array | Array merging and numeric sorting |
| 16 | 3Sum | Not implemented yet |
| 17 | Plus One | Right-to-left carry handling |
| 18 | Reverse String | In-place two-pointer swapping |
| 19 | Length of Last Word | Trimming and whitespace splitting |
| 20 | Longest Common Prefix | Prefix comparison |

## Requirements

- Node.js
- npm
- A TypeScript runner such as [`tsx`](https://www.npmjs.com/package/tsx)

No project configuration or package installation is required for a quick run. Execute:

```bash
npx --yes tsx solution.ts
```

Alternatively, install `tsx` locally:

```bash
npm install --save-dev tsx typescript
npx tsx solution.ts
```

## Output

The file includes sample `console.log` calls for most implemented problems. Running it prints the results of those examples to the terminal.

Some functions, such as `moveZeroes`, `merge`, and `reverseString`, modify an input array in place and return `void`. To inspect the modified array, log the array after calling the function:

```ts
const values = [0, 1, 0, 3, 12];
moveZeroes(values);
console.log(values);
```

## Implementation status

- Problems 1–15 and 17–20 have implementations.
- Problem 16 (`3Sum`) is currently left as a placeholder.
- The examples in `solution.ts` are intended for quick manual verification and can be replaced with unit tests as the collection grows.

## Complexity overview

Most solutions run in linear time, `O(n)`, relative to the input size. The main exceptions are:

- `maximumWealth`: `O(r × c)` for `r` customers and `c` account values per customer.
- `removeDuplicates`: `O(n)` time and `O(1)` extra space.
- `containsDuplicate`: `O(n)` time and `O(n)` extra space.
- `merge`: `O((m + n) log(m + n))` because it sorts the combined array.
- `longestCommonPrefix`: at most `O(n × p)`, where `n` is the number of strings and `p` is the prefix length being checked.

## License

This repository is intended for personal learning and practice.
