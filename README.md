# NASA API Data Fetcher

This project retrieves and logs specific data from NASA's Small-Body Database (SBDB) API. The provided script fetches the producer's name of an orbit for a given small-body designation and prints it.

## Prerequisites

- Node.js installed on your machine.

## Usage

1. Create a new file named `nasaapi.js` (if it doesn't already exist) and paste the following code into it:

    ```javascript
    async function NasaApi(link) {
        try {
            const response = await fetch(link);
            const result = await response.json();
            const id = result.orbit.producer;
            console.log(id);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("");
        }
    }

    NasaApi("https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab");
    ```

2. Run the script using Node.js:

    ```bash
    node nasaapi.js
    ```

3. The output should display the producer's name of the orbit data, in this case, "Otto Matic".



