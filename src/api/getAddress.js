export async function getAddress(address) {
    var arrayAddress = [];
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=France+Nantes+${address}&format=jsonv2`)
    const addressJson = await response.json();
    

    addressJson.forEach(function(item){
        arrayAddress.push(item.display_name);
    });
    return arrayAddress
}