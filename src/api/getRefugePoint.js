export async function getRefugePoint() {
    var arrayRefugePoint = [];
    const response = await fetch(`${process.env.PUBLIC_URL}/data/refugePoint.json`)
    const assemblyPointJson = await response.json();
    
    assemblyPointJson.forEach(function(item){
        arrayRefugePoint.push(item);
    });
    return arrayRefugePoint
}