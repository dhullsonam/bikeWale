

function createHeaders() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github.v3+json");
    myHeaders.append("Authorization", "token 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");
    myHeaders.append("Content-Type", "application/json");
    return myHeaders
}

function getRequests(repoName) {
    var raw = JSON.stringify({
        "name": repoName
    });
    return raw
}

function sonam(result) {
    console.log("got result");
    console.log("----------------");
    console.log(result);
    console.log("----------------");
}
    function makeApiRequest(url, requestOptions, success, faliure) {
      var x = fetch(url, requestOptions)
      
      var z = x.then((res) => {
          return res.json()
      })

      z.then((r) => {
          success(r)
      })

      z.catch((e) => {
          faliure(e)
      })
    }
    function getValueFrom() {
    return "sonam"
    }


    export { createHeaders, getRequests, makeApiRequest ,getValueFrom};