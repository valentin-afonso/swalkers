export async function getAssemblyPoint(DestinationGeneralId) {
    var arrayAssemblyPoint = [];
    const response = await fetch(`${process.env.PUBLIC_URL}/data/assemblyPoint.json`)
    const assemblyPointJson = await response.json();
    
    assemblyPointJson.forEach(function(item){
        if (item.destination === DestinationGeneralId) {
            arrayAssemblyPoint.push(item);
        }
    });
    return arrayAssemblyPoint
}