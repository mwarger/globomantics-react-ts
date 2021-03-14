/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signOutUser
// ====================================================

export interface signOutUser_signOut_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface signOutUser_signOut {
  __typename: "AuthPayload";
  user: signOutUser_signOut_user | null;
}

export interface signOutUser {
  signOut: signOutUser_signOut | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createSession
// ====================================================

export interface createSession_createSession {
  __typename: "Session";
  id: string;
  title: string;
}

export interface createSession {
  createSession: createSession_createSession | null;
}

export interface createSessionVariables {
  session?: SessionInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sessionInfo
// ====================================================

export interface sessionInfo_sessionById_speakers {
  __typename: "Speaker";
  id: string;
  name: string | null;
}

export interface sessionInfo_sessionById {
  __typename: "Session";
  id: string;
  title: string;
  day: string | null;
  room: string | null;
  level: string | null;
  speakers: (sessionInfo_sessionById_speakers | null)[] | null;
}

export interface sessionInfo_user_favorites {
  __typename: "Session";
  id: string;
}

export interface sessionInfo_user {
  __typename: "User";
  id: string;
  favorites: sessionInfo_user_favorites[] | null;
}

export interface sessionInfo {
  sessionById: sessionInfo_sessionById | null;
  user: sessionInfo_user | null;
}

export interface sessionInfoVariables {
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

export interface SessionInput {
  title: string;
  description?: string | null;
  format?: string | null;
  level?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
