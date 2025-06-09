//프로미스
const promise = new Promise<number>((res, rej) => {
    setTimeout(() => {
        // res(20);
        rej("~~ 때문에 실패")
    }, 3000)
})

promise.then((res) => {
    console.log(res * 10);
});

promise.catch((err) => {
    if(typeof err === 'string') {
        console.log(err);
    }
});

//프로미스를 반환하는 함수의 타입을 정의
interface Post {
    id: number,
    title: string,
    content: string
}

function fetchPost(): Promise<Post> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
               id: 1,
               title: '제목',
               content: '컨텐츠' 
            })
        }, 3000)
    })
}

const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})