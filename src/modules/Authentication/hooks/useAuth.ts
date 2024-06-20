import { useSetAuthState } from "src/store/auth/auth.atom";

export default function useAuth() {
    const setAuthState = useSetAuthState();
    function authenticateUser() {
        localStorage.setItem('sid.set', 'true');
        setAuthState(state => ({ ...state, isAuthenticated: true }));
    }
    
    return { authenticateUser }
}