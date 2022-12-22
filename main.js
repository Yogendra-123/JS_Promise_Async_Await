// Ques 1 

function fun(a, b, add) {
    console.log(a);
    add(2, 3);
    console.log(b);

}

function add(c, d) {
    console.log(`sum is ${c + d}`);
}

fun(2, 3, add)


// Ques 2


setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
            setTimeout(()=>{
                console.log(4);
                setTimeout(()=>{
                    console.log(5);
                    setTimeout(()=>{
                        console.log(6);
                        setTimeout(()=>{
                            console.log(7);
                            
                        }, 1000)
                        
                    }, 1000)
                    
                }, 1000)
                
            }, 1000)
            
        }, 1000)
        
    }, 1000)
}, 1000)



// Ques 3. 


let printNumber = (time, num) => {
    return new Promise((res, rej) => {
        if(num){
            setTimeout(()=>{
                res(num());
            }, time)
        }
        else{
            rej(console.log("No Number"))
        }

    })
}

printNumber(0, ()=>console.log("Number"))
.then(()=>{
    printNumber(1000, ()=>console.log("1"))
})
.then(()=>{
    printNumber(2000, ()=>console.log("2"))
})
.then(()=>{
    printNumber(3000, ()=>console.log("3"))
})
.then(()=>{
    printNumber(4000, ()=>console.log("4"))
})
.then(()=>{
    printNumber(5000, ()=>console.log("5"))
})
.then(()=>{
    printNumber(6000, ()=>console.log("6"))
})
.then(()=>{
    printNumber(7000, ()=>console.log("7"))
})


// Ques 4 .

let x = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition == 'yes'){
            resolve('promise resolved')
        }
        else{
            reject('promise rejected')
        }
    })
}

x('yes').then(response => console.log(response)).catch(err=>console.log(err))


// Ques 5. 

function fun(a, b, add) {
    console.log(a);
    add(2, 3);
    console.log(b);

}

function add(c, d) {
    console.log(`sum is ${c + d}`);
}

fun(2, 3, add)


// Ques 6.

function CallBackDemo() {
    CallBackDemo1()
    function CallBackDemo1() {
        CallBackDemo2()
        function CallBackDemo2() {
            CallBackDemo3()
            function CallBackDemo3() {
                CallBackDemo4()
                function CallBackDemo4() {
                    console.log("Callback Functon");
                }
            }
        }
    }
}
CallBackDemo()

// Ques 7. 

let message = (num) => {
    return new Promise((res, rej) => {
        if(num){
            res(num())
        }
        else{
            rej(console.log("No Data"))
        }

    })
}

message(()=>console.log("Message is printed"))
.then(()=>{
    prntdata(()=>console.log("Promise Functon"))
})
.catch(()=>console.log("No Data available"))


// Ques 8. 


const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);



// Ques 9. 


const fun1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    },1000);
  });
  const fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2000);
  });
  const fun3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([fun1, fun2, fun3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });




