export default function operator():void {
    console.log(`-----1.산술연산자-----`)
    console.log(`10 ** 3 :${10 ** 3}`)
    console.log(`-----2. 부정연산자-----`)
    console.log(`!"hello" : ${!"hello"},!!"hello" : ${!!"hello"}`)
    console.log(`!0 : ${!0}, !!0 : ${!!0} , !1 :${!1} , !2 : ${!2}`)
    console.log(`!true: ${!true}, !!true:${!!true}`)
}

export function destructur():void{
    console.log(`----------1.객체 구조분해--------`)
    let {a,b,...c}={a:10,b:20,c:30,d:40}
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`----------2.배열 구조분해--------`)
    let numbers = ["a","b","c","d","e"]
    let [num1,num2]=numbers
    console.log(`[num1,num2]===>${num1},${num2}`)

    let [,,num3,num4,]=numbers
    console.log(`[,,num3,num4]===>${num3},${num4}`);
    //디스트럭처링을 이용한 변수 값 교체
    [num4,num3]=[num3,num4]
    console.log(`[num4,num3]=[num3,num4]===>${num3},${num4}`)
    console.log(`[,,num3,num4]===>${num3},${num4}`)

    console.log(`----------3.함수 배열 구조분해--------`)
    fn([100,"hello"])
    function fn([a,b]:[number,string]){
        console.log(`함수배열 내부${a}`)
        console.log(`함수배열 내부${b}`)
    }
    printProfile()
    console.log(`------ 4. 함수 객체 구조분해 ------`)
    function printProfile({name,nation="korea"}={name:""}){
        console.log(name, nation)
    }
    printProfile({name:"홍길동"}) // 국적은 korea가 디폴트 값으로 작용
    printProfile({name:"유관순", nation:"USA"})
//printProfile({nation:"USA"}) 디폴트 값이 없으면 생략이 불가능
    let json = {}
    let arr = []
    let f = () => {}
    function f2() {}
    console.log(`------ 5. 사용자 타입 객체 구조분해 ------`)
    type Custom={a: string,b:number}   //let으로 줘버리면 제이슨이다
    function fruit({a,b}:Custom):void {
    console.log(a,b)
    }
 fruit({a:"사과",b:1000})
}


export function spread():void {
    console.log(`----------1.스프레드 연산자--------`)
    //배열 합치기
    let arr:number[]=[1,2]
    let arr2:number[]=[...arr,3,4]
    console.log(`배열 1번형태 ${arr2}`)
    //배열 디스트럭처링
    let [a, ...rest]:[number,number,number,number]=[1,2,3,4]
    console.log(`배열 2번형태 ${a}`)
    console.log(`배열 3번형태 ${rest}`)
    console.log(`배열 4번형태 ${rest[0]}`)


}
const x=() =>{function y() {
    console.log('a');
}}