// Promises III: Native Promise, Introducing the Executor

let promise = new Promise((resolve, reject)=>
  {
    setTimeout(()=>{
      resolve("Hiiiii, Edaaabit");
    }, 1000)
  })