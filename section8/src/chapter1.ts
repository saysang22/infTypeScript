//인덱스 엑세스 타입
type PostList =  {
    title: string,
    content: string,
    author: {
        id: number,
        name: string,
        age: number
    }
}[];

function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.name} - ${author.id}`)
}

const post: PostList[number]['content'] = '본문'

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];