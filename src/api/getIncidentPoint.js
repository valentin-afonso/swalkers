export async function getIncidentPoint() {
    var arrayIncidentPoint = [];
    const response = await fetch(`${process.env.PUBLIC_URL}/data/incidentPoint.json`)
    const assemblyPointJson = await response.json();
    
    assemblyPointJson.forEach(function(item){
        arrayIncidentPoint.push(item);
    });
    return arrayIncidentPoint
}