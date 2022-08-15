export function clearAll(){
    localStorage.clear();
}
export function getColors(){
    let colors = localStorage.getItem("colores");
    if(colors != null){
        let arrColors = colors.split(',');
        return arrColors;
    }else{
        return new Array();
    }
}

export function addColor(color){
    let colors = getColors();
    colors.push(color);
    localStorage.setItem("colores", colors.toString());
    return color;
}

