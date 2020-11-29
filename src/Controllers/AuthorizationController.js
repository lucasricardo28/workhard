module.exports = {
    async login(request, response)
    {
        const {username, password} = request.body

        if (username != "ricardo.martins" || password != "123")
            return response.status(403).send()

        var data = {"type" : "Bearer", "token" : "AA"}
        
        return response.status(200).json();
    } 
}