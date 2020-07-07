import hello, {goodbye, plusNum} from "./hello";
import {birthday} from "./hello";

let menu:number= 2

let name,profile:string=""
switch (menu) {
    case  0:
        name ="홍길동"
        const message= goodbye(name)
        console.log(message)
        break
    case 1:
        name="김유신"
       let year:number = 2002
        profile = birthday(name,year)
        console.log(profile)
        break
    case 2:
        let num1:number =10
        let num2:number = 30
        let addResult:number = num1 + num2
        const addNum = plusNum(num1,num2,addResult)
        console.log(`덧셈결과: ${addNum}`)
        break
    default:
        console.log("존재하지않습니다.")
        break
}