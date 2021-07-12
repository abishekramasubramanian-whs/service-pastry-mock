import mockserver from 'mockserver-node';
import mockServerClient from 'mockserver-client';

mockserver.start_mockserver({
    serverPort: 1080,
    verbose: true,
    trace: true
});

setTimeout(() => {
    mockServerClient.mockServerClient("localhost", 1080).openAPIExpectation({
        "specUrlOrPayload": "https://raw.githubusercontent.com/microcks/microcks/master/samples/APIPastry-openapi.yaml"
    }).then(
        function() {
            console.log("Expectations created");
        },
        function(error) {
            console.log(`Error setting up expectations: ${error}`);
        }
    );
}, 15000);
