

export default function jsType():void{
    console.log("------자바스크립트 타입-----")
    /*
    Type의 종류: boolean,number,string,
    undefined,null,JSON,array,function  => protoType
    * */

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
}