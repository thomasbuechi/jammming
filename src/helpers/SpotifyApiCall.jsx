


export default async function SpotifyApiCalls(){

    const song = ["Aarons new Mixtape", "Aaron", "Aaron on the block", 2]
    const testId = "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"

    const fetch = await fetch(`https://hp-api.onrender.com/api/character/${testId}`)
    .then(response => {
      return response.json()
    }).then((jsonResponse) => {
        return jsonResponse.map(track => ({
            name: track.name,
            species: track.species,
        }))
    })
    
    /*
    const song = [{
        name: "Aarons new Mixtape",
        artist: "Aaron",
        album: "Aaron on the block",
        id: "2",
    }]
*/


}