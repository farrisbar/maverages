import {mavgBrute} from "../dist/maverages_brute.js";
import {mavg} from "../dist/maverages.js";

test('brute force implementation can be called with no arguments', ()=>{
    expect(mavgBrute().length).toBe(0)
})

test('verify output matches with spec [example 1]', ()=>{
    let w = 3;
    let i = [0,1,2,3]
    let iCopy = [...i]
    let o = mavgBrute(w, i)  // input is modified in-place

    let specOutput = [0, 0.5, 1, 2]

    for(let k = 0; k < iCopy.length; k++){
        expect(o[k] === specOutput[k])
    }
})

test('verify output matches with spec [example 2]', ()=>{
    let w = 5;
    let i = [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]
    let iCopy = [...i]
    let o = mavgBrute(w, i)  // input is modified in-place

    let specOutput = [0, 0.5, -0.333333333333333, 0.5, -0.4, 0.6, -0.8, 1, -1.2, 1.4]

    for(let k = 0; k < iCopy.length; k++){
        expect(o[k] === specOutput[k])
    }
})
test('verify recovery after clamping [w=1]', ()=>{
    let w = 1;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavgBrute(w, i)  // input is modified in-place

    for(let k = 20; k < iCopy.length; k++){
        expect(o1[k] === 1)
    }
})

test('verify recovery after clamping [w=2]', ()=>{
    let w = 2;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavgBrute(w, i)  // input is modified in-place

    for(let k = 20; k < iCopy.length; k++){
        expect(o1[k] === 1)
    }
})
test('verify recovery after clamping [w=3]', ()=>{
    let w = 3;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavgBrute(w, i)  // input is modified in-place

    for(let k = 20; k < iCopy.length; k++){
        expect(o1[k] === 1)
    }
})
test('verify recovery after clamping [w=5]', ()=>{
    let w = 5;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavgBrute(w, i)  // input is modified in-place

    for(let k = 20; k < iCopy.length; k++){
        expect(o1[k] === 1)
    }
})
