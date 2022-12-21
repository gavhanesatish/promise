class Stack
{
  constructor(f)
  {
   this.maxsize = f;
   this.stack = [];
   this.topsize = -1;
   this.top = this.stack[this.topsize];
  }

  push(val)
  {
   if(this.maxsize>this.topsize+1)
   {
   this.stack.push(val);
   this.topsize+=1;
   }
   else
   {
    console.log('Stack is full');
   }
  }

  pop()
  {
   if(this.topsize>-1)
   {
   this.stack.pop();
   this.topsize-=1;
   }

   else
   {
    console.log('Stack is empty');
   }
  }

  peek()
  {
   console.log(this.top);
  }

  display()
  {
   console.log('stack content : ',this.stack);
   console.log('top size : ',this.topsize+1);
  }
}

const stack1 = new Stack(3);
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.display();
stack1.push(4);
stack1.pop();
stack1.pop();
stack1.display();
stack1.pop();
stack1.pop();