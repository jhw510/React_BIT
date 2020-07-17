import hello, {goodbye, plusNum,birthday} from "./hello";
import jsType from "./jsTypes";
import tsType,{symbolType,tupleType} from "./tsTypes";
import operator,{destructur,spread} from "./operator";
import loop from "./lope";
let menu:number= 6

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
        profile = JSON.stringify(birthday(name,year))
        console.log(profile)
        break
    case 2:
        let num1:number =10
        let num2:number = 30
        let addResult:number = num1 + num2
        const addNum = plusNum(num1,num2,addResult)
        console.log(`덧셈결과: ${addNum}`)
        break
    case 3://자바스크립트 타입 출력
       // jsType()
        tsType()
        break
    case 4://타입스크립트 타입 출력
       // tsType()
       //symbolType()
        tupleType()
        break
    case 5:
       // operator()
        destructur()
        spread()
        break
    case 6:
        loop()

        break
    default:
        console.log("존재하지않습니다.")
        break
}