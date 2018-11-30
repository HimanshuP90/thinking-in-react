//Memoization is the process of caching the output of function calls
//so that subsequent calls are faster. Calling the function again with
//the same input will return the cached output without needing to do the calculation again.

const memoize = fn => {
    const cache = new Map()
    return value => {
      const cachedResult = cache.get(value)
      if (cachedResult !== undefined) return cachedResult
      const result = fn(value)
      cache.set(value, result)
      return result
    }
}