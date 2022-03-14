- 1.1.20  
`memoize` function have a `reset` function attribute that allows to reset the memoized values.

- 1.1.19  
added `memoize` function; has a limitation: only functions supposed to receive arguments such as `[].slice.call(arguments).toString()` can be uniquely associated with `arguments` will be successfully memoized using that `memoize` funtion

...all previous changelog are lost in the git history 🙅‍♂️