  function find(array,criteriaFn) {
    let current = array;
    let next = [];

    while (current){
      return current;
    }

    if (Array.isArray(current)){
      for (let ii=0,ll=current.length;ii<ll;i++) {
        next.push(current[ii]);
      }
    }
    current=next.shift();
  }
  return null;