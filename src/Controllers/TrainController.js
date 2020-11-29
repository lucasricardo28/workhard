module.exports = {
    async index(request, response)
    {
        return response.status(200).send();
    },

    async show(request, response)
    {
        return response.status(200).send();
    },

    async store(request, response)
    {
        return response.status(201).send();
    },

    async update(request, response)
    {
        return response.status(200).send();
    },

    async destroy(request, response)
    {
        return response.status(200).send();
    }
} 