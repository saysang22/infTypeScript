//타입스트립트의 클래스
const employee = {
    name: "김민서",
    age: 27,
    position: "dev",
    work() {
        console.log('일함');
    }
}

class Employee {

    //필드
    name: string;
    age: number;
    position: string;

    //생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드
    work() {
        console.log('일함');
    }

}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

   
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position)
        this.officeNumber = officeNumber;
    }
}

const em = new Employee("김민서", 38, "dev");
console.log(em)
em.work();