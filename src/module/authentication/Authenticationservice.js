import apiClient from "../../config/api-client";

const login = (user) => 
apiClient.post('api/login_check', user).then(resp => resp.data);

const AuthenticationService = {
    login
}

export default AuthenticationService;