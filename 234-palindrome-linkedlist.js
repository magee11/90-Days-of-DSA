/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // finding the middle value
    let fast = slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse second half
    let prev = null;
    let current = slow;
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    // check start and end
    let start = head;
    let end = prev;
    while(end){
        if(start.val !== end.val) return false;
        start = start.next;
        end = end.next;
    }
    return true;
};