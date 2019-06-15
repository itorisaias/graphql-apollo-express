import cors from 'cors';

const config: cors.CorsOptions = {
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
};

export default cors(config);
