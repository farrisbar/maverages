export function mavgBrute(window:number, input: number[]) : number[] {

    let N: number;
    let output:number[];

    // Correct the window: minimum is a window size of 1
    if(window &&  window > 0) {
        window = Math.floor(window)
    } else {
        window = 1;
    }

    // Correct the input array and allocate the output
    if(input && Array.isArray(input)){
        N = input.length;
        output = new Array(N);
    } else {
        N = 0;
        input = [];
        output = [];
    }

    // Perform an outer pass through the array.
    for(let i = 0; i < N; i++){
        //console.log(`i=${i}`)
        let acc = clamp(input[i], window);     // Initialize the accumulator
        let count = 1;

        // Accumulate window size elements in the past
        for(let j = 1; j < window; j++){
            if(i - j >= 0){
                acc += clamp(input[i - j], window);
                count += 1
                //console.log(`i-${j}=`, i-j)
            } else {
                break;
            }
        }
        //console.log("\tacc=",acc, "count=", count)
        // Compute the output element
        if(count > 1){
            output[i] = acc / count;
        } else {
            output[i] = acc;
        }
        //console.log("\toutput=",output)
    }

    return output;
}

function clamp(a:number, w:number):number{

    if(a > Number.MAX_SAFE_INTEGER/w){
        return Number.MAX_SAFE_INTEGER/w;
    }
    if(a < Number.MIN_SAFE_INTEGER/w){
        return Number.MIN_SAFE_INTEGER/w;
    }
    return a;
}
