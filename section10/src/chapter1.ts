//Partial<T>
//-> 부분적인, 일부분의
//-> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입

interface Post {
    title: string,
    tags: string[],
    content: string,
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key]
};

const draft: Partial<Post> = {
    title: '제목 나중에 짓자',
    content: '초안...'
}

//Required<T>
//-> 필수의, 필수적인
//-> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
    title: 'tsssss',
    tags: ['ts'],
    content: '',
    thumbnailURL: ''
}

//Readonly<T>
//-> 읽기전용 수정부라
//-> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

const readonlyPost: Readonly<Post> = {
    title: '보호',
    content: '',
    tags: []
}

// readonlyPost.content = 'sdfsdf';