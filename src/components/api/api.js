import apiInstance from './apiInstance';

export default {
    name: 'api',
    methods: {
        get(url) {
            return apiInstance.get(url);
        },
    },
};
