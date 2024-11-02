// Question 1
// 有一组符合 `A-B-C.D` 模式的字符串数组
// , 请实现以 `A > D > C > B` 的权重排序的函数
// , 比较函数分别为 `compareA`, `compareB`, `compareC`, `compareD`
// , 可以用尽可能多的方式实现它

// 提示: 可参考 `Array.prototype.toSorted`, `Array.prototype.sort` 方法

/**
 * @param {string[]} array
 * @param {object} comparators
 * @param {(a1: string, a2: string) => number} comparators.compareA
 * @param {(b1: string, b2: string) => number} comparators.compareB
 * @param {(c1: string, c2: string) => number} comparators.compareC
 * @param {(d1: string, d2: string) => number} comparators.compareD
 * @returns {string[]} outputArray
 */
function sort(array, { compareA, compareB, compareC, compareD }) {
    return array.toSorted((str1, str2) => {
        const [a1, b1, c1d1] = str1.split('-');
        const [c1, d1] = c1d1.split('.');

        const [a2, b2, c2d2] = str2.split('-');
        const [c2, d2] = c2d2.split('.');

        // Compare by A
        const compA = compareA(a1, a2);
        if (compA !== 0) return compA;

        // Compare by D
        const compD = compareD(d1, d2);
        if (compD !== 0) return compD;

        // Compare by C
        const compC = compareC(c1, c2);
        if (compC !== 0) return compC;

        // Compare by B
        return compareB(b1, b2);
    });
}


const strings = ["1-2-3.4", "1-2-3.5", "1-2-2.4"];
const comparators = {
    compareA: (a1, a2) => a1.localeCompare(a2),
    compareB: (b1, b2) => b1.localeCompare(b2),
    compareC: (c1, c2) => c1.localeCompare(c2),
    compareD: (d1, d2) => d1.localeCompare(d2)
};

const sortedArray = sort(strings, comparators);
console.log(sortedArray);

