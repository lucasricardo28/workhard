module.exports = {
    async login(request, response)
    {
        const {username, password} = request.body

        if (username != "ricardo.martins" || password != "123")
            return response.status(403).send()

        data = [
            'type' = "Bearer",
            'token' = "aa" 
        ];
        return response.status(200).json();
    } 
}