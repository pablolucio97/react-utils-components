export default function transposeMatriz(a : any) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r: any) { return r[c]; });
    });
}


