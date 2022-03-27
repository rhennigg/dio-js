//async e await

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolvida!');
        }, 2000);
    });
    let result;
    try{
        result = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
    }catch(err){
        result = err.message;
    }
    console.log(result);
    return result;
}

console.log(resolvePromise());