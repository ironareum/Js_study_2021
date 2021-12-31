function removeItems(items, removable){ 
    const index = items.indexOf(removable); 
    return [...items.slice(0,index), ...items.slice(index+1)];
}

const cart = ['Naming and Neccessity', 'Alice in Wonderland', 'hoyaa'];

removeItems(cart, 'Alice in Wonderland');