// Question 3
// 请实现一个 batch 函数, 来实现一组异步操作的并发
// , 在全部操作完成后, 分别打印成功的操作结果和失败的操作结果

/**
 * @param {(() => Promise<any>)[]} asyncActions
 */
async function batch(asyncActions) {
    const results = await Promise.allSettled(asyncActions.map(action => action()));

    const successes = results
        .filter(result => result.status === "fulfilled")
        .map(result => result.value);

    const failures = results
        .filter(result => result.status === "rejected")
        .map(result => result.reason);

    console.log("成功的操作结果:", successes);
    console.log("失败的操作结果:", failures);
}