import React, { useContext, createContext } from "react";
import { LoadingAuth } from "../widgets";
import { auth } from "../../modules/firebase";
import { AuthState } from "../../types";

const AuthContext: React.Context<AuthState> = createContext<AuthState>({
  isLogin: false,
});

function useAuth(): AuthState {
  return useContext<AuthState>(AuthContext);
}

class AuthProvider extends React.Component<
  {
    chirdlen?: JSX.Element;
  },
  {
    isLogin: boolean;
    isLoading: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      isLogin: false,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user: any) => {
      if (user === undefined || user === null)
        this.setState({
          isLogin: false,
          isLoading: false,
        });
      else
        this.setState({
          isLogin: true,
          isLoading: false,
        });
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isLogin: this.state.isLogin,
        }}
      >
        {this.state.isLoading ? <LoadingAuth /> : this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { useAuth, AuthProvider };
