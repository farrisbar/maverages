export function mavg(window:number, input: number[]) : number[] {

    let accumulator = 0.00;
    let count = 0;
    let N: number;
    let w: number[];
    let output: number[];

    // Validate the window argument:
    // - must be specified (defaults to 1)
    // - must be >= 1
    // - must be an integer
    if(window &&  window > 0) {
        window = Math.floor(window)
    } else {
        window = 1;
    }

    // Validate the input array
    if(input && Array.isArray(input)){
        N = input.length;
        output = new Array(N);
        w = new Array(window);
    } else {
        N = 0;
        input = [];
        output = [];
    }

    // Perform an outer pass through the array
    for(let i = 0; i < N; i++){

        //---------------------
        // Update accumulator
        //---------------------

        // If window is full, remove one element
        if(count === window){
            accumulator -= clamp(input[i - window], window);
            count -= 1;
        }

        // Add current element to the accumulator
        accumulator += clamp(input[i], window);
        count += 1;



        //---------------------
        // Compute output
        //---------------------
        output[i] = accumulator / count;
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
