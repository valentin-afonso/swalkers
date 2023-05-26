export async function getAddress(address) {
    var arrayAddress = [];
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=France+Nantes+${address}&format=jsonv2`)
    const addressJson = await response.json();
    

    addressJson.forEach(function(item){
        const address = {
            "coord": [{
                'lat': item.lat,
                'long': item.lon
            }],
            'name': item.display_name
        }
        arrayAddress.push(address);
    });
    return arrayAddress
}