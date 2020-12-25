var mergeTwoLists = function(l1, l2) {

    let headNode=new ListNode()
    let pre=headNode

    while(l1&&l2){
        if(l1.val<l2.val){
            pre.next=l1
            l1=l1.next
        }else{
            pre.next=l2
            l2=l2.next
        }
        pre=pre.next
    }
    if(l1)
        pre.next=l1
    if(l2)
        pre.next=l2
    return headNode.next        
};
