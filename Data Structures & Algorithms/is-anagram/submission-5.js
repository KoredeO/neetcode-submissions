class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false


let count =0


console.log(count); // 3
const checked = new Set()
const letterCount =new Map()
        for(let i=0;i<s.length;i++){
       
                letterCount.set(s[i],(letterCount.get(s[i])??0)+1)
        }
        for(let j = 0;j<t.length;j++){
                if(!letterCount.get(t[j])||letterCount.get(t[j])==0){
                    return false
                }
                 letterCount.set(t[j],(letterCount.get(t[j])??0)-1)

            }
            return true
    }
}
