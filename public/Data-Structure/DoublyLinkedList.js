function DoublyLinkedList(){
    var length = 0;
    var head = null;
    var tail = null;

    var Node = function(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }

    this.size = function() {
        return length;
      };
    
    this.head = function() {
        return head;
    };

    //add node in linkedlist
    this.add = function(element){
        var node = new Node(element)
        if(!head){
            head = node;
            tail = node;
        } else {
            node.previous = tail;
            tail.next = node;   
            tail = node;
        }
        length++;
    }

    //display list
    this.display = function(){
        var currentNode = head;
        var string = '';
        while(currentNode != null){
            string += currentNode.element + ' ';
            currentNode = currentNode.next;
        }
        console.log(string.trim());
    }

    //remove list
    this.remove = function(element){
        var currentNode = head;
        while(currentNode){
            if(currentNode.element === element){
                if(currentNode === head  && currentNode === tail){
                    head = null;
                    tail = null;
                }else if(currentNode === head){
                    head = head.next;
                    head.previous = null;
                }else if(currentNode === tail){
                    tail = tail.previous;
                    tail.next = null;
                } else {
                    currentNode.previous.next = currentNode.next;
                    currentNode.next.previous = currentNode.previous;
                }
                length--;
            }
            currentNode = currentNode.next;
        }
    }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.display(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.display()
console.log('length is 4:', doublyLinkedList.size()); // => 4
doublyLinkedList.remove(2); // remove value
doublyLinkedList.display(); 