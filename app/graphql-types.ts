/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sessionById
// ====================================================

export interface sessionById_sessionById_speakers {
  __typename: "Speaker";
  id: string;
  name: string | null;
}

export interface sessionById_sessionById {
  __typename: "Session";
  id: string;
  title: string;
  day: string | null;
  room: string | null;
  level: string | null;
  speakers: (sessionById_sessionById_speakers | null)[] | null;
}

export interface sessionById_user_favorites {
  __typename: "Session";
  id: string;
}

export interface sessionById_user {
  __typename: "User";
  id: string;
  favorites: sessionById_user_favorites[] | null;
}

export interface sessionById {
  sessionById: sessionById_sessionById | null;
  user: sessionById_user | null;
}

export interface sessionByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userInfo
// ====================================================

export interface userInfo_userInfo_user {
  __typename: "User";
  id: string;
  email: string;
  role: Role | null;
}

export interface userInfo_userInfo {
  __typename: "AuthPayload";
  user: userInfo_userInfo_user | null;
}

export interface userInfo {
  userInfo: userInfo_userInfo | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
