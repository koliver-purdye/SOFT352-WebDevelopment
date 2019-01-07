var url = require('url')
var fs = require('fs')

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if (error){
            response.writeHead(404)
            response.write('File not found')
        } else {
            response.write(data)
        }
    response.end()
    })
}

module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200,{'Content-type': 'text/html'})
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', response)
                break
            case '/BasicSection.html':
                renderHTML('./BasicSection.html', response)
                break
            case '/IntermediateSection.html':
                renderHTML('./IntermediateSection.html', response)
                break
            case '/AdvancedSection.html':
                renderHTML('./AdvancedSection.html', response)
                break
            case 'Profile.html':
                renderHTML('.Profile.html', response)
                break
            default :
                response.writeHead(404)
                response.write('File not found')
                response.end()

        }
        
    }
}