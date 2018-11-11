function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    if(l1 === null || l2 === null){
        return l1 || l2;
    }
    
    var result = new ListNode(0);
    var cur = result;
    var p = l1;
    var q = l2;
    var carry = 0;
    
    while(p || q){
        var qval;
        var pval;
        
        if(q){
            qval = q.val;
            q = q.next;
        } else {
            qval = 0;
        }
        
        if(p){
            pval = p.val;
            p = p.next;
        } else {
            pval = 0;
        }
        
        var sum = qval + pval + carry;
        
        carry = (sum > 9) ? 1 : 0;
        sum = sum % 10;
        
        cur.next = new ListNode(sum);
        cur = cur.next;
    }
    
    if(carry !== 0){
        cur.next = new ListNode(1);
    }
    
    return result.next;
};

let l1 = [2,4,3];
let l2 = [5,9,6];
console.log(addTwoNumbers(l1,l2))