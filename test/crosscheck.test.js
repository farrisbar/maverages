import {mavg} from "../dist/maverages.js";
import {mavgBrute} from "../dist/maverages_brute.js";

test('crosscheck brute and optimized [example 1]', ()=>{
    let w = 3;
    let i = [0,1,2,3]
    let iCopy = [...i]
    let o1 = mavg(w, i)  // input is modified in-place
    let o2 = mavgBrute(w, iCopy)

    for(let k = 0; k < iCopy.length; k++){
        expect(o1[k] === o2[k])
    }
})

test('crosscheck brute and optimized [example 2]', ()=>{
    let w = 3;
    let i = [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]
    let iCopy = [...i]
    let o1 = mavg(w, i)  // input is modified in-place
    let o2 = mavgBrute(w, iCopy)

    for(let k = 0; k < iCopy.length; k++){
        expect(o1[k] === o2[k])
    }
})

test('crosscheck clamping [w=1]', ()=>{
    let w = 1;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavg(w, i)  // input is modified in-place
    let o2 = mavgBrute(w, iCopy)

    for(let k = 0; k < iCopy.length; k++){
        expect(o1[k] === o2[k])
    }
})

test('crosscheck clamping [w=3]', ()=>{
    let w = 3;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavg(w, i)  // input is modified in-place
    let o2 = mavgBrute(w, iCopy)

    for(let k = 0; k < iCopy.length; k++){
        expect(o1[k] === o2[k])
    }
})

test('crosscheck clamping [w=5]', ()=>{
    let w = 5;
    let bigNumber = Number.MAX_SAFE_INTEGER+100
    let i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]

    let iCopy = [...i]
    let o1 = mavg(w, i)  // input is modified in-place
    let o2 = mavgBrute(w, iCopy)

    for(let k = 0; k < iCopy.length; k++){
        expect(o1[k] === o2[k])
    }
})
