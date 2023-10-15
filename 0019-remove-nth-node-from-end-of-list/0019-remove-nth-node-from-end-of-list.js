/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   head = new ListNode(null, head);
    let start = head;
    let end = head;
    while(n--) {
        end = end.next;
    }  
    while(end && end.next) {
        [start, end] = [start.next, end.next];
    } 
    
    start.next = start.next.next;
    return head.next;
};