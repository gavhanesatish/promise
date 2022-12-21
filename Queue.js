class Queue
{
 constructor()
 {
  this.queue = [];
  this.minpos = 0;
  this.maxpos = 0;
 }

 push(val)
 {
  this.queue.push(val);
  this.maxpos+=1;
 }

 pop()
 {
  if(this.maxpos>this.minpos)
  {
   const topValv = this.queue[this.minpos];
   this.queue[this.minpos] = 'undefined';
   this.minpos+=1;
  }
  else
  {
   console.log('Queue is empty!');
  }
 }

 displayVal()
 {
  console.log('Queue Content : ', this.queue);
  console.log('minpos : ',this.minpos);
  console.log('maxpos : ',this.maxpos);
 }
}

const q1 = new Queue();
q1.displayVal();
q1.push(100);
q1.push(200);
q1.displayVal();
q1.pop();
q1.pop();
q1.pop();