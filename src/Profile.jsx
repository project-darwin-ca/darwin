import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe(); // Cleanup the observer on component unmount
    }, []);

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    };

    const handleContinue = (e) => {
        e.preventDefault();

        // Navigate to "./home"
        navigate("/Home");
    };

    if (!user) {
        // If user is not authenticated, you might want to redirect to login or show a login component
        return <div>Loading...</div>;
        // add "Loading" circle here
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <p>Welcome <em className="text-decoration-underline">{user.email}</em>. You are logged in!</p>
                    <div mt-3></div>

                    <div className="d-grid gap-20">
                        <button type="submit" className="btn btn-success pt-1 pb-1" onClick={(e) => handleContinue(e)}>Continue</button>
                        <div mt-3></div>
                        <button type="submit" className="btn btn-primary pt-1 pb-1" onClick={(e) => logoutUser(e)}>Logout</button>                                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;