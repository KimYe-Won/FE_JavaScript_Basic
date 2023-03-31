/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    var answer = 1;
    var mul=1;
    while(answer<=n) {
        answer*=(mul);
        mul+=1;
    
    }
    return mul-2;
}