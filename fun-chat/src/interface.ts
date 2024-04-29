export interface Route {
  [key: string]: () => void;
}

export interface IResponseUser {
    id: string | null,
    type: "USER_LOGIN",
    payload: {
      user: {
        login: string,
        password: string,
      },
    },
}

export interface UserLoginPayload {
  login: string;
  password: string;
}

export interface UserLoginPayloadOutcoming {
  login: string;
  isLogined: boolean;
}

export interface WebSocketMessage {
  id: string;
  type: string;
  payload: {
    user: UserLoginPayload;
  };
}

export interface WebSocketMessageOutcoming {
  id: string;
  type: string;
  payload: {
    user: UserLoginPayloadOutcoming;
    error?: string | undefined;
  };
}

export interface user {
  login: string;
  isLogined: boolean;
}