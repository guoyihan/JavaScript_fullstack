var hasCycle = function(head) {
    let fastp = head
    let slowp = head
    while(fastp) {
        if (fastp.next == null) return false;
        slowp = slowp.next
        fastp = fastp.next.next
        if (slowp == fastp) return true
    }
    return false
};