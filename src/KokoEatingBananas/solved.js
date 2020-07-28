var minEatingSpeed = function (piles, H) {
    possible = function (K) {
        let time = 0;
        for (let p of piles)
            time += Math.ceil(p / K);
        return time <= H;
    }

    let lo = 1, hi = 10 ** 9;
    while (lo < hi) {
        let mi = lo + Math.floor((hi - lo) / 2);
        if (!possible(mi))
            lo = mi + 1;
        else
            hi = mi;
    }
    return lo;
};