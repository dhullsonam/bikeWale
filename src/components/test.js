  const items = [2,4,5,6,7,8,9,10,11]

   const result = items.reduce( (a,b) => a+b)
  console.log(result)

  const re = items.filter(i => i%2 ===0)
  console.log(re)
