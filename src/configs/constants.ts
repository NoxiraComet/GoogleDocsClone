export const FIRESTORE_COLLECTIONS = {
  userDocuments: "userDocs",
  documents: "docs",
} as const;

export const DOCUMENT_DATE_FORMAT = "DD MMM YYYY";

export const ROUTES = {
  home: "/",
  login: "/login",
  document: (id: string) => `/doc/${id}`,
} as const;

export const APP_STRINGS = {
  appName: "Google Docs Clone",
  searchPlaceholder: "Search",
  newDocumentTitle: "Start a new document",
  documentsTitle: "My Documents",
  blankDocumentTitle: "Blank",
  documentNamePlaceholder: "Enter name of document...",
} as const;
