import apiClient from "../../config/api-client";

const login = (user) => 
apiClient.post('api/login_check', user).then(resp => resp.data);

const getCurrentUserQuery =  {
    queryKey: ['me'],
    queryFn: () => apiClient.get('/me').then(resp => resp.data )
} 



const AuthenticationService = {
    login,
     getCurrentUserQuery
}

export default AuthenticationService;