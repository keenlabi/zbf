import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLoader from "../shared/components/Loaders/PageLoader";
import { FetchUserProfileAction } from "../shared/api/user.api";
import { authInitState, useSetAuthState } from "../store/auth/auth.atom";
import { useUserState, userInitState } from "../store/user/user.atom";
import PageNotFound from "src/modules/PageNotFound";

interface IProtectedRouteProps {
  children:JSX.Element;
  authRequired?:boolean;
  allowedRoles?:string[]
}
export default function ProtectedRoute(props:IProtectedRouteProps) {

  const navigate = useNavigate();

  const setAuthState = useSetAuthState();
  const [userState, setUserState] = useUserState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchUserProfileAction()
    .then((response) => {
      setAuthState((state)=> ({ ...state, isAuthenticated: true }))
      setUserState((state)=> ({ ...state, profile: response.user }));
    })
    .catch(() => {
      localStorage.removeItem("sid.set")
      setAuthState(authInitState);
      setUserState(userInitState);
      props.authRequired && navigate({ pathname: "/login" });
    })
    .finally(() => setIsLoading(false));

  }, [navigate, props.authRequired, setAuthState, setUserState]);

  if (isLoading) return <PageLoader />;
  if(props.allowedRoles && !props.allowedRoles?.includes(userState.profile.role)) return <PageNotFound />
  return props.children;
}
