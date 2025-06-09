//클래스
class Student {
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}

class StudentDev extends Student {
    //필드
    skill

    //생성자
    constructor(name, grade, age, skill) {
        super(name, grade, age)
        this.skill = skill
    }
     //메서드
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }

    programming() {
        console.log(`${this.skill}로 프로그래밍 함`);
    }
}

//클래스를 이용해서 만든 객체 -> 인스턴스
//스튜던트 인스턴스
let studentB = new Student('김민서', 'A+', 38);
console.log(studentB);
studentB.study();
studentB.introduce();

let studentDev = new StudentDev('김민서', 'A+' , 38, "React");
console.log(studentDev);
studentDev.study();
studentDev.introduce();
studentDev.programming();