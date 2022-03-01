



let nr = 10;


let color1 = Color.random() - Color.random();
let color2 = (color1 + 0.8);
let colorDist = (color2 - color1)/ (2*nr-1);
let colorGradient = [];
for(let i = 0; i<2*nr-1;i++){
    colorGradient.push(color1 + colorDist*i);
}





for(let x = 0; x<(nr+5); x++){
    for(let y = 0; y<nr; y++){
        let rect = Path.Rectangle(new Point(x*80, y*80), new Size(80,80));
        rect.strokeColor= 'black';
        rect.strokeWidth = 2;
        rect.scale((x+10)/nr);
        rect.rotate(y*((nr**2)*Math.random() + 3));
        rect.fillColor = colorGradient[x+y];
      
    
    }
    
}