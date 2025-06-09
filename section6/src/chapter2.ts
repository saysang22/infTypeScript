//접근 제어자
//access modifier
//public, private, protected

class Employee {

    //필드
    protected name: string;
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

    func() {
        this.name;
    }
}


const em = new Employee("김민서", 38, "dev")
// em.name = "홍길동";
