let myBoolean=true
let myNumber=0
let myString=""
let myUndefined
let myNull = null
let myJSON=JSON
let myArray=Array()
let myFunction=function f(){}
console.log(`                myboolean:${typeof myBoolean}
                myNumber:${typeof myNumber}
                myString:${typeof myString}
                myUndefined:${typeof myUndefined}
                myNull:${typeof myNull},${myNull}
                myJSON:${typeof myJSON}
                myArray:${typeof myArray}
                myFunction:${typeof myFunction}
`)
export default function tsType():void{
    let basket:any=10
        basket="TV"
        basket=true
        console.log(basket)
        let arr:string[]=["a","b","c"]
        for(let i=0;i<arr.length;i++){
            //console.log(`${arr[i]}\t`)
        }
        let arr2:Array<string>=["d","e","f"]
         for(let i=0;i<arr.length;i++){
      //  console.log(`${arr2[i]}\t`)
         }
         console.log(`-----enum Type-----`)
    enum WeekDay{
             Mon,Tue,Wed,Thu=Tue+Wed
    }
    let thu2:number=10*2
    enum WeekDay2{
             Mon=10,Tue,Wed=10 << 2,Thu=thu2
    }
   enum WeekDay3{
             Mon="Monday",Tue="Tuesday"
   }
    console.log(`1.${JSON.stringify(WeekDay)}`)
    console.log(`2.${JSON.stringify(WeekDay2)}`)
    console.log(`3.${JSON.stringify(WeekDay3)}`)
    console.log(`4.Mon=${WeekDay.Mon},Tue=${WeekDay["Tue"]},Wed=${WeekDay.Wed}`)
    console.log(`5.0=${WeekDay[0]},1=${WeekDay[1]},2=${WeekDay[2]},`)
    console.log(`6.${typeof WeekDay}`)
    console.log(`7.${typeof WeekDay.Mon},${typeof WeekDay3.Mon}`)
    console.log(`8.${typeof WeekDay[0]},${WeekDay[0]}`)

  let myDay:WeekDay= 50
  console.log(`9.${typeof myDay},${myDay}`)
    let myDay2:WeekDay3= WeekDay3.Mon
    console.log(`10.${typeof myDay2},${myDay2}`)

}
export function symbolType():void {
    const hello=Symbol("hello")
    const hello2=Symbol("hello")
    // @ts-ignore
    console.log(hello === hello2)
    console.log(hello,hello2)
    console.log(typeof hello)

    console.log(`Symbol 2`)
    const uniqueKey = Symbol()
    let obj = {}
    obj[uniqueKey]=1234
    console.log(obj)
}
export function tupleType(): void {
    let x: [string,number]
    x = ["tuple", 100]
    console.log(typeof x, typeof x[0], typeof x[1])
    console.log(x[0].substr(0,2), x[1].toFixed(2))
    let x2: [string,number,string,boolean] = ["tuple", 3, "tuple2", false]
    console.log(x2)
}