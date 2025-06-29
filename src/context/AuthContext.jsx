import { useState, useEffect, createContext, useContext } from "react";
import { account } from "../appwrite/config";
import BrandedLoader from "../components/common/BrandedLoader";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authLoading, setAuthLoading] = useState(true); // ✅ changed name
    const [user, setUser] = useState(null);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await checkUserStatus();
        setUser(response);
        setAuthLoading(false); // ✅ not 'loading'
    };

    const checkUserStatus = async () => {
        try {
            const userData = await account.get();
            return userData;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const loginUser = async (email, password) => {
        // Don't set `authLoading` here — let UI component handle its own loading
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await checkUserStatus();
            setUser(response);
        } catch (error) {
            setUser(null);
            console.error(error);
            throw error;
        }
    };

    const logoutUser = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    const contextData = { user, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={contextData}>
            {authLoading ? <BrandedLoader /> : children}
        </AuthContext.Provider>
    );
};


const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth };

export default AuthProvider;