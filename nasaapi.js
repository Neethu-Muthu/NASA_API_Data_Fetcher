async function NasaApi(link)
{
    try {
        const respose=await fetch(link)
        const result=await respose.json();
        id=result.orbit.producer;
        console.log(id);
        //console.log("result");
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("");
    }
}
NasaApi("https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab")