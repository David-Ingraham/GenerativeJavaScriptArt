


nSq = 60


for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(800, 800));
    rect.strokeColor = 'black';
    rect.fillColor = 'red';
    rect.strokeWidth = 1;
    rect.rotate(-x);
}


for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(400, 400));
    rect.strokeColor = 'black';
    rect.fillColor = 'blue';
    rect.strokeWidth = '1';
    rect.rotate(x);
}


for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(200, 200));
    rect.strokeColor = 'black';
    rect.fillColor = 'green';
    rect.strokeWidth = '1';
    rect.rotate(-x);
}


for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(100, 100));
    rect.strokeColor = 'black';
    rect.fillColor = 'yellow';
    rect.strokeWidth = '1';
    rect.rotate(x);
}

for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(50, 50));
    rect.strokeColor = 'black';
    rect.fillColor = 'pink';
    rect.strokeWidth = '1.175';
    rect.rotate(-x);
}

for(let x=0; x<nSq; x++){
    let rect = Path.Rectangle(new Point(200, 200), new Size(25, 25));
    rect.strokeColor = 'violet';
    rect.fillColor = 'black';
    rect.strokeWidth = '1';
    rect.rotate(x);
}










