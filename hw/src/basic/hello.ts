import {string} from "prop-types";


export default function hello(name:string):string {
    return `안녕${name}`
}
export function goodbye(name:string):string {
    return `잘가라 ${name}`
}
export function birthday(name:string,year:number):string {
    const profile = {
        name:name,age:(new Date().getFullYear() - year)
    }
    return `프로필 
            이름 : ${profile.name}
            나이 : ${profile.age}`
}
export function plusNum(num1:number,num2:number,addResult:number):string {
    let addNum = {
        num1:num1,num2:num2,addResult:addResult
    }
    return `${num1} + ${num2} = ${addResult} `
}